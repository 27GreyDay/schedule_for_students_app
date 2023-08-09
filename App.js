import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { COLORS } from './constants/theme';
import Week from './components/Pages/Schedule/Week';
import TabBar from './components/Router/TabBar'
import Settings from './components/Pages/Settings/Settings';
import Todo from './components/Pages/Todo/Todo';
import AsyncStorage from '@react-native-async-storage/async-storage';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [router, setRouter] = useState([false, true, false]); // переключение страниц
  const [editAndSave, setEditAndSave] = useState(true); // Для кнопки "Редактирование/Сохранение"
  const [numerToDenom, setNumerToDenom] = useState(true); // Для настроек числителя и знаменателя

  const saveState = async (value) => {
    await AsyncStorage.setItem('elementState', value.toString());
  };

  const retrieveState = async () => {
    const value = await AsyncStorage.getItem('elementState');
    if (value !== null) {
      return JSON.parse(value);
    }
  };
  
  useEffect(() => {
    retrieveState().then((data) => { // Достаем задания из памяти телефона
      setNumerToDenom(data);
    })
  }, [numerToDenom]);
  
  const onNumerToDenom = () => {
    setNumerToDenom(!numerToDenom)
    saveState(!numerToDenom)
  };

  const fEditAndSave = () => {
    setEditAndSave(!editAndSave);
  };

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
  };
  

  return (
    <SafeAreaProvider>
      <View style={{flex: 1, backgroundColor: COLORS.black}} onLayout={onLayoutRootView}>
        {router[0] && <Todo save={editAndSave} setSave={setEditAndSave}/>}
        {router[1] && <Week fEditAndSave={fEditAndSave} editAndSave={editAndSave} numerToDenom={numerToDenom}/>}
        {router[2] && <Settings numerToDenom={numerToDenom} onNumerToDenom={onNumerToDenom}/>}
        {editAndSave && <TabBar setRouter={setRouter} router={router}/>}
      </View>
    </SafeAreaProvider>
  );
}