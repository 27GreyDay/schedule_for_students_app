import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/theme';
import Schedule from './Schedule';
import DateUp from './Date'



const Week = props => {

  const [buttons, setButtons] = useState([true, false, false, false, false, false, false]);
  const numWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  const [d, setDate] = useState(new Date());
  const [choice, setСhoice] = useState(true);

  const getYesterday = (daysToSubtract) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - daysToSubtract);
    return yesterday.getDate();
  }  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      fDenominatorOrNumerator(); // вызываем функцию замены знаменателя на числитель
    }, 60000); // обновляем каждый час дату

    return () => clearInterval(intervalId);
  }, []);

  const week = d.getDay();

  const fDenominatorOrNumerator = () => {
    const currentDate = new Date();
    const septemberFirst = currentDate.getMonth() >= 8
      ? new Date(currentDate.getFullYear(), 8, 1 + 7 - new Date(currentDate.getFullYear(), 8, 1).getDay())
      : new Date(currentDate.getFullYear() - 1, 8, 1 + 7 - new Date(currentDate.getFullYear() - 1, 8, 1).getDay());

    const weeks = Math.floor((currentDate - septemberFirst) / (604800000));

    return weeks % 2 !== 0;
  };

  useEffect(() => { // возвращает день недели на место
    setButtons(prevButtons => {
      const currentWeek = [...prevButtons];
      const index1 = currentWeek.indexOf(true);
      currentWeek[index1] = false;
      currentWeek[week] = true;
      return currentWeek;
    });
  }, [week]);

  const onPressButton = (index) => { // изменение цвета элемента при нажатии и переключение между днями недели
    setButtons(prevButtons => {
      const newButtons = [...prevButtons];
      if (!newButtons[index]) {
        const index1 = newButtons.indexOf(true);
        newButtons[index1] = false;
        newButtons[index] = true;
      }
      return newButtons;
    });
  };

  const onDenominatorOrNumerator = () => {
    setСhoice(prevChoice => !prevChoice);
  };

  const addweek = choice ? 0 : 7;


  return (
    <>
      <DateUp
        date={d.getDate()}
        month={d.getMonth()}
        year={d.getFullYear()}
        week={d.getDay()}
        denominatorOrNumerator={fDenominatorOrNumerator()}
        clickDenominatorOrNumerator={onDenominatorOrNumerator}
        dn={choice}
      />
      <View style={styles.container}>
        {buttons.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.container1,
              { backgroundColor: color ? COLORS.purple2 : COLORS.black2 },
            ]}
            onPress={() => onPressButton(index)}
          >
            <Text
              style={[
                styles.week,
                { color: color ? COLORS.white : COLORS.white2 },
              ]}
            >
              {numWeek[index]}
            </Text>
            <Text
              style={[
                styles.day,
                {
                  color: color ? COLORS.white : COLORS.white2,
                },
              ]}
            >
              {getYesterday(week - index - addweek) < 10
                ? '0' + getYesterday(week - index - addweek)
                : getYesterday(week - index - addweek)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Schedule
        buttonNumber={buttons}
        denominatorOrNumerator={fDenominatorOrNumerator()}
        dn={choice}
        fEditAndSave={props.fEditAndSave}
        editAndSave={props.editAndSave}
      />
    </>
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
    },
    day: {
      fontFamily: 'Ubuntu-Medium',
      fontSize: 16,
    },
  });

export default Week;