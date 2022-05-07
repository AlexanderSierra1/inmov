import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Card } from "react-native-elements";

const carList = (props) => {

    return (

        <View>
            {
                props.cars.map((data, key) => {
                    return (
                        <Card key={key}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                                Propietario:{'  '}
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
                                    {data.data.nombre}

                                </Text>
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                                Modelo:{'  '}
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
                                    {data.data.modelo}
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                                Kilometraje:{'  '}
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
                                    {data.data.kl}
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                                Año de fabricación:{'  '}
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
                                    {data.data.fabricacion}
                                </Text>
                            </Text>
                        </Card>
                    )
                })
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        cars: state.carReducer.carList
    }
}

export default connect(mapStateToProps)(carList)