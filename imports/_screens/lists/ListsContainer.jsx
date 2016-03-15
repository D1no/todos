import { Meteor } from 'meteor/meteor';
import { Lists } from '../../api/lists/lists.js';
import { createContainer } from 'meteor/react-meteor-data';
import _Lists from './_Lists.jsx';

export default createContainer(({ params: { id } }) => {
  const todosHandle = Meteor.subscribe('todos.inList', id);
  const loading = !todosHandle.ready();
  const list = Lists.findOne(id);
  const listExists = !loading && !!list;
  return {
    loading,
    list,
    listExists,
    todos: listExists ? list.todos().fetch() : [],
  };
}, _Lists);
