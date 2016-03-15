import { Meteor } from 'meteor/meteor';
// XXX: Session
import { Session } from 'meteor/session';
import { Lists } from '../api/lists/lists.js';
import { createContainer } from 'meteor/react-meteor-data';
import _App from './_App';

export default createContainer(() => {
  const publicHandle = Meteor.subscribe('lists.public');
  const privateHandle = Meteor.subscribe('lists.private');
  return {
    user: Meteor.user(),
    loading: !(publicHandle.ready() && privateHandle.ready()),
    connected: Meteor.status().connected,
    menuOpen: Session.get('menuOpen'),
    lists: Lists.find({ $or: [
      { userId: { $exists: false } },
      { userId: Meteor.userId() },
    ] }).fetch(),
  };
}, _App);
