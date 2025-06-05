// HomeScreen.js – Timeline + Ask NeoGuide Mobile View
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function HomeScreen({ navigation }) {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'neoGuideLogs'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLogs(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const handleAsk = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse(`Here’s what I’d say: You matter more than you know.`);
      setLoading(false);
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to NeoLegacy</Text>
      <TextInput
        style={styles.input}
        placeholder="Ask NeoGuide..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Ask" onPress={handleAsk} />
      {loading && <ActivityIndicator style={{ margin: 10 }} />}
      {response !== '' && <Text style={styles.response}>{response}</Text>}

      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text style={styles.logPrompt}>{item.prompt}</Text>
            <Text>{item.response}</Text>
          </View>
        )}
      />
      <Button title="+ New Memory" onPress={() => navigation.navigate('LogEntry')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6 },
  response: { marginVertical: 12, fontStyle: 'italic' },
  logItem: { backgroundColor: '#fff', padding: 12, marginBottom: 10, borderRadius: 8 },
  logPrompt: { fontWeight: 'bold' }
});
