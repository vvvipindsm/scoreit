import { Text, Divider } from "react-native-paper"
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { CONTACT, HOME, Term, PRIVACY } from '../../App';

var { height, width } = Dimensions.get('screen');

const Footer = (props) => {
    return (
        <View style={{ position: "absolute", bottom: 1, backgroundColor: "white", zIndex: 3, width: width }}>
            <Divider />
            <View style={{ flexDirection: "row", }}>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    props.navigation(HOME)
                }}>
                    <Text style={styles.btnColor}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    props.navigation(CONTACT)
                }}>
                    <Text style={styles.btnColor}>About us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    props.navigation(Term)
                }}>
                    <Text style={styles.btnColor}>Terms & Conditions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => {
                    props.navigation(PRIVACY)
                }}>
                    <Text style={styles.btnColor}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttons: {
        padding: 5,
        flex: 1,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"


    },
    btnColor: {
        color: "black",
        fontSize: 12,
        fontFamily: "arial"


    }
})
export default Footer