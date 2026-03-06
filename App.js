import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [usuario, setUsuario] = useState([]); // irá armazenar o usuário vindo da API

  // Estruturação do useEffect()
  useEffect(() => {
    async function buscarUsuarios() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      const data = await response.json();
      setUsuario(data); // armazenando dados da api no estado
    }

    buscarUsuarios(); // chama função desenvolvida acima
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.fontG}>{usuario.company.name}</Text>
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
