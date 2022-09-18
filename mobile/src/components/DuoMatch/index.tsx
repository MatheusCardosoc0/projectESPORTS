import React, { useState } from 'react';
import { ActivityIndicator, Alert, Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from "expo-clipboard"

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string
  onClose: () => void
}

export function DuoMatch({ onClose, discord, ...rest }: Props) {

  const [isCopping, setIsCopping] = useState(false)

  async function handleCopyDiscordUserClipboard(){
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert('Discord cópiado!', 'Usuario copiado para você colocar no discord')
    setIsCopping(false)
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      statusBarTranslucent={true}
      {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>

          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}>
            <MaterialIcons
              name='close'
              size={30}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            style={{ alignItems: "center", marginTop: 24 }}
            title="Let´s play!"
            subtitle='Agora é só começar a jogar!'
          />
          <Text style={styles.label}>
            Adicone seu Discord
          </Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordUserClipboard}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}