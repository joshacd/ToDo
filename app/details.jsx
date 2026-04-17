// ToDo: app/details.jsx
// Created By: Josha Chapman-Dodson
// Date Created: 3/13/26


import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import styles from './styles/global';

export default function Details() {
  const { text, createdAt, checked } = useLocalSearchParams();
<<<<<<< HEAD
 
=======

  if 
>>>>>>> main

  return (
	<View style={styles.container}>
	  <Text style={styles.title}>Details</Text>
	  <Text style={styles.detailLabel}>Task:</Text>
	  <Text style={styles.detailText}>{text}</Text>
	  <Text style={styles.detailLabel}>Time Added:</Text>
	  <Text style={styles.detailText}>{createdAt}</Text>
	</View>
  );
}