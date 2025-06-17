import {Text, View, FlatList, ScrollView} from 'react-native';
import Banner from "../../componentes/banner";
import Cabecalho from "../../componentes/cabecalho";
import Categoria from '../../componentes/categoria/index.js';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>

            <View style={styles.containerView}>

                <Cabecalho/>

                <Banner/>

                <Categoria/>

            </View>

        </ScrollView>
    )
}