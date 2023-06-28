import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';

const DateUp = props => {
  const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  const week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  const [choice, setСhoice] = useState(true);
  const onPressButton = () => {
    choice ? setСhoice(false) : setСhoice(true)
  };
  return ( 
    <View style={ styles.container }>

      <View style={{ flexDirection: 'row'}}>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 44, color: COLORS.white}}>{props.date < 10 ? '0' + props.date : props.date}</Text>
        <View>
          <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2, lineHeight: 21, paddingLeft: 10, paddingTop: 7}}>{week[props.week]}{"\n"}{month[props.month]} {props.year}</Text>
        </View>
      </View >

        <TouchableOpacity onPress={onPressButton} style={[ styles.container1 ]}>
          <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16, color: COLORS.purple}}>{choice ? 'Знаменатель' : 'Числитель'}</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 60, 
      paddingBottom: 40, 
      paddingLeft: 14, 
      paddingRight: 14, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      backgroundColor: COLORS.black2,
    },
    container1: {
      width: 128, 
      height: 40, 
      marginTop: 7,
      alignItems: 'center', 
      backgroundColor: COLORS.purple, 
      justifyContent: 'center', 
      opacity: 0.5, 
      borderRadius: 8,
    }
  });
 
export default DateUp;