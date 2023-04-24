import React from "react"
import { Button, Text, TextInput, View, Alert, TouchableOpacity, Vibration, Pressable, Keyboard,FlatList, SafeAreaView } from "react-native"
import ResultAverage from "./ResultAverage/ResultAverage"
import styles from "./style"

export default function Calculator() {
    const [firstValue, setFirstValue] = React.useState('')
    const [secondValue, setSecondValue] = React.useState('')
    const [messageResultAverage, setMessage] = React.useState("Insira suas notas")
    const [result, setAverage] = React.useState(null)
    const [buttonText, setButtonText] = React.useState("Calcular")
    const [resultAverageList] = React.useState([])

    function boxMessageAlert(){
        Vibration.vibrate()
        Alert.alert("Atenção", "Preencha todos os campos")
    }

    function ValidateInput(){
        if (firstValue != null && secondValue != null){
            AverageCalcule()
            setMessage("Sua média é")
            setButtonText("Calcular novamente")
        } else {
            boxMessageAlert()
        }
    }

    function AverageCalcule() {
        let resultCorrent = (parseFloat(firstValue) + parseFloat(secondValue)) / 2
        //setResultAverageList((arr) => [...arr, {id: new Date().getTime(), average: resultCorrent}])
        resultAverageList.unshift(resultCorrent)
        console.log(resultAverageList)
        setAverage(resultCorrent)
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.viewCalculator}>
            <View>
            <Text>1º valor:</Text>
            <TextInput style={styles.input}
            placeholder="Ex: 9.0" 
            keyboardType="numeric" 
            onChangeText={setFirstValue} 
            value={firstValue}/>
            <Text>2º valor:</Text>
            <TextInput style={styles.input}
            placeholder="Ex: 8.5" 
            keyboardType="numeric" 
            onChangeText={setSecondValue} 
            value={secondValue}/>
            <Button title={buttonText} onPress={() => ValidateInput()}/>
            {/* <TouchableOpacity style={styles.button} onPress={() => ValidateInput()}>
                <Text style={styles.textButton} >{buttonText}</Text>
            </TouchableOpacity> */}
            </View>
            <ResultAverage 
            style={styles.messageAlert}
            messageResultAverage={messageResultAverage} resultAverage={result}/>
            <SafeAreaView>
                <FlatList
                    data={resultAverageList}
                    renderItem={({item}) => <Text>{item}</Text>}
                    keyExtractor={() => Math.floor(Math.random() * 1000)}
                />
            </SafeAreaView>
        </Pressable>
    )
};

