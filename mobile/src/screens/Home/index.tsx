import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import {SafeAreaView} from 'react-native-safe-area-context'

import { styles } from './styles';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const [dataGames, setDataGames] = useState<GameCardProps[]>()

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl} : GameCardProps) {
    navigation.navigate("games", {id, title, bannerUrl})
  }


  useEffect(() =>{
    fetch('http://192.168.1.109:3777/games')
    .then(res => res.json())
    .then(data => setDataGames(data))
  },[])

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image source={LogoImg}
        style={styles.Logo}
      />
      <Heading
        title='Encontre seu Duo!'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        data={dataGames}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard
            data={item}
            onPress={() => handleOpenGame(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentLIst}
      />
    </SafeAreaView>
    </Background>
  );
}