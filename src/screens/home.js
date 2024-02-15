import React, { useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from "react-native";
import { Avatar, Button, Card, Divider, IconButton, Text, ActivityIndicator, TextInput } from 'react-native-paper';
const { height, width } = Dimensions.get('screen');
import get from 'lodash.get'
import Toast from 'react-native-toast-message';

const bannerImg = require("../image/banner.jpeg")
const meterImg = require("../image/Meter.png")
import { BASE_URL } from '../utils/constant';

const data_struture = [
    { field: "EBITDA_Margins", title: "EBITDA Margins", isText: false },
    { field: "EBIT_score", title: "EBIT Score", isText: false },
    { field: "ESG_Score", title: "ESG Score", isText: false },
    { field: "Fundamental_Score", title: "Fundamental Score", isText: false },
    { field: "NetProfitMargins", title: "Net Profit Margins", isText: false },
    { field: "NetProfitMargins_Score", title: "Net Profit Margins Score", isText: false },
    { field: "Operating_Margin", title: "Operating Margin", isText: false },
    { field: "Operating_Margin_Score", title: "Operating Margin Score", isText: false },
    { field: "Overall_Score", title: "Overall Score", isText: false },
    { field: "PEG", title: "PEG", isText: false },
    { field: "PEG_Score", title: "PEG Score", isText: false },
    { field: "Return on Asset", title: "Return on Asset", isText: false },
    { field: "Return on Asset_Score", title: "Return on Asset Score", isText: false },
    { field: "Return on Equity", title: "Return on Equity", isText: false },
    { field: "Return on Equity_Score", title: "Return on Equity Score", isText: false },

    { field: "Risk_score", title: "Risk score", isText: false },

    { field: "Risk .debt_equity_ratio", title: "Debt equity ratio", isText: false },
    { field: "Risk .risk_score_text", title: "Risk", isText: false },
    { field: "Risk .total_debt", title: "Total debt", isText: true },

    { field: "Risk .total_stockholder_equity", title: "Total stockholder equity", isText: false },


    { field: "Return on Equity_Score", title: "Return on Equity Score", isText: false }
]

const Home = () => {

    //statemanagement 
    const [text, setText] = useState("");
    const [loader, setLoader] = useState(false)
    const [scoreData, setScoreData] = useState({})

    useState(() => {
        //reset data 
        setScoreData({})
    }, [])

    const fetchScoreData = () => {
        if (text == "") {
            Toast.show({
                type: 'error',
                text1: 'Required',
                text2: 'Please enter stock name'
            });

            return null
        }
        setLoader(true)
        fetch(`${BASE_URL}${text}`)
            .then(response => response.json())
            .then(res => {
                const response = res
                // setText("")
                console.log("respnse", res)
                setScoreData(response)

                setLoader(false)

            })
            .catch(err => {
                console.warn("error", err)
                setText("")
                setLoader(false)

            })

    }
    return (
        <SafeAreaView style={styles.container}>
            {/* search section */}

            <View style={styles.parent}>
                <Text style={{ flex: .2, color: "black", fontWeight: "700", fontFamily: "arial" }}>Symbol:</Text>
                <TextInput
                    placeholder="Stock Ticker"
                    style={styles.textInput}
                    value={text}
                    // placeholder="Stock Ticker"
                    onChangeText={(value) => setText(value)}
                />

                <TouchableOpacity
                    style={styles.closeButtonParent}
                    onPress={() => fetchScoreData()}
                >
                    <Text style={{ fontWeight: "700", color: "white", paddingHorizontal: 1 }}>Score!</Text>
                </TouchableOpacity>

            </View>
            {loader && <ActivityIndicator animating={true} color={"gray"} />}


            {get(scoreData, "ticker", "") != "" ?
                <>
                    <Text style={{ marginRight: 112, fontSize: 12 }}>Note : Education Purpose</Text>
                    <ScrollView contentContainerStyle={{ marginTop: 25, padding: 12, marginBottom: 150, flexDirection: "row", flexWrap: "wrap" }}>
                        <View style={{ width: "100%", marginBottom: 12 }}><Text style={{ fontFamily: "arial", fontWeight: "800" }}>{get(scoreData, "Name", "")}</Text></View>
                        {get(scoreData, "scores", []).map(item => {
                            return (
                                <View style={styles.cardparent}>
                                    <View style={styles.card_header}>
                                        <Text style={styles.card_text}>{item.ScoreName}</Text>
                                    </View>

                                    <View style={styles.card_image}>
                                        <Image source={meterImg} style={styles.card_img} />
                                    </View>

                                    <View style={styles.card_footer}>
                                        <Text style={styles.card_val}>{parseFloat(get(item, "Score", "").toFixed(2))}</Text>
                                    </View>
                                </View>
                            )
                        })}




                        <View style={{ justifyContent: "flex-end", width: "100%", alignItems: "flex-end", paddingRight: 12, marginTop: 25 }}>
                            <Button mode="contained" style={{ width: 150, marginBottom: 112, backgroundColor: "#7ADB4E", borderRadius: 2 }} title="clear" onPress={() => {
                                setScoreData({})
                            }}>Clear</Button>
                        </View>

                    </ScrollView></> :
                <View style={{ marginTop: 10, paddingBottom: 110 }}>
                    <Image source={bannerImg} style={{
                        width: width,
                    }} />
                </View>



            }


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",

    },
    parent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 5,
        marginHorizontal: 12

    },
    textInput: {
        height: 40,
        flex: .4,
        borderColor: "gray",
        borderWidth: .5,
        color: "black",
        fontFamily: "arial",
        borderRadius: 2,
        backgroundColor: "transparent",
        // borderBottomColor: "transparent",
        // borderWidth: .
        // width: "80%",
    },

    closeButtonParent: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 2,
        backgroundColor: "#7ADB4E",
        borderRadius: 2,
        paddingVertical: 12,
        flex: .4,
        height: 40,
        marginLeft: 15

    },
    card: {
        width: "50%",

    },
    iconStyle: {
        width: 40,
        height: 40
    },
    cardparent: {
        flexDirection: "column", width: "48%",
        marginRight: "2%",
        marginBottom: 10
    },
    card_header: {
        backgroundColor: "#7ADB4E",
        padding: 5
    },
    card_text: {
        color: "white",
        fontWeight: "700",
        fontFamily: "arial",

    },
    card_image: {
        justifyContent: "center",
        alignContent: "center",

    },
    card_img: {
        alignSelf: "center",
        marginTop: 28,
        width: 100,
        height: 100,
        resizeMode: "contain"

    },
    card_footer: {
        justifyContent: "center",
        alignContent: "center",
    },
    card_val: {
        marginTop: 28,
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "arial",
    }




});
export default Home