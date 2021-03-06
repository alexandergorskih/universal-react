import React from 'react';
import theme from '../app/theme';
import { FormattedMessage } from '../app/components';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  leftTodos: {
    defaultMessage: `{leftTodos, plural,
      =0 {Nothing, enjoy :-)}
      one {You have {leftTodos} task}
      other {You have {leftTodos} tasks}
    }`,
    id: 'todos.leftTodos',
  },
});

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: theme.brandPrimary,
    justifyContent: 'center',
    paddingTop: theme.fontSize,
    paddingBottom: theme.fontSize * 0.5,
  },
  text: {
    color: theme.inverseTextColor,
    fontSize: theme.fontSizeH5,
  },
});

class Header extends React.Component {

  static propTypes = {
    todos: React.PropTypes.object.isRequired,
  };

  render() {
    const { todos } = this.props;
    const leftTodos = todos.filter(todo => !todo.completed).size;

    return (
      <View style={styles.header}>
        <FormattedMessage
          {...messages.leftTodos}
          style={styles.text}
          values={{ leftTodos }}
        />
      </View>
    );
  }

}

export default connect(state => ({
  todos: state.todos.map,
}))(Header);
