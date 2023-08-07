import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, Animated } from 'react-native';
import { COLORS } from '../../../constants/theme';
import myData from '../../../constants/data';
import CardScheduleEdit from './CardScheduleEdit';
import ScheduleTitle from './ScheduleTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Schedule = props => { // Отрисовка карточек с расписание
  const denOrNum = props.dn ? (props.denominatorOrNumerator ? 'знаменатель' : 'числитель') : (!props.denominatorOrNumerator ? 'знаменатель' : 'числитель')
  
  const [saveCards, setSaveCards] = useState(false);

  const [schedule, setSchedule] = useState(myData);

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('myData', JSON.stringify(data));
    } catch (error) {
      console.log('Ошибка при сохранении данных:', error);
    }
  };

  const loadTasksData = async () => {
    try {
      const data = await AsyncStorage.getItem('myData');
      if (data !== null) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.log('Ошибка при загрузке данных:', error);
    }
    return []; // Возвращаем пустой массив, если данных нет
  };
  
  useEffect(() => {
    loadTasksData().then((data) => {
      setSchedule(data);
    })
  }, [saveCards]);

  const clear = () => { // Удаление дня недели
    schedule[props.buttonNumber.indexOf(true)].map(item => {
      item.type_pair = "лекция";
      item.start_time = "";
      item.end_time = "";
      item.name_pair = "";
      item.auditorium = "";
      item.teacher = "";
      item.type_week = "числ/знам";
    })
  }

  const onSaveCards = () => {
    saveData(schedule);
    setSaveCards(!saveCards);
  }

  return (
    <>
      <ScheduleTitle 
        fEditAndSave={props.fEditAndSave} 
        editAndSave={props.editAndSave} 
        onSaveCards={onSaveCards}  
        clear={clear}/>
      <SafeAreaView style={styles.containerV}>
        <ScrollView>
          {schedule[props.buttonNumber.indexOf(true)].map(item => {
            if (props.editAndSave) {
              if (item.end_time && item.start_time && item.name_pair && item.auditorium && item.teacher && item.type_week !== denOrNum) {
                return (
                  <View style={styles.container} key={item.id}>
                    <View style={{ alignItems: 'flex-end', width: 44 }}>
                      <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }}>{item.start_time}</Text>
                      <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>{item.end_time}</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.card}>
                      <Text style={styles.typeCourse}>{item.type_pair}</Text>
                      <Text style={styles.course}>{item.name_pair}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                        <Image style={{ width: 16, height: 18 }} source={require('../../../assets/icons/where.png')} />
                        <Text style={styles.textDown}>{item.auditorium}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                        <Image style={{ width: 18, height: 18 }} source={require('../../../assets/icons/name.png')} />
                        <Text style={styles.textDown}>{item.teacher}</Text>
                      </View>
                    </View>
                  </View>
                );
              } else if ((item.id - 1) % 6 === 0 && !(item.end_time && item.start_time && item.name_pair && item.auditorium && item.teacher)) {
                return (
                  <Image style={{ marginTop: 20, width: '100%', height: 280 }} source={require('../../../assets/catslip.jpg')} key={item.id} />
                );
              }
            } else {
                return (
                  <CardScheduleEdit 
                    elem={item} 
                    key={item.id} 
                    saveCards={saveCards}
                    saveData={saveData}
                    schedule={schedule}
                  />
              );
            }
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );  
}
const styles = StyleSheet.create({
  containerV: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
  },
  textDown: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
    paddingLeft: 11,
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
export default Schedule;