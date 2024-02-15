import { Divider, Text, } from "react-native-paper"
import { Image, View } from "react-native"

const Aboutus = () => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            {/* <View style={{ height: 5, width: "100%" }} /> */}

            <Text variant="headlineMedium">About us</Text>
            <View style={{ height: 4, width: "100%" }} />

            {/* <Divider /> */}
            <Text variant="bodyLarge">Get faster response from the support team</Text>
            <View style={{ height: 15, width: "100%" }} />
            <View style={{ marginTop: 15 }}>
                <View style={{ marginBottom: 10 }}>
                    <Text variant="bodySmall">Address : </Text>
                    <Text>IN Bishop Street, Chicago, IL 60607,USA</Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text variant="bodySmall">Email Address : </Text>
                    <Text>kavinramasamy@gmail.com</Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text variant="bodySmall">Contact Number : </Text>
                    <Text>+ (312) 498-9517</Text>
                </View>

            </View>
        </View>
    )
}

export default Aboutus