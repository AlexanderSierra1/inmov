import { StatusBar, View } from "react-native";
import { Header } from "react-native-elements";

export default function NavBar(params) {

    return (
        <View>
            <Header
                containerStyle={{
                    backgroundColor: '#000',
                }}
                centerComponent={{ text: 'InMov Car', style: { color: '#fff' } }}
            />
            <StatusBar backgroundColor="#ed5000" barStyle="light-content" />
        </View>
    )
}