import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
