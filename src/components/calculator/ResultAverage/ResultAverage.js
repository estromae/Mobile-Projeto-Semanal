import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultAverage(props){
    return (
        <View style={styles.viewResultAverage}>
            <Text style={styles.textMessageResult}>{props.messageResultAverage}</Text>
            <Text styles={styles.textResultAverage}>{props.resultAverage}</Text>
        </View>
    )
}