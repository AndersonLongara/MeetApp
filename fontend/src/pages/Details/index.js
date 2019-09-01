import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { MdEdit, MdClear, MdAccessTime, MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';
import {
  Container,
  Header,
  Loading,
  ButtonEdit,
  ButtonCanc,
  ImageMeetup,
  Footer,
} from './styles';

export default function DetailsMeetup({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`/organizing/${id}`);
        const dataFile = response.data.File;
        const dia = response.data.date;

        const diaFormatted = format(parseISO(dia), "d 'de' MMMM, 'às' HH:mm", {
          locale: pt,
        });

        setMeetup({ ...response.data, ...dataFile, diaFormatted });
        setLoading(false);
      } catch (err) {
        toast.error('Error acess meetup details, please try again');
        setLoading(false);
        history.push('/dashboard');
      }
    }

    loadMeetup();
  }, [id]);

  function handleEdit() {
    history.push(`/meetup/edit/${id}`);
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${id}`);
      toast.success('Meetup cancelado com sucesso');
      history.push(`/dashboard`);
    } catch (err) {
      const errData = err.response.data;
      toast.error(
        errData && errData.error
          ? `Error cancel: ${errData.error}`
          : 'Error cancel meetup, try again'
      );
    }
  }

  return loading ? (
    <Loading>Carregando...</Loading>
  ) : (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>

        <div>
          <ButtonEdit onClick={handleEdit}>
            <MdEdit size={18} color="#fff" />
            <p>Editar</p>
          </ButtonEdit>
          <ButtonCanc onClick={handleCancel}>
            <MdClear size={18} color="#fff" />
            <p>Cancelar</p>
          </ButtonCanc>
        </div>
      </Header>
      <ImageMeetup>
        <img src={meetup.url} alt="banner" />
        <p>{meetup.description}</p>
      </ImageMeetup>
      <Footer>
        <MdAccessTime size={18} color="#fff" />
        <time>{meetup.diaFormatted}</time>
        <MdLocationOn size={18} color="#fff" />
        <p>{meetup.location}</p>
      </Footer>
    </Container>
  );
}

DetailsMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
