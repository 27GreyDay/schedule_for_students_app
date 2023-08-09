import React, { useEffect, useState } from 'react';
import { Image, ScrollView, SafeAreaView } from 'react-native';
import myData from '../../../constants/data';
import CardScheduleEdit from './CardScheduleEdit';
import ScheduleTitle from './ScheduleTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardSchedule from './CardSchedule';


const Schedule = props => { // Отрисовка карточек с расписание
  const denOrNum = props.dn ? (props.denominatorOrNumerator ? props.denOrNum[1]  : props.denOrNum[0]) : (!props.denominatorOrNumerator ? props.denOrNum[1] : props.denOrNum[0])
  
  const [saveCards, setSaveCards] = useState(false);

  const [schedule, setSchedule] = useState(myData);

  const saveData = async (data) => {
      await AsyncStorage.setItem('myData', JSON.stringify(data));
  };

  const loadTasksData = async () => {
    const data = await AsyncStorage.getItem('myData');
    if (data !== null) {
      return JSON.parse(data);
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
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {schedule[props.buttonNumber.indexOf(true)].map(item => {
            if (props.editAndSave) {
              if (item.end_time && item.start_time && item.name_pair && item.auditorium && item.teacher && item.type_week !== denOrNum) {
                return (
                  <CardSchedule key={item.id} item={item} />
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
                    denOrNum={props.denOrNum}
                  />
              );
            }
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );  
}

export default Schedule;