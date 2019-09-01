import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container, Inputml } from './styles';
import history from '~/services/history';
import api from '~/services/api';
import DatePicker from '~/Components/DateInput';
import BannerInput from '~/Components/BannerInput';

const schema = Yup.object().shape({
  file_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Selecione um banner'),
  title: Yup.string().required('Digite o título do meetup'),
  date: Yup.date().required('Selecione uma data'),
  description: Yup.string().required('Digite a descrição'),
  location: Yup.string().required('Digite a localização do evento'),
});

export default function NewMeetup() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      await api.post('meetups', data);
      toast.success('Meetup cadastrado com sucesso');
      history.push(`/dashboard`);
    } catch (err) {
      const errData = err.response.data;
      toast.error(
        errData && errData.error
          ? `Error creating meetup: ${errData.error}`
          : 'Error creating meetup, try again'
      );
      setLoading(false);
    }
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar meetup'}
        </button>
      </Form>
    </Container>
  );
}
