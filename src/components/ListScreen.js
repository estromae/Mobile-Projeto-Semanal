import React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, StatusBar } from "react-native";

const DataList = [
    { id: '01', title: 'Fusca', },
    { id: '02', title: 'Celta', },
];

const Item = ({title}) => {
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
}

const ListItems = () => {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DataList}
          renderItem={({item}) => <Item title={item.title} />}
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
        backgroundColor: 'red',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    title: {
        fontSize: 32,
    },
})

export default ListItems;