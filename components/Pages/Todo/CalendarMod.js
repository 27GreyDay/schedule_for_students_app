import React, { useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';

const weeks = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const monthsR = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
const CalendarMod = props => {

  const today = new Date()

  const [day, setDay] = useState(today.getDate())
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())

  const onRight = () => {
    if (month !== 11)
      setMonth(month + 1)
    else {
      setYear(year + 1)
      setMonth(month - 11)
    }
  }
  const onLeft = () => {
    if (month !== 0)
      setMonth(month - 1)
    else {
      setYear(year - 1)
      setMonth(month + 11)
  }
  }

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
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onCalendarMod}>
      
      <View style={styles.modalBackground}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: 250, justifyContent: 'space-between' }}>
              <Text style={ styles.textTitle }>{months[month]} {year}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={onLeft}>
                  <Image style={ styles.icons } source={require('../../../assets/icons/Chevron.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onRight}>
                  <Image style={ [ styles.icons,{ transform: [{ scaleX: -1 }] } ] } source={require('../../../assets/icons/Chevron.png')}/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={ styles.line }/>

            <View style={{ flexDirection: 'row', width: 250, justifyContent: 'space-between', marginTop: 20}}>
              {weeks.map((day, index) => (
                <Text style={ styles.textWeek } key={index}>{day} </Text>
              ))}
            </View>

              {generateCalendar(year, month, day)}
              
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    fontFamily: 'Ubuntu-Medium',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.black2,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icons: {
    width: 7,
    height: 24,
    paddingLeft: 25,
    marginLeft: 15
  },
  textTitle: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 14,
    color: COLORS.white2
  },
  textWeek: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 10,
    color: COLORS.white
  },
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
  },
  line: {
    width: 250, 
    height: 1, 
    backgroundColor: COLORS.white2, 
    borderRadius: 2, 
    opacity: 0.8, 
    alignItems: 'center'
  }
});

export default CalendarMod;