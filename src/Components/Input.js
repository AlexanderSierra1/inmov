import { StyleSheet, Text, TextInput, View } from "react-native";
import DateField from 'react-native-datefield';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import moment from 'moment';


export default function Input(props) {
    const { label, placeholder, type, name, valuesSelect } = props
    const [selectedLanguage, setSelectedLanguage] = useState();
    const handleChange = (value) => {
        props.onChange(name, value)
    }

    return (
        <View style={{ marginVertical: 5 }}>
            {
                type === 'date' ?
                    <View>
                        <Text style={styles.label}>
                            {label}
                        </Text>
                        <DateField
                            labelDate="Dia"
                            labelMonth="Mes"
                            labelYear="Año"
                            styleInput={styles.inputBorder}

                            onSubmit={(e) => handleChange(moment(e).format("DD/MM/YYYY"))}
                        />
                    </View>
                    : type === 'select' ?
                        <View style={{ borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#ff0' }}>
                            <Text style={styles.label}>
                                {label}
                            </Text>
                            <Picker
                                style={{ height: 50, }}
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue) => {
                                    handleChange(itemValue);
                                    setSelectedLanguage(itemValue)
                                }}
                            >
                                {
                                    valuesSelect.map((data, key) => {
                                        return (
                                            <Picker.Item key={key} label={data.mod} value={data.mod} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                        :
                        <View>
                            <Text style={styles.label}>
                                {label}
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={placeholder}
                                keyboardType={type}
                                onChangeText={(e) => handleChange(e)}
                            />
                        </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ff0',
        height: 50
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'white'
    },
    inputBorder: {
        width: '30%',
        borderBottomWidth: 1,
        borderWidth: 0,
        marginBottom: 20,
        borderBottomColor: '#ff0',
    },
})