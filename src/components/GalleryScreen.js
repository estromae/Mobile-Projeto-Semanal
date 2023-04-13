import React, { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView } from "react-native";

export default function Gallery() {
    const [images, setImages] = useState([
        require('./img/celta.jpg'),
        require('./img/fusca.jpg'),
        require('./img/fusquinha.png'),
    ])

    return (
        <View style={styles.defaultContainer}>
        <SafeAreaView style={styles.container}>
            <Text>Gallery</Text>
            <FlatList
            data={images}
            renderItem={({item, index}) => 
            <View style={styles.item}>
                <Image style={styles.img} source={item} key={index}/>
            </View> 
            }/>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
    },

    img: {
        width: 60,
        height: 60,
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'gray',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 10,
    },

})