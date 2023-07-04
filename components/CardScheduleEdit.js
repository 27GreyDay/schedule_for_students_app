import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import myData from '../constants/data';
import { COLORS } from '../constants/theme';

const CardScheduleEdit = props => {
  const [teacherEdit, onTeacherEdit] = useState('');
  const [time_start, setTime_start] = useState('');
  const [time_end, setTime_end] = useState('');
  const [type_course, setType_course] = useState(true) // для кнопки практика/лекция
  const [type_week_cz, setType_week] = useState('числ/занм') // для кнопки числ/занм
  const [type_week_count, setType_week_count] = useState(0)

  const onTypeWeek = () => { // для кнопки числ/занм
    let newTypeWeek = '';
    switch (type_week_count) {
      case 0:
        newTypeWeek = 'знаменатель';
        break;
      case 1:
        newTypeWeek = 'числитель';
        break;
      default:
        setType_week_count(prev => prev - 3);
        newTypeWeek = 'числ/занм';
    }

    setType_week(newTypeWeek);
    setType_week_count(prev => prev + 1);
  };


  const onPracticeOrLecture = () => { // смена практики на лекцию и наоборот
    setType_course(!type_course)
  }

  const timeStartChange = (input) => { // автоматическое проставление двоеточия
    let formattedText = input;
    
    formattedText = formattedText.replace(/\D/g, '');// Удалить все символы, кроме цифр

    if (formattedText.length === 1 && (formattedText === '8' || formattedText === '9')) {
      formattedText = '0' + formattedText.slice(0, 1) + ':' + formattedText.slice(1);
    }
    else if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + ':' + formattedText.slice(2);
    }

    setTime_start(formattedText);
  };

  const timeEndChange = (input) => { // автоматическое проставление двоеточия
    let formattedText = input;
    
    formattedText = formattedText.replace(/\D/g, '');// Удалить все символы, кроме цифр

    if (formattedText.length === 1 && (formattedText === '8' || formattedText === '9')) {
      formattedText = '0' + formattedText.slice(0, 1) + ':' + formattedText.slice(1);
    }
    else if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + ':' + formattedText.slice(2);
    }

    setTime_end(formattedText);
  };

  return ( 
    <View style={styles.container} >
      <View style={{ alignItems: 'flex-end', width: 44 }}>

        <TextInput style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14, width: 41 }} placeholder='00:00' keyboardType="numeric" value={time_start} onChangeText={timeStartChange} maxLength={5}/>

        <TextInput style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2, width: 36 }} placeholder='00:00' keyboardType="numeric" value={time_end} onChangeText={timeEndChange} maxLength={5} />

      </View>
      <View style={styles.line}></View>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <TouchableOpacity onPress={onPracticeOrLecture}>
            <Text style={styles.typeCourse}>{type_course ?  'лекция' : 'практика'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onTypeWeek}>
            <Text style={styles.typeCourse}>{type_week_cz}</Text>
          </TouchableOpacity>

        </View>

        <TextInput style={styles.course} placeholder='Название предмета' multiline numberOfLines={2} maxLength={50}/>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>

          <Image style={{ width: 16, height: 18 }} source={require('../assets/icons/where.png')} />
          <TextInput style={styles.textDown}  placeholder='Номер аудитории' maxLength={20}/>
          
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>

          <Image style={{ width: 18, height: 18 }} source={require('../assets/icons/name.png')} />
          <TextInput style={styles.textDown} value={teacherEdit} onChangeText={text => onTeacherEdit(text)} placeholder='ФИО преподавателя' maxLength={20}/>

        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: 'row',
  },
  textDown: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
    paddingLeft: 11,
    width: 200
  },
  course: {
    height: 55,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
  },
  typeCourse: {
    fontFamily: 'Ubuntu-Light',
    textTransform: 'uppercase',
    fontSize: 14,
    paddingBottom: 8
  },
  card: {
    backgroundColor: COLORS.purple2,
    marginLeft: 15,
    padding: 15,
    borderRadius: 16,
    alignSelf: 'stretch',
    width: '79%'
  },
  line: {
    marginLeft: 15,
    height: 150,
    width: 3,
    backgroundColor: COLORS.black2
  }
}); 
export default CardScheduleEdit;