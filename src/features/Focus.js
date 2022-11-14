/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {colors} from '../utils/colors';
import { spacing, fontSize } from '../utils/sizes';



export const Focus = ({addSubject}) => {

  const [subject, setSubject] = useState(null);
  console.log(subject);
  (val) => setSubject(val)

  return (
  <View style={styles.container}>
    <Text style={styles.text}> Focus Feature </Text> 
    <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} onChangeText={setSubject} label="What would you like to focus on ?" />
    <View style={styles.button} >
    <RoundedButton  title="+" size={50} onPress = {() => addSubject(subject)} />
    </View>
    
    </View>
  </View>
);
  };

const styles = StyleSheet.create({
  container: {
    //by not declaring flex since there is only one container therefore it will take up the space that is required
    //flex: 1,
  },
  button : {
    justifyContent : 'center'
  },
  textInput : {
    flex : 1,
    marginRight : spacing.sm,
  },
  inputContainer : {
    padding : spacing.lg,
    justifyContent : 'center', //justifyContent: top not working ??
    flexDirection : 'row'
  },
  text: {
    color: colors.white,
    textAlign : 'center',
  },
});

