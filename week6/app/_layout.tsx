import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="details"
        options={{
          title: "Product Details",
          headerStyle: { backgroundColor: "#ff6b00" },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}