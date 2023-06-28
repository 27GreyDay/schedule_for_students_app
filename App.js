import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { COLORS } from './constants/theme';
import DateUp from './components/Date'
import Week from './components/Week'
import ScheduleTitle from './components/ScheduleTitle';
import Schedule from './components/Schedule';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [d, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 60000); // обновляем каждую минуту

    return () => clearInterval(intervalId);
  }, []);

  const [fontsLoaded] = useFonts({
        'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
        'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}} onLayout={onLayoutRootView}>
      <DateUp date={d.getDate()} month={d.getMonth()} year={d.getFullYear()} week={d.getDay()}/>
      <Week date={d.getDate()} week={d.getDay()}/>
      <ScheduleTitle />
      <Schedule />
    </View>
  );
}