import { View, StyleSheet } from 'react-native';
import MaxMin from './src/componentes/MaxMin';

export default function App() {
    return (
        <View style={styles.App}>
            <MaxMin valor1={15} valor2={15} />
        </View>
    );
}

const styles = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

