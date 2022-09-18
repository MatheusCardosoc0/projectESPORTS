import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'

import Logo from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

export function Games() {

  const route = useRoute()
  const navigate = useNavigation()
  const game = route.params as GameParams


  const [dataDuo, setDataDuo] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')


  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.1.109:3777/ads/${adsId}/discord`)
      .then(res => res.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }


  useEffect(() => {
    fetch(`http://192.168.1.109:3777/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setDataDuo(data))
  }, [])


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

        <FlatList
          data={dataDuo}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          style={styles.containerList}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={[dataDuo.length > 0 ? styles.contentList : styles.emptyListContent]}
          ListEmptyComponent={() => (
            <Text style={styles.defaultContentList}>
              Não há anúncios publicados para esse jogo
            </Text>
          )}
        />
        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />


      </SafeAreaView>
    </Background>
  );
}