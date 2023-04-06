import React from "react"
import { View, Text, Button } from "react-native"
import { StyleSheet } from "react-native"


export default function HomeScreennn({navigation}) {
    return (
        <View style={styles.navigation}>
            <Text>Home sla man</Text>
            <Button title="any" onPress={() => navigation.navigate('AnyScreen')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navigation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})