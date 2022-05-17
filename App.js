import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "104458324356-iasabmae7p3ulfpnhm5l0qjcdsb1648s.apps.googleusercontent.com",
    expoClientId:
      "104458324356-dfb3aqtk1r5ogji0tlmv3o967j5equdl.apps.googleusercontent.com",
    androidClientId:
      "104458324356-dfb3aqtk1r5ogji0tlmv3o967j5equdl.apps.googleusercontent.com",
    iosClientId:
      "104458324356-dfb3aqtk1r5ogji0tlmv3o967j5equdl.apps.googleusercontent.com",
  });

  const [loggedIn, setLoggedIn] = React.useState("");

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication, type } = response;
      setLoggedIn(type);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      <Text>{loggedIn === "success" ? "Logged In" : "Logged Out"}</Text>
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
});
