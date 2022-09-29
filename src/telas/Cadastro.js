import React from "react";
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";

import Input from '../componentes/Input';
import COLORS from '../const/colors';
import Button from '../componentes/Button';


const Cadastro = () => {

    const [inputs, setInputs] = React.useState({
      nome:'',
      telefone:'',
      celular: '',
      email:'',
      nomeResponsavel:'',
      telefoneResponsavel:'',
    });

    const handlerOnChange = (text, input) => {

      setInputs((prevState) =>(

        console.log(prevState),

        {...prevState, [input]:text}
      ));
    }

    const [errors, setErrors] = React.useState({});

    const handlerErrors = (errorMesage, input) =>{
      setErrors((prevState) => ({...prevState, [input]:errorMesage}));
    }

    const validate = ()=>{

      let validate = true;

      if(!inputs.nome){
        validate = false;
        handlerErrors('Informe seu nome completo', 'nome');
      }

      if(!inputs.telefone){
        validate = false;
        handlerErrors('Informe o número do seu telefone', 'telefone');
      }

      if(!inputs.celular){
        validate = false;
        handlerErrors('Informe o número do seu celular', 'celular');
      }

      if(!inputs.email){
        validate = false;
        handlerErrors('Informe o seu email', 'email');
      }
      console.log(errors);
    }

    const nome = 'TELA DE CADASTRO';
    return(

      <SafeAreaView style = {styles.safe}>

        <View style = {styles.textContainer}>
          <Text style = {styles.textType}> CADASTRO </Text>
        </View>

        <ScrollView style = {styles.scroll}>

          <View style = {styles.form}>
  
            <Input  label = "Nome:"
                    iconName="account-heart-outline"
                    placeholder="Digite seu nome completo"
                    error={errors.nome}
                    onFocus={()=>{handlerErrors(null, 'nome')}}
                    onChangeText = {(text)=>handlerOnChange(text, 'nome')}
            />
            <Input  label = "Telefone:"
                    iconName="phone" 
                    placeholder = "(00) 00000-0000" 
                    error={errors.telefone}
                    onFocus={()=>{handlerErrors(null, 'telefone')}}
                    onChangeText={(text)=>{handlerOnChange(text, 'telefone')}}

            />
            <Input label = "Celular:"
                    iconName="cellphone-check"
                    placeholder = "(00) 00000-0000"
                    error = {errors.celular}
                    onFocus={()=>handlerErrors(null, 'celular')}
                    onChangeText={(text)=>{handlerOnChange(text, 'celular')}}
            />
            <Input label = "Email:"
                    iconName="email-multiple-outline"
                    placeholder = "Digite seu email" 
                    error = {errors.email}
                    onFocus = {()=>handlerErrors(null, 'email')}
                    onChangeText = {(text)=>handlerOnChange(text, 'email')}
            />
            <Input label = "Nome do responsável:"
                    iconName="account-multiple"
                    placeholder = "Digite o nome do responsável completo" 
            />
            <Input label = "Telefone do responsável:" 
                    iconName="phone-incoming"
                    placeholder = "(00) 00000-0000"/>

            <Button titulo = "Cadastrar"
                    onPress={validate}
              />
  

          </View>
     
        </ScrollView>
      </SafeAreaView>
  
     
    );
  
  }

  const styles = StyleSheet.create({

    safe:{
      flex:1,
    },
    scroll:{
      paddingHorizontal:20,
    },
    textContainer:{
      top:'3%',
    },
    textType:{
      color: COLORS.white,
      fontSize: 25,
      fontWeight: "bold",
      backgroundColor:COLORS.roxo,
      width:'100%',
      height:40,
    },
    viewForm:{
      marginVertical: 20,
    },

  });

  export default Cadastro;