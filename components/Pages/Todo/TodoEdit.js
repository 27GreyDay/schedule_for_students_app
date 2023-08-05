import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { COLORS } from '../../../constants/theme';
import CalendarMod from './CalendarMod';

const TodoEdit = props => {
  const [namePairEdit, setNamePairEdit] = useState(props.task.namePair)
  const [todo, setTodo] = useState(props.task.task)
  const [date, setDate] = useState(props.task.date)
  const [modalVisible, setModalVisible] = useState(false);

  const onSave = () => {
    props.task.namePair = namePairEdit
    props.task.task = todo
    props.task.date = date
  }

  useEffect(() => {
    onSave()
  }, [props.saveTodo]);

  const onCalendarMod = () => {
    setModalVisible(!modalVisible)
  }

  return ( 
    <>
    <CalendarMod modalVisible={modalVisible} onCalendarMod={onCalendarMod} setDate={setDate}/>
    <View style={ styles.cardTodo }>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>

        <View style={{ flexDirection: 'row', alignItems: 'center'}}>

          <Image style={styles.icons} source={require('../../../assets/icons/time.png')}/>
          <TouchableOpacity onPress={onCalendarMod}>
            <Text style={ styles.dateText }>{ date ? date : 'Выбрать дату' }</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={() => props.handleDelete(props.index)}>
          <Image style={styles.icons} source={require('../../../assets/icons/deleted.png')}/>
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
      <TextInput 
        style={ styles.todoText }
        value={todo}
        onChangeText={text => setTodo(text)}
        placeholder='Задание'
        placeholderTextColor={COLORS.white3}
        multiline
        numberOfLines={2}
      />

    </View>
    </>
  );
}
  const styles = StyleSheet.create({
    cardTodo: {
      backgroundColor: COLORS.purple2, 
      borderRadius: 16, 
      paddingVertical: 15, 
      paddingHorizontal: 20,
      marginHorizontal: 20,
      marginBottom: 15,
    },
    dateText: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: 12,
      paddingLeft: 10,
      color: COLORS.white
    },
    course: {
      marginVertical: 15,
      fontFamily: 'Ubuntu-Bold',
      fontSize: 16,
      color: COLORS.white
    },
    todoText: {
      fontFamily: 'Ubuntu-Light',
      fontSize: 14,
      lineHeight: 16,
      color: COLORS.white
      // paddingLeft: 10,
    },
    icons: {
      width: 24,
      height: 24,
    }
  }) 
export default TodoEdit;