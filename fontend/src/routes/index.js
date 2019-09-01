import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Details from '~/pages/Details';
import NewMeetup from '~/pages/NewMeetup';
import EditMeetup from '~/pages/EditMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/newMeetup" component={NewMeetup} isPrivate />
      <Route path="/meetup/edit/:id" component={EditMeetup} isPrivate />
      <Route path="/meetupdetails/:id" component={Details} isPrivate />
    </Switch>
  );
}
