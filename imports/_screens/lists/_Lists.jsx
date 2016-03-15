import React from 'react';
import _Header from './_Header';
import _TodoItem from './_TodoItem.jsx';
import _notFound from '../_shared/_notFound.jsx';
import message from '../../#components/message';

export default class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingTodo: null,
    };
    this.onEditingChange = this.onEditingChange.bind(this);
  }

  onEditingChange(id, editing) {
    this.setState({
      editingTodo: editing ? id : null,
    });
  }

  render() {
    const { list, listExists, loading, todos } = this.props;
    const { editingTodo } = this.state;

    if (!listExists) {
      return <_notFound/>;
    }

    let Todos;
    if (!todos || !todos.length) {
      Todos = (
        <message
          title="No tasks here"
          subtitle="Add new tasks using the field above"
        />
      );
    } else {
      Todos = todos.map(todo => (
        <_TodoItem
          todo={todo}
          key={todo._id}
          editing={todo._id === editingTodo}
          onEditingChange={this.onEditingChange}
        />
      ));
    }

    return (
      <div className="page lists-show">
        <_Header list={list}/>
        <div className="content-scrollable list-items">
          {loading ? <message title="Loading tasks..."/> : Todos}
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
  list: React.PropTypes.object,
  todos: React.PropTypes.array,
  loading: React.PropTypes.bool,
  listExists: React.PropTypes.bool,
};
