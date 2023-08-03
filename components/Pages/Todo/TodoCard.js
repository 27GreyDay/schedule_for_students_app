import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';

const TodoCard = props => {
  return ( 
    <View style={ styles.cardTodo }>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>

        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.icons} source={require('../../../assets/icons/time.png')}/>
          <Text style={ styles.dateText }>{ props.date }</Text>
        </View>

        <TouchableOpacity onPress={() => props.handleDelete(props.index)}>
          <Image style={styles.icons} source={require('../../../assets/icons/deleted.png')}/>
        </TouchableOpacity>

      </View>

      <Text style={ styles.course }>{ props.namePair }</Text>
      <Text style={[styles.todoText, {textDecorationLine: props.check ? 'line-through' : 'none'}]}>{ props.task }</Text>
      
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
      color: COLORS.white,
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