import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { name, price, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={{ color: "#aaa" }}>Product Image</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>฿{price}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imagePlaceholder: {
    height: 200,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 16,
    marginHorizontal: 16,
  },
  price: {
    fontSize: 18,
    color: "#ff6b00",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginHorizontal: 16,
  },
});