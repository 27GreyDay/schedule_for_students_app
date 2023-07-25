import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { COLORS } from './constants/theme';
import Week from './components/Pages/Schedule/Week';
import TabBar from './components/TabBar'
import Settings from './components/Pages/Settings/Settings';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [editAndSave, setEditAndSave] = useState(true); // Для кнопки "Редактирование/Сохранение"
  const fEditAndSave = () => {
    setEditAndSave(!editAndSave)
  }
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
      {/* <Week fEditAndSave={fEditAndSave} editAndSave={editAndSave}/> */}
      <Settings />
      {editAndSave && <TabBar />}
    </View>
  );
}