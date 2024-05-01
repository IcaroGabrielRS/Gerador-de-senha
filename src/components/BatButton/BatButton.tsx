import * as Clipboard from 'expo-clipboard';

import React, {useState} from 'react';
import { Text,  Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState('')

  function hendleGenerateButton(){
    let generateToken = generatePass
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
        <BatTextInput pass={pass}/>

        <Pressable
          style={styles.button}
          onPress={hendleGenerateButton}
        >
          <Text style={styles.text}>GERENERATE</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={handleCopyButton}
        >
          <Text style={styles.text}>⚡COPY</Text>
        </Pressable>
    </>
  );
}