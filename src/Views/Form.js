import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../Components/Button";
import Link from "../Components/Link";
import Input from "../Components/Input";
import { addCar } from "../actions/car";
import { connect } from "react-redux";



const Form = (props) => {
    const [car, setCar] = useState({
        fabricacion: '',
        modelo: '',
        nombre: '',
        kl: '',
    })
    const modelo = [
        {
            mod:'Automovil'
        },
        {
            mod:'Camioneta'
        },
        {
            mod:'Off-Road'
        },
        {
            mod:'Bus'
        },
        {
            mod:'Camion'
        },
    ]

    const handleChange = (nameVar, value) => {
        setCar({ ...car, [nameVar]: value })
    }
    const saveInfo = () => {
        if (car.fabricacion === '' || car.modelo === '' || car.nombre === '' || car.kl === '') {
            Alert.alert(  
                'Error',  
                'Debe llenar todos los campos',  
                [  
                    {text: 'Aceptar',}  
                ]  
            );  
            return;
        }
        props.add(car)
        Alert.alert(  
            'Confirmacion',  
            'Su vehiculo tuvo un registro exitoso',  
            [  
                {text: 'Aceptar',}  
            ]  
        );  
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Aquí podras publicar tu vehiculo
            </Text>
            <Input label='Nombre del Propietario' name='nombre' placeholder='Nombre' onChange={handleChange.bind(this)} />
            <Input label='Kilometraje' placeholder='1000' type='numeric' name='kl' onChange={handleChange.bind(this)} />
            <Input label='Modelo' name='modelo' valuesSelect={modelo} type='select' onChange={handleChange.bind(this)} />
            <Input label='Año de fabricación' name='fabricacion' placeholder='dd/mm/yyyy' type='date' onChange={handleChange.bind(this)} />
            <Button onClick={saveInfo.bind(this)} />
            <Link navigate={props.navigation} text='Ver mis vehículos' route='FormList'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        padding:20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000'
    }
})

const mapStateToProps = (state) => {
    return {
        cars: state.carReducer.carList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (car) => dispatch(addCar(car))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)