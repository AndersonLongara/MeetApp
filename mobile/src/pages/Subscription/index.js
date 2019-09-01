import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/M.png';
import Background from '~/components/Background';
import ItemMeetup from '~/components/ItemMeetup';

import api from '~/services/api';

import { Container, Header, List } from './styles';

export default function Subscription() {
  const [subMeetups, setSubMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  async function loadMeetups() {
    setIsFetching(true);
    const response = await api.get('subscriptions');

    setSubMeetups(response.data);
    setLoading(false);
    setIsFetching(false);
  }

  useEffect(() => {
    loadMeetups();
  }, []);

  async function handleCancel(id) {
    try {
      const response = await api.delete(`subscriptions/${id}`);

      setSubMeetups(subMeetups.filter(item => item.id !== id));

      Alert.alert('Sucesso', 'Inscrição cancelada');
    } catch (err) {
      const errData = err.response.data;
      Alert.alert('Falha no cancelamento', `${errData.error}`);
    }
  }

  return (
    <Background>
      <Container>
        <Header source={logo} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{ marginTop: 100 }}
          />
        ) : (
          <List
            onRefresh={() => loadMeetups()}
            refreshing={isFetching}
            data={subMeetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ItemMeetup
                data={item.Meetup}
                onCancel={() => handleCancel(item.id)}
              />
            )}
          />
        )}
      </Container>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="book" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon,
};
