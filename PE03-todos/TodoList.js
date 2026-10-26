
import { StyleSheet, Text, View } from 'react-native';

export default function TodoList({ todos }) {
  return (
    <View style={styles.list}>
      {todos.map((todo, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>{todo.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: '#333333',
  },
});
