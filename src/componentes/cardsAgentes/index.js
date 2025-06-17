import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardAgentes({nome, imagem, sinopse, funcao}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity style={styles.viewFilmes} onPress={()=> navigation.navigate('DetalhesAgentes', {imagem, nome, funcao, sinopse})}>
            <Image style={styles.images} source={imagem} />
            <Text style={styles.titulo}> {nome} </Text>
        </TouchableOpacity>

    )
}