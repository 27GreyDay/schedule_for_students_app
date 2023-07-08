import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants/theme';

const ScheduleTitle = props => {
  
  return ( 
    <View style={ styles.container }>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.timeCourse}>Время</Text>
        <Text style={styles.timeCourse}>Курс</Text>
      </View>
      <TouchableOpacity onPress={props.fEditAndSave}>
        {props.editOrSave ? <Image style={{width: 24, height: 24}} source={require('../assets/icons/edit.png')}/> : <Image style={{width: 24, height: 24}} source={require('../assets/icons/save.png')}/>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 14, 
    paddingRight: 14, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  timeCourse: {
    paddingRight: 33,
    fontFamily: 'Ubuntu-Medium', 
    fontSize: 14, 
    color: COLORS.white2,
  } 
});

export default ScheduleTitle;