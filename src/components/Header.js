import { Text, } from "react-native-paper"
import { Image, View, Dimensions } from "react-native"
const logo = require("../image/logo.png")
var { height, width } = Dimensions.get('screen');
const Header = () => {
    return (
        <View style={{
            justifyContent: "flex-start", alignItems: "center",
            backgroundColor: "#7ADB4E", flexDirection: "row",
            height: height * 0.09,
            marginBottom: 20
        }}>
            {/* <View style={{backgroundColor: "red" }}> */}
            <Image source={logo} style={{ flex: .2, width: height * 0.09, height: height * 0.09, resizeMode: "cover", }} />
            {/* </View> */}
            <View style={{ flex: .8, }}>
                <Text style={{ fontFamily: "arial", color: "white", fontWeight: "900", fontSize: 25 }}> Stock Score</Text>
            </View>
        </View>
    )
}

export default Header