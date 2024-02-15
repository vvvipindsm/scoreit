import { Divider, Text, } from "react-native-paper"
import { Image, View } from "react-native"
import { WebView } from 'react-native-webview';

const Privacy = () => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text variant="headlineMedium">Privacy and policy</Text>
            <Divider />
            <WebView source={{ uri: 'https://smarttradersclub.in/privacy_nd_policy/privacy1.html' }} style={{ flex: 1 }} />

        </View>
    )
}

export default Privacy