
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.logo}
        />

        <Text style={styles.question}>
          Which course did you like?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />

        <Text style={styles.sectionTitle}>
          Core Requirements (24 credits)
        </Text>

        {coreCourses.map((course, index) => (
          <Text key={index} style={styles.course}>
            {course}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>
          Depth of Study (6 Credits)
        </Text>

        {depthCourses.map((course, index) => (
          <Text key={index} style={styles.course}>
            {course}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>
          Capstone (3 Credits)
        </Text>

        <Text style={styles.course}>
          Capstone Course
        </Text>

        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              'https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/'
            )
          }
        >
          View CityU Course Catalog
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  question: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 25,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  course: {
    fontSize: 15,
    marginBottom: 4,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginTop: 25,
    textDecorationLine: 'underline',
  },
});

export default App;
