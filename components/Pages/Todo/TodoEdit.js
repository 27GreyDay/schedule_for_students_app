import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { COLORS } from '../../../constants/theme';

const TodoCard = props => {
  const [date, setDate] = useState(props.date)
  const [namePairEdit, setNamePairEdit] = useState(props.namePair)
  const [todo, setTodo] = useState(props.task)

  return ( 
    <View style={ styles.cardTodo }>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>

        <View style={{ flexDirection: 'row', alignItems: 'center'}}>

          <Image style={styles.icons} source={require('../../../assets/icons/time.png')}/>
          <TextInput 
            style={ styles.dateText } 
            value={date} 
            onChangeText={text => setDate(text)} 
            placeholder='Срок выполнения' 
            placeholderTextColor={COLORS.white3}
            maxLength={20}
          />
          
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
        maxLength={100}
      />

    </View>
  );
}
  const styles = StyleSheet.create({
    cardTodo: {
      backgroundColor: COLORS.purple2, 
      borderRadius: 16, 
      paddingVertical: 15, 
      paddingHorizontal: 20,
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
      // paddingLeft: 10,
    },
    icons: {
      width: 24,
      height: 24,
    }
  }) 
export default TodoCard;