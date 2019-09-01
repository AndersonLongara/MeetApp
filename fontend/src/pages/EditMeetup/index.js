import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { Container, Inputml, Loading } from './styles';
import BannerInput from '~/Components/BannerInput';
import DatePicker from '~/Components/DateInput';

const schema = Yup.object().shape({
  file_id: Yup.number().transform(value => (!value ? undefined : value)),
  title: Yup.string().required('Digite o título do meetup'),
  date: Yup.date().required('Selecione uma data'),
  description: Yup.string().required('Digite a descrição'),
  location: Yup.string().required('Digite a localização do evento'),
});

export default function EditMeetup({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`organizing/${id}`);
        const data = {
          title: response.data.title,
          description: response.data.description,
          date: parseISO(response.data.date),
          location: response.data.location,
          banner: {
            file_id: response.data.file_id,
            url: response.data.File.url,
          },
        };
        setMeetup(data);
        setLoading(false);
      } catch (err) {
        toast.error('Error editing meetup, please try again');
        setLoading(false);
        history.push('/dashboard');
      }
    }
    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put(`/meetups/${id}`, data);
      toast.success('Meetup alterado com sucesso');
      history.push(`/dashboard`);
    } catch (err) {
      toast.error('Error editing meetup, please try again');
      setLoading(false);
      history.push('/dashboard');
      setLoading(false);
    }
  }

  return loading ? (
    <Loading>Carregando...</Loading>
  ) : (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Inputml
          name="description"
          placeholder="Descrição completa"
          multiline
          rows={5}
        />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização do meetup" />
        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}

EditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
