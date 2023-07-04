import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/theme';
import myData from '../constants/data';
import CardScheduleEdit from './CardScheduleEdit';
import ScheduleTitle from './ScheduleTitle';
import TabBar from './TabBar';


const Schedule = props => { // Отрисовка карточек с расписание

  const [editAndSave, setEditAndSave] = useState(true); // Для кнопки "Редактирование/Сохранение"
  const onEditAndSave = () => {
    setEditAndSave(!editAndSave)
  };
  return (
    <>
    <ScheduleTitle fEditAndSave={onEditAndSave} editOrSave={editAndSave}/>
    <SafeAreaView style={styles.containerV}>
    <ScrollView>
      {myData[props.buttonNumber.indexOf(true)].map(item => {
        if (editAndSave) {
          if (item.end_time && item.start_time && item.name_pair && item.auditorium && item.teacher)  
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
                    <Image style={{ width: 16, height: 18 }} source={require('../assets/icons/where.png')} />
                    <Text style={styles.textDown}>{item.auditorium}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                    <Image style={{ width: 18, height: 18 }} source={require('../assets/icons/name.png')} />
                    <Text style={styles.textDown}>{item.teacher}</Text>
                  </View>
                </View>
              </View>
            )
          else if ((item.id - 1) % 6 === 0 && !(item.end_time && item.start_time && item.name_pair && item.auditorium && item.teacher))
            return (
              <Image style={{ marginTop: 100 ,width: '100%', height: 280 }} source={require('../assets/catslip.jpg')} key={item.id}/>
            )
          }
        else {
          return(
            <CardScheduleEdit elem={item} key={item.id}/>
          )
        }
      })}
      </ScrollView>
    </SafeAreaView>
    {editAndSave && <TabBar/>}
    </>
  );
}
const styles = StyleSheet.create({
  containerV: {
    flex: 1,
  },
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
export default Schedule;