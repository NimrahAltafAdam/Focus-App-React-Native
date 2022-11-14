/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {View, Text, StyleSheet, Vibration} from 'react-native';
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import Timing from "./Timing";
import KeepAwake from 'react-native-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    //const [minutes, setMinutes] = useState(0.2);
    const [minutes, setMinutes] = useState(0.1);
    //once the time is up reset the progress bar and start button
    const onEnd=(reset) => {
      Vibration.vibrate(PATTERN);
      setIsStarted(false);
      setProgress(1);
      reset();
      onTimerEnd(focusSubject);
     }
    return (
     <View style={styles.container}>
     <KeepAwake />
       <View style={styles.countdown}>
         <Countdown
         minutes={minutes}
           isPaused ={!isStarted}
           onProgress={setProgress}
           onEnd={onEnd}
         />
          <View style={{ paddingTop: spacing.lg}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
       </View>
       </View>
      <View style={{paddingTop: spacing.sm}}>
      <ProgressBar 
      color = {colors.progressBar} 
      style={{ height: spacing.sm}}
      progress={progress} >
      </ProgressBar>
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
       </View>
       <View style={styles.buttonWrapper}>
        {!isStarted && (<RoundedButton title='start' onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (<RoundedButton title='stop' onPress={() => setIsStarted(false)} />
        )}
       </View>
       <View style={styles.clearSubjectWrapper}>  
        <RoundedButton size={50} title="-" onPress={clearSubject} />
       </View>
       </View>
    )
  }

  const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    countdown : {
        //flex : 0.5, //change to 0.4 to balance the flex of the two buttons
        flex : 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timingWrapper : {
      flex : 0.2,
      flexDirection : 'row',
      paddingTop: spacing.xxl,
    },
    buttonWrapper : {
        flex: 0.3,
        flexDirection: 'row',
        padding : 15, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearSubjectWrapper : {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },  
    title : {
      color : colors.white,
      fontWright : 'bold',
      textAlign : 'center'
    },
    task : {
      color : colors.white,
      textAlign : 'center'
    }
  })



