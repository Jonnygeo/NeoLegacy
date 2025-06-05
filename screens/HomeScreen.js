import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [aiPrompt, setAiPrompt] = useState('');
  const [timeline, setTimeline] = useState([
    { id: 1, type: 'text', content: 'The day you were born was the best day of my life.', date: '2022-11-03' },
    { id: 2, type: 'photo', content: 'Your first steps photo', date: '2023-02-18' },
    { id: 3, type: 'video', content: 'First bike ride!', date: '2024-04-10' },
  ]);

  const handleAskNeoDad = () => {
    // Placeholder: In production this would call your LLM API
    alert(`NeoDad says: "I love you, always. Trust your instincts."`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to NeoLegacy</Text>

      <Text style={styles.sectionTitle}>Ask NeoDad</Text>
      <View style={styles.askContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything..."
          value={aiPrompt}
          onChangeText={setAiPrompt}
        />
        <Button title="Ask" onPress={handleAskNeoDad} />
      </View>

      <Text style={styles.sectionTitle}>Memory Timeline</Text>
      <ScrollView style={styles.timeline}>
        {timeline.map((entry) => (
          <View key={entry.id} style={styles.timelineItem}>
            <Text style={styles.timelineDate}>{entry.date}</Text>
            <Text>{entry.type.toUpperCase()}: {entry.content}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Create New Memory</Text>
      <View style={styles.buttonGroup}>
        <Button title="Text Memory" onPress={() => navigation.navigate('LogEntry')} />
        <Button title="Upload Photo" onPress={() => alert('Photo upload coming soon')} />
        <Button title="Upload Audio" onPress={() => alert('Audio upload coming soon')} />
        <Button title="Upload Video" onPress={() => alert('Video upload coming soon')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f8' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  sectionTitle: { fontSize: 18, marginTop: 20, marginBottom: 5 },
  askContainer: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
  timeline: { marginTop: 10, marginBottom: 10 },
  timelineItem: { backgroundColor: '#fff', padding: 10, marginBottom: 5, borderRadius: 5 },
  timelineDate: { fontWeight: 'bold' },
  buttonGroup: { gap: 8, marginTop: 10 }
});
