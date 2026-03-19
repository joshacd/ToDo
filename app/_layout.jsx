// ToDo: app/_layout.jsx
// Created By: Josha Chapman-Dodson
// Date Created: 3/13/26

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: "ToDo" }} />
    <Stack.Screen name="details" options={{ title: "Details"}} />
    <Stack.Screen name="settings" options={{ title: "Settings"}} />
  </Stack>
}
