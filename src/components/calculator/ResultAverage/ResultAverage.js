import React from "react";
import { View, Text, Touchable, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultAverage(props){

    async function shareResult() {
        await Share.share({message: "Resultado da soma: " + props.resultAverage})
    }

    return (
        <View style={styles.viewResultAverage}>
            { props.resultAverage != null ? 
            <View>
                <TouchableOpacity onPress={() => shareResult()}>
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>
            : <View></View>
            }
            <Text style={styles.textMessageResult}>{props.messageResultAverage}</Text>
            <Text styles={styles.textResultAverage}>{props.resultAverage}</Text>
        </View>
    )
}