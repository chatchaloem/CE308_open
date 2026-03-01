import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

const products = [
  {
    id: "1",
    name: "Premium Coffee Bean",
    price: 450,
    description: "เมล็ดกาแฟคุณภาพสูงจากเชียงใหม่ คั่วกลาง กลิ่นหอมเข้ม",
  },
  {
    id: "2",
    name: "Green Tea Powder",
    price: 290,
    description: "ชาเขียวมัทฉะแท้ 100% เหมาะสำหรับทำลาเต้",
  },
  {
    id: "3",
    name: "Oat Milk 1L",
    price: 115,
    description: "นมโอ๊ตเพื่อสุขภาพ ไม่มีน้ำตาล เหมาะกับสายวีแกน",
  },
];

export default function Market() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/details",
          params: item,
        })
      }
    >
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>฿{item.price}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    color: "#ff6b00",
    marginTop: 4,
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 24,
    color: "#ccc",
  },
});