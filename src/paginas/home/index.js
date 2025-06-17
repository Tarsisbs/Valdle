import {Text, View, FlatList, ScrollView} from 'react-native';
import Banner from "../../componentes/banner";
import CardAgentes from "../../componentes/cardsAgentes/index.js";
import CardMapas from "../../componentes/cardsMapas/index.js";
import agentes from "../../agentesDuelistas.js";
import mapas from "../../mapas.js";
import Cabecalho from "../../componentes/cabecalho";
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>

            <View style={styles.containerView}>

                <Cabecalho/>

                <Banner/>

                <Text style={styles.textBanner}>Agentes</Text>

                <View style={{width:"90%"}}>

                  <FlatList

                      showsHorizontalScrollIndicator={false}

                      horizontal = {true}

                      data = {agentes}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardAgentes nome = {item.nome} imagem = {item.imagem} sinopse = {item.sinopse} funcao = {item.funcao}/>
                      
                      )}

                  />

                </View>

                <Text style={styles.textBanner}>Mapas</Text>

                <View style={{width:"90%"}}>

                  <FlatList

                      showsHorizontalScrollIndicator={false}

                      horizontal = {true}

                      data = {mapas}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                      <CardMapas nome = {item.nome} imagem = {item.imagem}/>
                      
                      )}

                  />

                </View>

            </View>

        </ScrollView>
    )
}