import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardFilme from './src/components/CardFilme';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      console.log(objeto);
      setFilmes(objeto.data);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>FILMES</Text>
      {filmes.length > 0 ? filmes.map(filme => <CardFilme key={filme.id} filme={filme.attributes}/>) : <Text style={styles.txt2}>Carregando...</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#633219',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E8D3B6'
  },
  txt2: {
    fontWeight: 'bold',
    color: '#E8D3B6'
  }
});
