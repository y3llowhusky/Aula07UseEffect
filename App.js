import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [frase, setFrase] = useState([]); // irá armazenar o usuário vindo da API

  // Estruturação do useEffect()
  useEffect(() => {
    async function buscarFrase() {
      const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
      const data = await response.json();
      setFrase(data); // armazenando dados da api no estado
      console.log(frase)
    }

    buscarFrase(); // chama função desenvolvida acima
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.fontG}>Frase: {frase.quote}</Text>
      <Text>Autor: {frase.author}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fontG: {
    fontSize: 26,
  },
});
