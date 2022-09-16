import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DubleTextInformation } from '../DubleTextInformation';
import { GameController } from 'phosphor-react-native'

import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps {
  name: string
  id: string
  weekDays: string[]
  hourStart: string
  hoursEnd: string
  yearsPlaying: number
  useVoiceChannel: boolean
}

interface Props {
  data: DuoCardProps
  onConnect: () => void
}


export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DubleTextInformation
        label='Nome'
        value={data.name}
      />
      <DubleTextInformation
        label='Tempo de jogo'
        value={`${data.yearsPlaying} anos`}
      />
      <DubleTextInformation
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hoursEnd}`}
      />
      <DubleTextInformation
        label='Chamada de áudio'
        value={data.useVoiceChannel ? 'sim' : 'não'}
        colorValue={data.useVoiceChannel ? 'teal' : 'orange'}
      />

      <TouchableOpacity
       style={styles.button}
       onPress={onConnect}>
        <GameController
        color={THEME.COLORS.TEXT}
        size={20}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}