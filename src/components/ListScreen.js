import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, FlatList, StatusBar } from "react-native";

const DataListCars = [
    { id: '01', title: 'Fusca', color: 'blue' },
    { id: '02', title: 'Celta', color: 'red' },
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

export default function ListItems() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Lista de Carros</Text>
        <FlatList
            data={DataListCars}
            renderItem={({item}) => <Item title={item.title}/>}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    item: {
        backgroundColor: 'gray',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 10,
    },

    title: {
        fontSize: 22,
    },
})
