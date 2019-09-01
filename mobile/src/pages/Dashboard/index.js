import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/M.png';
import Background from '~/components/Background';
import ItemMeetup from '~/components/ItemMeetup';
import DateInput from '~/components/DateInput';

import api from '~/services/api';

import { Container, Header, List } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  async function loadMore() {
    try {
      const nextPage = page + 1;
      const response = await api.get('meetups', {
        params: {
          page: nextPage,
          date,
        },
      });

      setMeetups(
        nextPage >= 2 ? [...meetups, ...response.data] : response.data
      );
      setPage(nextPage);
      setLoading(false);
    } catch (err) {
      const errData = err.response.data;
      Alert.alert('Falha no carregamento', `${errData.error}`);
    }
  }

  async function loadMeetupsRefresh() {
    const response = await api.get('meetups', {
      params: {
        date,
      },
    });
    setMeetups(response.data);
    setIsFetching(false);
  }

  function refreshList() {
    setPage(1);
    setIsFetching(true);
    loadMeetupsRefresh();
  }

  useEffect(() => {
    setLoading(true);
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date,
        },
      });
      setMeetups(response.data);
      setLoading(false);
    }
    loadMeetups();
  }, [date]);

  async function handleSubscribe(id) {
    try {
      const response = await api.post(`/meetups/${id}/subscriptions`);

      Alert.alert('Sucesso', 'Inscrição realizada com sucesso');
    } catch (err) {
      const errData = err.response.data;
      Alert.alert('Falha na inscrição', `${errData.error}`);
    }
  }

  return (
    <Background>
      <Container>
        <Header source={logo} />
        <DateInput date={date} onChange={setDate} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{ marginTop: 100 }}
          />
        ) : (
          <List
            onEndReachedThreshold={0.2}
            onEndReached={() => loadMore()}
            onRefresh={() => refreshList()}
            refreshing={isFetching}
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ItemMeetup
                data={item}
                onSubscribe={() => handleSubscribe(item.id)}
                isSubMode
              />
            )}
          />
        )}
      </Container>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="event-available" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon,
};
