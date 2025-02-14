import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, RefreshControl, SafeAreaView } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getRandomEmoji = () => {
    const emojis = ['🔥', '🚀', '⚡', '💡', '🎯', '✅', '🎉'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        const updatedData = json.map((item) => ({
          ...item,
          title: getRandomEmoji() + ' ' + item.title,
        }));

        setData(updatedData);
        setLoading(false);
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const renderHeader = () => (
    <View style={styles.header}>
      {refreshing && <ActivityIndicator size="large" color="#007bff" />}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Başlık kısmı artık SafeAreaView içinde yer alıyor */}
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>Uygulama Başlığı</Text>
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.index}>{index + 1}.</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          ListHeaderComponent={<View style={styles.emptyHeader} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#007bff']} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  topBar: {
    height: 60,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // iOS için uyumlu yapalım
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listWrapper: {
    flex: 1, // FlatList’in güvenli alanda düzgün görünmesini sağlıyor
    paddingBottom: 20, // FlatList alt kısmına biraz boşluk ekliyoruz
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  index: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4500',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  emptyHeader: {
    height: 60, // RefreshControl için ekstra alan
  },
});

export default App;