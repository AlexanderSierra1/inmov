import { Pressable, StyleSheet, Text } from "react-native";

export default function Link(props) {
    const { navigate, text, route } = props
    return (
        <Pressable style={styles.link} onPress={() => navigate.navigate(route)}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    link:{
        backgroundColor: '#ff0',
        height: 50,
        borderRadius:5,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color: 'black',
        fontSize:20,
        fontWeight:'bold'
    }
})

