import React from "react"
import { Button, Text, TextInput, View, Alert, TouchableOpacity } from "react-native"
import ResultAverage from "./ResultAverage/ResultAverage"
import styles from "./style"

export default function Calculator() {
    const [firstValue, setFirstValue] = React.useState(null)
    const [secondValue, setSecondValue] = React.useState(null)
    const [messageResultAverage, setMessage] = React.useState("Insira suas notas")
    const [result, setAverage] = React.useState(null)
    const [buttonText, setButtonText] = React.useState("Calcular")

    function boxMessageAlert(){
        Alert.alert("Atenção", "Preencha todos os campos")
    }

    function ValidadeInput(){
        if (firstValue != null && secondValue != null){
            AverageCalcule()
            setMessage("Sua média é")
            setButtonText("Calcular novamente")
        } else {
            boxMessageAlert()
        }
    }

    function AverageCalcule() {
        return (
            setAverage((parseFloat(firstValue) + parseFloat(secondValue)) / 2)
        )
    }

    return (
        <View style={styles.viewCalculator}>
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
            <Button title={buttonText} onPress={() => ValidadeInput()}/>
            {/* <TouchableOpacity style={styles.button} onPress={() => ValidadeInput()}>
                <Text style={styles.textButton} >{buttonText}</Text>
            </TouchableOpacity> */}
            </View>
            <ResultAverage 
            style={styles.messageAlert}
            messageResultAverage={messageResultAverage} resultAverage={result}/>
        </View>
    )
};

