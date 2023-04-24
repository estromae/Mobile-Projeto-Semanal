import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.menuNavi}>
            <Text>Esta é a tela inicial</Text>
            <Button title="Ir p/ outra tela" onPress={() => navigation.navigate('OtherScreen')}/>
            <Button title="test FlexBox" onPress={() => navigation.navigate('FlexBoxScreen')}/>
            <Button title="Calcular soma" onPress={() => navigation.navigate('Calculator')}/>
            <Button title="Lista" onPress={() => navigation.navigate('ListScreen')}/>
            <Button title="Contador" onPress={() => navigation.navigate('CounterScreen')}/>
            <Button title="Galeria" onPress={() => navigation.navigate('GalleryScreen')}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    menuNavi: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})