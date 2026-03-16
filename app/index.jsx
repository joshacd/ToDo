import React, { useState } from 'react';
import { Stack, useRouter } from "expo-router";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/global';

const App = () => {
  const router = useRouter();
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
    <Stack.Screen
      options={{
        title: 'ToDo',
        headerRight: () => (
          <Pressable onPress={() => router.push('/settings')}>
            <Ionicons name="settings-outline" size={24} color="#000" />
          </Pressable>
        ),
      }}
    />
    
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a task..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <Text style={styles.task}>{item.text}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => router.push('/details')}>
              <Ionicons name="information-circle-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTask(item.id)}
            >
              <Ionicons name="trash-outline" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
    </>
  );
};

export default App;
