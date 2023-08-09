import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { COLORS } from '../../../constants/theme';


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
        newTypeWeek = props.denOrNum[1]; // Числитель по умол
        break;
      case 1:
        newTypeWeek = props.denOrNum[0]; // Знаменатель оп умол
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

  const addMinutes = (time, minutes) => {
    const [hours, mins] = time.split(":").map(Number);
    
    const totalMins = hours * 60 + mins + minutes;
    const newHours = Math.floor(totalMins / 60);
    const newMins = totalMins % 60;
    
    const formattedHours = String(newHours).padStart(2, '0');
    const formattedMins = String(newMins).padStart(2, '0');
    
    return `${formattedHours}:${formattedMins}`;
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
    const formattedText = formatTime(input);
    if (formattedText.length === 5) {
      setTimeEnd(addMinutes(formattedText, 90));
      setTimeStart(formattedText);
    } else
      setTimeStart(formattedText);
    if (formattedText === '')
      setTimeEnd('')
  };
  
  const timeEndChange = (input) => {
    setTimeEnd(formatTime(input));
  }; 
  

  const onSave = () => { // Обновление значений в myData
    props.elem.teacher = teacherEdit;
    props.elem.auditorium = auditoriumEdit;
    props.elem.name_pair = namePairEdit;
    props.elem.type_pair = typePairEdit;
    props.elem.start_time = timeStart;
    props.elem.end_time = timeEnd;
    props.elem.type_week = typeWeek;
    props.saveData(props.schedule)
  };

  useEffect(() => {
    onSave()
  }, [props.saveCards]);



  return ( 
    <View style={styles.container} >
      <View style={{ alignItems: 'flex-end', width: 44 }}>

        <TextInput 
          style={ styles.startTimeStyle } 
          placeholder='00:00' 
          placeholderTextColor={COLORS.white2} 
          keyboardType="numeric" 
          value={timeStart} 
          onChangeText={timeStartChange} 
          maxLength={5}
        />

        <TextInput 
          style={ styles.endTimeStyle } 
          placeholder='00:00' 
          placeholderTextColor={COLORS.white2}  
          keyboardType="numeric" 
          value={timeEnd} 
          onChangeText={timeEndChange} 
          maxLength={5} />

      </View>
      <View style={styles.line}></View>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <TouchableOpacity onPress={onPracticeOrLecture}>
            <Text style={styles.typeCourse}>{typePairEdit}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onTypeWeek}>
            <Text style={styles.typeCourse}>{typeWeek}</Text>
          </TouchableOpacity>

        </View>

        <TextInput 
          style={styles.course} 
          value={namePairEdit} 
          onChangeText={text => setNamePairEdit(text)} 
          placeholder='Название предмета' 
          placeholderTextColor={COLORS.white3} 
          multiline 
          numberOfLines={2} 
          maxLength={50}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>

          <Image style={{ width: 16, height: 18 }} source={require('../../../assets/icons/where.png')} />
          <TextInput 
            style={styles.textDown} 
            value={auditoriumEdit} 
            onChangeText={text => setAuditoriumEdit(text)} 
            placeholder='Номер аудитории' 
            placeholderTextColor={COLORS.white3}  
            maxLength={20}
          />
          
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>

          <Image style={{ width: 18, height: 18 }} source={require('../../../assets/icons/name.png')} />
          <TextInput 
            style={styles.textDown} 
            value={teacherEdit} 
            onChangeText={text => setTeacherEdit(text)} 
            placeholder='ФИО преподавателя' 
            placeholderTextColor={COLORS.white3} 
            maxLength={20}
          />

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
  startTimeStyle: {
    fontFamily: 'Ubuntu-Medium', 
    fontSize: 16, 
    color: COLORS.white, 
    paddingBottom: 14, 
    width: 41
  },
  endTimeStyle: {
    fontFamily: 'Ubuntu-Medium', 
    fontSize: 14, 
    color: COLORS.white2, 
    width: 36
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
  }
}); 
export default CardScheduleEdit;