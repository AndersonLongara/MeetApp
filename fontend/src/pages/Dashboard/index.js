import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { MdAccessTime, MdNewReleases, MdAdd } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import {
  Container,
  Loading,
  NameMeetup,
  DateMeetup,
  ListMeetups,
  Button,
} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        formatedDate: format(parseISO(meetup.date), "d 'de' MMMM, 'às' HH:mm", {
          locale: pt,
        }),
      }));

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/newMeetup">
          <Button type="button">
            <MdAdd color="#fff" size={16} />
            <p>Novo meetup</p>
          </Button>
        </Link>
      </header>

      {loading ? (
        <Loading>CARREGANDO...</Loading>
      ) : (
        <ul>
          {meetups.map(meetup => (
            <Link to={`/meetupdetails/${meetup.id}`}>
              <ListMeetups key={meetup.id}>
                <NameMeetup>
                  <MdNewReleases color="#50fa7b" />
                  <p>{meetup.title}</p>
                </NameMeetup>
                <DateMeetup>
                  <span>{meetup.formatedDate}</span>
                  <MdAccessTime size={18} color="#f1fa8c" />
                </DateMeetup>
              </ListMeetups>
            </Link>
          ))}
        </ul>
      )}
    </Container>
  );
}
