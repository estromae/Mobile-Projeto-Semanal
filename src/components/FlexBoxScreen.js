import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

export default function TestFlexBox() {
    const [flexDirection, setFlexDirection] = React.useState('column')

    function changeDirection() {
        if (flexDirection == 'column') {
            setFlexDirection('row')
        } else {
            setFlexDirection('column')
        }
    }

    return (
        <View style={{flex: 1,}}>
            <Text>Tela FlexBox, flexDirection: {flexDirection}</Text>
            <View>
            <Button style={styles.button} title="flexDirection" onPress={() => changeDirection()}/>
            </View>

            <View style={{flex: 1, backgroundColor: 'red', flexDirection: flexDirection, }}> 
                <View style={styles.headContainer}></View>
                <View style={styles.innerContainer}>
                    <View style={styles.contentContainer}>
                        <Image style={styles.box} source={require('./img/celta.jpg')}/>
                        <View style={[styles.box, {backgroundColor: 'orange'}]}></View>
                        <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]}></View>
                        <View style={[styles.box, {backgroundColor: 'deepskyblue'}]}></View>
                        <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]}></View>
                        <View style={[styles.box, {backgroundColor: 'orange'}]}></View>
                        <View style={[styles.box, {backgroundColor: 'orangered'}]}></View>
                        <View style={[styles.box, {backgroundColor: 'orange'}]}></View>
                        <View style={[styles.box, {alignSelf: 'flex-end', backgroundColor: 'purple'}]}></View>
                        <Text>Content</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}></View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexWrap: 'wrap',
        alignContent: 'space-around',
        //alignItems: 'flex-start',
        //justifyContent: 'space-evenly',
        //justifyContent: 'center',
        //alignContent: 'center'
    },

    // button: {
    //     alignSelf: 'flex-start',
    //     color: 'oldlace',
    //     marginHorizontal: '1%',
    //     minWidth: '48%',
    // },

    img: {
        width: 300,
        height: 200,
    },

    box: {
        width: 50,
        height: 50,
    },

    defaultContainer: {
        flex: 1,
        backgroundColor: 'red',
    },

    headContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },

    innerContainer: {
        flex: 4,
        backgroundColor: 'steelblue',
    },

    bottomContainer: {
        flex: 1,
        backgroundColor: 'brown',
    },
})