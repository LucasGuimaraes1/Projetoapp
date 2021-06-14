import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import api from '../../Services/api';
import { MyButton } from '../../Components/MyButton/MyButton';


export default function Welcome() {
    const navigation = useNavigation();

    async function handleTestApi() {

        const data = {
            name: 'Daniel',
            email: 'danielteodoro2010@hotmail.com',
            document: '123'
        }
        const response = await api.post('/pacientes', data);
        Alert.alert('Cadastrado com sucesso!');

    }

    function navigateToPage1() {
        navigation.navigate('Page1');
    }
    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <Text>Seja Bem Vindo</Text>
                <MyButton title='Avançar' onPress={navigateToPage1} />
                <MyButton title='Teste API' onPress={handleTestApi} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        textAlign: 'center',
        marginBottom: 16
    },
    buttonClickMe: {
        marginTop: 16,
        backgroundColor: 'red',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonClickMe: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imcObesidadeIII: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18
    },
    imcNormal: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 18
    }
});
