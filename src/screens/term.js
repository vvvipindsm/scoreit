import { Text, Divider } from "react-native-paper"
import { Image, View } from "react-native"
import { WebView } from 'react-native-webview';

const Terms = () => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text variant="headlineMedium">Term and condition</Text>
            <Divider />

            <WebView source={{ uri: 'https://smarttradersclub.in/privacy_nd_policy/terms_and_condition1.html' }} style={{ flex: 1 }} />

        </View>
    )
}

export default Terms