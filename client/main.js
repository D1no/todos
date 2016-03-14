import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/_screens/routes';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-primary'));
});
