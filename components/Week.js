import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';

function getYesterday(daysToSubtract) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - daysToSubtract);
  return yesterday.getDate();
}


const Week = props => {
  const [buttons, setButtons] = useState([false, false, false, false, false, false, false]);
  const numWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  useEffect(() => { // возвращает день недели на место
    const currentWeek = [...buttons];
    const index1 = currentWeek.indexOf(true);
    currentWeek[index1] = false;
    currentWeek[props.week] = true;
    setButtons(currentWeek);
  }, [props.week]);

  const onPressButton = (index) => { // изменение цвета элемента при нажатии
    const newButtons = [...buttons];
    if (!newButtons[index]) {
      const index1 = newButtons.indexOf(true);
      newButtons[index1] = false;
      newButtons[index] = true;
    }
    setButtons(newButtons);
  };

  return (
    <View style={styles.container}>
    {buttons.map((color, index) => (
      <TouchableOpacity key={index} style={
        [styles.container1, { backgroundColor: color ? COLORS.purple2 :  COLORS.black2}]
      } onPress={() => onPressButton(index)}>
        <Text style={styles.wek}>{numWeek[index]}</Text>
        <Text style={styles.day}>{
          getYesterday(props.week - index) < 10 ? '0' + getYesterday(props.week - index) : getYesterday(props.week - index)
        }</Text>
      </TouchableOpacity>
    ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 14, 
    paddingRight: 14, 
    paddingBottom: 22,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: COLORS.black2,
  },
  container1: {
    width: 44, 
    height: 57, 
    backgroundColor: COLORS.black2, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  week: {
    fontFamily: 'Ubuntu-Medium', 
    fontSize: 14, 
    color: COLORS.white2,
  },
  day: {
    fontFamily: 'Ubuntu-Medium', 
    fontSize: 14, 
    color: COLORS.white2,
  }
});
 
export default Week;
