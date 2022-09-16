import React from 'react';
import { View } from 'react-native';
import { DubleTextInformation } from '../DubleTextInformation';

import { styles } from './styles';

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DubleTextInformation
        label='Nome'
        value='m'
      />
      <DubleTextInformation
        label='Tempo de jogo'
        value='m'
      />
      <DubleTextInformation
        label='Nome'
        value='m'
      />
      <DubleTextInformation
        label='Usa chat de voz'
        value='m'
        colorValue="teal"
      />
    </View>
  );
}