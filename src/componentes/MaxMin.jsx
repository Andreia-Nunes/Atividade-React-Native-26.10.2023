import React from 'react'
import { Text } from 'react-native';

const MaxMin = ({ valor1, valor2 }) => {

    let exibicao;

    if (valor1 > valor2) {
        exibicao = `O valor ${valor1} é maior que o valor ${valor2}.`;
    } else if (valor2 > valor1) {
        exibicao = `O valor ${valor2} é maior que o valor ${valor1}.`;
    } else {
        exibicao = `Os valores ${valor1} e ${valor2} são iguais.`;
    }

    return (
        <Text>
            {exibicao}
        </Text>
    )
}

export default MaxMin