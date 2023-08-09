import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const monthsR = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const GenerateCalendar = props => {
  const generateCalendar = (year, month, day) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayMonth = new Date().getMonth()
    const endDay = 7 - (firstDay + daysInMonth) % 7
    const calendar = [];

    for (let i = 0; i < firstDay; i++) {
      calendar.push(<Text style={ styles.empty } key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(
        <TouchableOpacity onPress={() => {
          props.setDate('До ' + i + ' ' + monthsR[month])
          props.onCalendarMod()
        }} key={`day-${i}`}>
          <Text style={[ styles.textDay, day === i && todayMonth === month && styles.textDayActive ]}>
            {i}
          </Text>
        </TouchableOpacity>
      )
    }

    for (let i = 0; i < endDay && endDay !== 7; i++) {
      calendar.push(<Text style={ styles.empty } key={`empty-${32 + i}`} />);
    }

    const wrappedCalendar = [];
    for (let i = 0; i < calendar.length; i += 7) {
      const week = calendar.slice(i, i + 7);
      wrappedCalendar.push(
        <View key={`week-${i}`} style={ styles.conDay }>
          {week}
        </View>
      );
    }

    return wrappedCalendar;
  };

  return (
    <View>
      {generateCalendar(props.year, props.month, props.day)}
    </View>
  );
};

const styles = StyleSheet.create({
  conDay: {
    flexDirection: 'row', 
    width: 260, 
    justifyContent: 'space-between', 
  },
  textDay: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 14,
    color: COLORS.white,
    width: 28,
    textAlign: 'center',
    backgroundColor: COLORS.black2,
    paddingVertical: 6,
    borderRadius: 50,
    marginTop: 10
  },
  textDayActive: {
    backgroundColor: COLORS.purple,
  },
  empty: {
    width: 28,
  }
});

export default GenerateCalendar;