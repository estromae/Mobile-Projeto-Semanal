import React from "react";
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView, Button } from "react-native";

export default function Gallery() {
    const [images, setImages] = React.useState([
        require('./img/celta.jpg'),
        require('./img/fusca.jpg'),
        require('./img/fusquinha.png'),
    ])
    const [titleImgNasa, setTitleImgNasa] = React.useState('')
    const [imgNasa, setImgNasa] = React.useState('')

    async function getImageFromNasa() {
        const info = await fetch("https://api.nasa.gov/planetary/apod?api_key=hAWmc6kHrKc3l8lpuuCFianeeO2Wk09xDhMaD08B")
        let data = await info.json()
        setTitleImgNasa(data.title)
        setImgNasa(data.url)
    }

    return (
        <View style={styles.defaultContainer}>
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Gallery</Text>
                <FlatList
                data={images}
                renderItem={({item, index}) => 
                <View style={styles.item}>
                    <Image style={{width: 30 + Math.floor(Math.random() * 70), height: 30 + Math.floor(Math.random() * 70)}} source={item} key={index}/>
                </View>
                }/>
            </View>
            <View style={styles.defaultContainer}>
                <View style={styles.imageApiContainer}>
                    <Button title="get image" onPress={() => getImageFromNasa()}></Button>
                    <Text>{titleImgNasa}</Text>
                    <Image style={styles.imgNasa} source={imgNasa} />
                    <Text>{imgNasa}</Text>
                </View>
            </View>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
    },

    imageApiContainer: {
        alignItems: 'center',
    },

    imgNasa: {
        width: 100,
        height: 100,

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