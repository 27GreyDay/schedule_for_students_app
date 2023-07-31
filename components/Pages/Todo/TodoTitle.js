import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';

const TodoTitle = props => {
  return ( 
    <View style={styles.title}>
      <View style={{width: 24, height: 24, backgroundColor: 'black'}}/>
      <Text style={styles.titleText}>Задачи</Text>
      <TouchableOpacity onPress={() => props.setSave(!props.save)}>
      {props.save ? <Image style={styles.icons} source={require('../../../assets/icons/edit.png')}/> : <Image style={styles.icons} source={require('../../../assets/icons/save.png')}/>}
      </TouchableOpacity>
    </View>
  );
}
  const styles = StyleSheet.create({
    title: {
      marginTop: 60,
      marginBottom: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleText: {
      fontFamily: 'Ubuntu-Bold',
      textTransform: 'uppercase',
      fontSize: 16,
      color: COLORS.white2,
    },
    icons: {
      width: 24,
      height: 24,
    }
  }) 
export default TodoTitle;