import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { COLORS } from '../constants/theme';

const CardScheduleEdit = props => {

  const [teacherEdit, setTeacherEdit] = useState(props.elem.teacher);
  const [namePairEdit, setNamePairEdit] = useState(props.elem.name_pair);
  const [auditoriumEdit, setAuditoriumEdit] = useState(props.elem.auditorium);
  const [typePairEdit, setTypePairEdit] = useState(props.elem.type_pair); // для кнопки практика/лекция
  const [timeStart, setTimeStart] = useState(props.elem.start_time);
  const [timeEnd, setTimeEnd] = useState(props.elem.end_time);
  const [typeWeek, setTypeWeek ] = useState(props.elem.type_week); // для кнопки числ/занм
  const [typeWeekCount, setTypeWeekCount] = useState(0);

  const onTypeWeek = () => { // для кнопки числ/занм
    let newTypeWeek = '';
    switch (typeWeekCount) {
      case 0:
        newTypeWeek = 'знаменатель';
        break;
      case 1:
        newTypeWeek = 'числитель';
        break;
      default:
        setTypeWeekCount(prev => prev - 3);
        newTypeWeek = 'числ/занм';
    }

    setTypeWeek(newTypeWeek);
    setTypeWeekCount(prev => prev + 1);
  };

  const onPracticeOrLecture = () => { // смена практики на лекцию и наоборот
    setTypePairEdit(typePairEdit === 'практика' ?  'лекция' : 'практика')
  }

  const formatTime = (input) => {
    let formattedText = input;
    formattedText = formattedText.replace(/\D/g, '');
  
    if (formattedText.length === 1 && (formattedText === '8' || formattedText === '9')) {
      formattedText = '0' + formattedText.slice(0, 1) + ':' + formattedText.slice(1);
    } else if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + ':' + formattedText.slice(2);
    }
  
    return formattedText;
  };
  
  const timeStartChange = (input) => {
    setTimeStart(formatTime(input));
  };
  
  const timeEndChange = (input) => {
    setTimeEnd(formatTime(input));
  };
  

  const onSave = () => {
    // Обновление значений в myData
    props.elem.teacher = teacherEdit;
    props.elem.auditorium = auditoriumEdit;
    props.elem.name_pair = namePairEdit;
    props.elem.type_pair = typePairEdit;
    props.elem.start_time = timeStart;
    props.elem.end_time = timeEnd;
    props.elem.type_week = typeWeek
  };

  useEffect(() => {
    onSave();
  }, [teacherEdit, auditoriumEdit, namePairEdit, typePairEdit, timeStart, timeEnd, typeWeek]);

  return ( 
    <View style={styles.container} >
      <View style={styles.timeContainer}>

        <TextInput style={styles.timeInput} placeholder='00:00' placeholderTextColor={COLORS.white2} keyboardType="numeric" value={timeStart} onChangeText={timeStartChange} maxLength={5}/>

        <TextInput style={styles.timeInput} placeholder='00:00' placeholderTextColor={COLORS.white2}  keyboardType="numeric" value={timeEnd} onChangeText={timeEndChange} maxLength={5} />

      </View>
      <View style={styles.line}></View>
      <View style={styles.card}>
        <View style={styles.row}>

          <TouchableOpacity onPress={onPracticeOrLecture}>
            <Text style={styles.typeCourse}>{typePairEdit}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onTypeWeek}>
            <Text style={styles.typeCourse}>{typeWeek}</Text>
          </TouchableOpacity>

        </View>

        <TextInput style={styles.course} value={namePairEdit} onChangeText={text => setNamePairEdit(text)} placeholder='Название предмета' placeholderTextColor={COLORS.white3} multiline numberOfLines={2} maxLength={50}/>

        <View style={styles.row}>

          <Image style={styles.icon} source={require('../assets/icons/where.png')} />
          <TextInput style={styles.textDown} value={auditoriumEdit} onChangeText={text => setAuditoriumEdit(text)} placeholder='Номер аудитории' placeholderTextColor={COLORS.white3}  maxLength={20}/>
          
        </View>
        <View style={styles.row}>

          <Image style={styles.icon} source={require('../assets/icons/name.png')} />
          <TextInput style={styles.textDown} value={teacherEdit} onChangeText={text => setTeacherEdit(text)} placeholder='ФИО преподавателя' placeholderTextColor={COLORS.white3} maxLength={20}/>

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
  timeContainer: {
    alignItems: 'flex-end',
    width: 44
  },
  timeInput: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    color: COLORS.white,
    paddingBottom: 14,
    width: 41
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textDown: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
    paddingLeft: 11,
    width: 200,
    color: COLORS.white
  },
  course: {
    height: 55,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
    color: COLORS.white
  },
  typeCourse: {
    fontFamily: 'Ubuntu-Light',
    textTransform: 'uppercase',
    fontSize: 14,
    paddingBottom: 8,
    color: COLORS.white
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
  },
  icon: {
    width: 16,
    height: 18
  }
});
export default CardScheduleEdit;