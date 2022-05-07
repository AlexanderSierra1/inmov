import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button(props) {

    const onClick = () =>{
        props.onClick()
    }

    return (
        <View>
            <Pressable onPress={onClick} style={styles.button}>
                <Text style={styles.text}>
                    Guardar
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        alignItems: 'center',
        padding:10,
        marginTop:10,
        borderRadius:5,
    },
    text:{
        color: '#ff0',
        fontSize:20,
        fontWeight:'bold'
    }
})