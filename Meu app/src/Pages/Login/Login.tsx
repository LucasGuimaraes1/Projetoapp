import React from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import api from '../../Services/api';
import { MyButton } from '../../Components/MyButton/MyButton';
import colors from '../../Styles/color';
import Loading from '../../Components/Loading/Loading';
import { LinkButton } from '../../Components/LinkButton/LinkButton';
import { Colors} from 'react-native/Libraries/NewAppScreen';

interface LoginProps {
    email: string,
    senha: string
}

interface PasswordConfig {
    flShowPass: boolean,
    iconPass: string
}

export default function Login() {
    const [objPasswordConfig, setConfigForm] = React.useState<PasswordConfig>
        ({ flShowPass: false, iconPass: 'eye' });
    const [txtLogin, setLogin] = React.useState('')
    const [txtSenha, setSenha] = React.useState('')
    const navigation = useNavigation();
    const [flLoading, setLoading] = React.useState(false)

    function handleChangeIcon() {
        let icone = objPasswordConfig.iconPass === "eye" ? "eye-off" : "eye";
        let flShowPass = !objPasswordConfig.flShowPass;
        setConfigForm({ iconPass: icone, flShowPass });
    }

    async function navigateToHome() {

        let objLogin: LoginProps = { email: txtLogin, senha: txtSenha };
        if (txtLogin.trim() === '') {
            alert('Campo login é obrigatório');
            return;
        }
        if (txtSenha.trim() === '') {
            alert('Campo senha é obrigatório');
            return;
        }
        setLoading(true);
        const response = await api.post(`/auth`, objLogin);
        if (response.data.auth) {
            alert('Login e senha OK!');
        }
        else {
            alert('Login e/ou senha inválidos');
        }
        setLoading(false);
    }

    function navigateToNewPaciente() {
        navigation.navigate('NewPaciente');
    }
    if (flLoading) {
        return (<Loading />);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Seja bem vindo!</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Login"
                onChangeText={text => setLogin(text)}
                value={txtLogin}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.textInputPassword}
                    placeholder="Senha"
                    onChangeText={text => setSenha(text)}
                    value={txtSenha}
                    secureTextEntry={objPasswordConfig.flShowPass}
                />
                <Feather
                    style={styles.iconEye}
                    nome={objPasswordConfig.iconPass}
                    size={28}
                    color={colors.redButton}
                    onPress={handleChangeIcon}
                />
            </View>
            <MyButton title='Entrar' onPress={navigateToHome}

            />

            <LinkButton title='Inscrever-se'
                onPress={navigateToNewPaciente}
            />

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        color: 'red',
        fontSize: 28,
        marginBottom: 8
    },
    textInput: {
        height: 40,
        borderColor: colors.gray,
        borderRadius: 8,
        borderWidth: 1,
        width: '70%',
        marginBottom: 16,
        paddingHorizontal: 8
    },
    textInputPassword: {
        height: 40,
        borderWidth: 0,
        width: '70%',
        marginBottom: 16,
        paddingHorizontal: 8
    },
    buttonIn: {
        backgroundColor: colors.redButton,
        borderRadius: 8,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextIn: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    passwordContainer: {
        marginBottom: 16,
        height: 40,
        borderColor: '#dcdce6',
        borderRadius: 8,
        borderWidth: 1,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconEye: {
        paddingHorizontal: 8,
        marginTop: 6
    },
});