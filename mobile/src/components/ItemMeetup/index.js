import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import ItemButton from '~/components/Button';
import { Container, Image, Title, Date, Location, Organizer } from './styles';

export default function ItemMeetup({ data, onSubscribe, onCancel, isSubMode }) {
  const imagem = data.File.url.replace('localhost', '192.168.4.101');

  const dateFormatted = useMemo(
    () => format(parseISO(data.date), "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [data.date]
  );

  return (
    <Container>
      <Image
        source={{
          uri: `${imagem}`,
        }}
      />
      <Title>{data.title}</Title>
      <Date>{dateFormatted}</Date>
      <Location>{data.location}</Location>
      <Organizer>{data.User.name}</Organizer>
      {isSubMode ? (
        <ItemButton onPress={onSubscribe}>Realizar inscrição</ItemButton>
      ) : (
        <ItemButton onPress={onCancel}>Cancelar inscrição</ItemButton>
      )}
    </Container>
  );
}

ItemMeetup.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    File: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onSubscribe: PropTypes.func,
  onCancel: PropTypes.func,
  isSubMode: PropTypes.bool,
};

ItemMeetup.defaultProps = {
  onSubscribe: null,
  onCancel: null,
  isSubMode: false,
};
