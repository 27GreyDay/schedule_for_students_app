import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';

const week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']

const DateUp = props => { // Компонент с датой, верхний
  return ( 
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{props.date < 10 ? '0' + props.date : props.date}</Text>
        <View style={styles.weekContainer}>
          <Text style={styles.weekText}>{week[props.week]}</Text>
          <Text style={styles.monthText}>{month[props.month]} {props.year}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={props.clickDenominatorOrNumerator} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{props.dn ? (!props.denominatorOrNumerator ? 'Знаменатель' : 'Числитель') : (props.denominatorOrNumerator ? 'Знаменатель' : 'Числитель')}</Text>
      </TouchableOpacity>
    </View>
  );
}  
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.black2,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 44,
    color: COLORS.white,
  },
  weekContainer: {
    paddingLeft: 10,
    paddingTop: 3,
  },
  weekText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
    color: COLORS.white2,
    lineHeight: 21,
  },
  monthText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
    color: COLORS.white2,
    lineHeight: 21,
  },
  buttonContainer: {
    width: 128,
    height: 40,
    marginTop: 7,
    alignItems: 'center',
    backgroundColor: COLORS.purple,
    opacity: 0.5,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
    color: COLORS.white2,
  },
});
 
export default DateUp;