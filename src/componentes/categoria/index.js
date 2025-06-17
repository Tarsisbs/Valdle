import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useState } from 'react';
import styles from './style.js';
import categorias from '../../categoria.js';
import CardAgentes from '../cardsAgentes/index.js';
import CardMapas from '../cardsMapas/index.js';
import agentesDuelistas from '../../agentesDuelistas.js';
import agentesControladores from '../../agentesControladores.js';
import mapas from '../../mapas.js';

const Categoria = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Agentes');

    const lidarCategoriaSelecionada = (categoria) => {
        setCategoriaSelecionada(categoria);
    }

    return (
        <View style={{ width: '90%' }}>

            <FlatList

                showsHorizontalScrollIndicator={false}

                horizontal = {true}

                data = {categorias}

                keyExtractor={(item) => item.id}
                renderItem={({item}) => (

                    <TouchableOpacity style={[styles.Categoria, categoriaSelecionada === item.nome && {
                        backgroundColor: '#0f1923',
                    }]} onPress={() => lidarCategoriaSelecionada(item.nome)}>
                        <Text style={[styles.nomeCategoria, categoriaSelecionada === item.nome && {
                            color: 'white'
                        }]}>{item.nome}</Text>
                    </TouchableOpacity>
                        
                )}

            />

            {categoriaSelecionada === 'Agentes' && (

                <View style={{width:"100%"}}>
                    
                    <Text>Duelistas</Text>

                    <FlatList

                        showsHorizontalScrollIndicator={false}

                        horizontal = {true}

                        data = {agentesDuelistas}

                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (

                        <CardAgentes nome = {item.nome} imagem = {item.imagem} sinopse = {item.sinopse} funcao = {item.funcao}/>
                        
                        )}

                    />

                    <Text>Controladores</Text>

                    <FlatList

                        showsHorizontalScrollIndicator={false}

                        horizontal = {true}

                        data = {agentesControladores}

                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (

                        <CardAgentes nome = {item.nome} imagem = {item.imagem} sinopse = {item.sinopse} funcao = {item.funcao}/>
                        
                        )}

                    />

                </View>
            )}

            {categoriaSelecionada === 'Mapas' && (
                <View style={{width:"100%"}}>

                    <Text>Mapas</Text>

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
            )}

        </View>
    )
}

export default Categoria;