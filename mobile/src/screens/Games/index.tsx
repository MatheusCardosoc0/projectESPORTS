import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'

import Logo from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';

export function Games() {

  const route = useRoute()
  const navigate = useNavigation()

  const game = route.params as GameParams


  function ReturnToHome() {
    navigate.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={ReturnToHome}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={Logo}
            style={styles.logo}
          />

          <View style={styles.rigth} />

        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <DuoCard />


      </SafeAreaView>
    </Background>
  );
}