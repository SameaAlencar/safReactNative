import  React from "react";
import {View,  Text, TextInput, StyleSheet} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from "../const/colors";

const Input = ({label, iconName, placeholder, error, onFocus=()=>{}, ...props}) => {

    return(
        <View style= {styles.formContainer}>
            <Text style = {styles.inputLabel}>{label}</Text>


            <View style ={[styles.inputContainer, 
                        {borderColor: error ? COLORS.red : COLORS.roxo }]}>
                

                <TextInput 
                style = {styles.textInput}
                autoCorrect = {false}
                placeholder={placeholder}
                onFocus={()=>{onFocus()}}
                {...props}
                
                />
                <Icon name={iconName} style={styles.icon} />

            </View>
            <Text>{error}</Text>
        </View>
        
)}

const styles = StyleSheet.create({

    formContainer:{
        top:'5%',
        marginBottom:5,

    },
    inputLabel: {
        marginVertical:5,
        fontSize:15,
        color:COLORS.black,
    },
    inputContainer:{
        height: 45,
        backgroundColor:COLORS.light,
        flexDirection: "row",
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:COLORS.roxo,
        borderRadius:20,
        alignItems:"center",


    },
    textInput:{
        color:COLORS.darkBlue,
        flex: 1
    },
    icon:{
        fontSize:26,
        color: COLORS.black,
    },
});

export default Input;