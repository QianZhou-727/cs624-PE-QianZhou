import { Component } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  }
  addTodo() {
  const { inputValue, todos } = this.state;

  if (inputValue.trim() === '') {
    return;
  }

  const newTodo = {
    title: inputValue,
    complete: false,
  };

  const updatedTodos = [...todos, newTodo];

  this.setState({
    todos: updatedTodos,
    inputValue: '',
  });

  console.log('Todos:', updatedTodos);
}

  render() {
  const { inputValue, todos } = this.state;

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.content}
      >
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={(text) => this.inputChange(text)}
        />
        <Button
  title="Submit"
  onPress={() => this.addTodo()}
/>
<TodoList todos={todos} />
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;