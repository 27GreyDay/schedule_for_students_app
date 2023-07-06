import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { COLORS } from './constants/theme';
import DateUp from './components/Date'
import Week from './components/Week'
import TabBar from './components/TabBar';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({ // шрифты
        'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
        'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => { // пока шрифты не загрузятся, горит заставка
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  


  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}} onLayout={onLayoutRootView}>
      <Week />
    </View>
  );
}