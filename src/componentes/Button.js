import React from "react";
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";

import COLORS from "../const/colors";

const Button = ({titulo, onPress=()=>{}}) => {

    return(

        <View style = {styles.buttonContainer}> 
            <TouchableOpacity 
                style = {styles.button}
                activeOpacity = {0.5}
                onPress={onPress}>
                <Text style = {styles.titulo}>{titulo}</Text>


            </TouchableOpacity>
        </View>
)}

const styles = StyleSheet.create({
    buttonContainer:{
        top:'2%',
        alignItems:'flex-end',
    },
    button:{
        height:55,
        width: 150,
        backgroundColor: COLORS.roxo,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
        borderRadius:30
    },
    titulo:{
        color:COLORS.white,
        fontWeight: "bold",
        fontSize:18,
    }
})

export default Button;