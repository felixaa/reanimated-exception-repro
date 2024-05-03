import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function App() {
    return (
        <Animated.View entering={FadeInDown} style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </Animated.View>
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
