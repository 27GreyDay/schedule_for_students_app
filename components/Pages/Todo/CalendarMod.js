import React, { useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';
import GenerateCalendar from './GenerateCalendar';

const weeks = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
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

              <GenerateCalendar year={year} month={month} day={day} onCalendarMod={props.onCalendarMod} setDate={props.setDate}/>
              
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