import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';

import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform

} from 'react-native';

import styles from '../../Styles/MStyle'

export default function Page1() {
  
  //sintaxe : cria um array com 2 valores
  // primeiro: variavel que armazena estado
  // segundo : função que trabalha com o estado - setar o valor

  const [altura , setAltura] = React.useState('');
  const [peso , setPeso] = React.useState('');
  const [classificacao, setClassificacao] = React.useState('');
  const [flVisualiza, setFlVisualiza] = React.useState(false);
 
 
  const navigation = useNavigation();
  function backToWelcome() {
      navigation.goBack();
  }

 

  function calculaImc() {

    const imc : Number = Number(peso) / (Number(altura) * Number(altura));

    if(imc < 18.5){

setClassificacao('Peso Baixo'); }

   else if (imc >= 18.5 && imc <= 24.9){


      setClassificacao('Peso Normal - 👍');
 }

 else if (imc >= 25.0 && imc <= 29.9){


  setClassificacao('Sobrepeso 😲');
}


else if (imc >= 30 && imc <= 34.9){


  setClassificacao('Obesidade - Grau 1 ');
}

else if (imc >= 35 && imc <= 39.9){


  setClassificacao('Obesidade Severa - Grau 2');
}

else if (imc >= 40 ){


  setClassificacao('Obesidade Mórbida - Grau 3 ☠ ');
}

else {
setClassificacao('desconhecido');

}
  
}





return (
    
    <SafeAreaView style = {styles.container}>
      <KeyboardAvoidingView style = {styles.container}
      
      behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}>
    
    
    <View style={styles.container}>
    <View style={styles.form}>
     
     <Text style={styles.TextHello}>Olá Daniel</Text>
      <TextInput
         placeholder = "  Digite a sua ALTURA    "
         style={styles.TextInput1}
         onChangeText = { text => setAltura(text) }
        value={altura}
 
        
              />

<TextInput
         placeholder = "  Digite o seu PESO    "
         style={styles.TextInput2}
         onChangeText = { text => setPeso(text) }
        value={peso}
 
        
              />


   
   
   <TouchableOpacity
          style={styles.buttonClickMe}
          activeOpacity={0.7}
          onPress={calculaImc}
        >
          <Text style={styles.textButtonClickMe}> CALCULAR IMC  </Text>
        </TouchableOpacity>
        <Text style={styles.TextResponse}>{classificacao}</Text>
       
       
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={backToWelcome}
                        >
                            <Text style={styles.textButton}>voltar</Text>
                        </TouchableOpacity>
    
    
    </View>
    </View>
    
    </KeyboardAvoidingView>
    </SafeAreaView>
    
  );
}

