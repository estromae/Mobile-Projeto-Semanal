import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
 
export default function Counter() {
    const [count, setCount] = React.useState(0);

    function addOne() {
        setCount(count + 1)
    }

    return (
        <View style={styles.container}>
            <Text>Contador</Text>
            <Button title="Incrementar número" onPress={() => addOne()} />
            <Text>{count}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        fles: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})