import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants/theme';

const ScheduleTitle = () => {
  return ( 
    <View style={ styles.container }>
      <View>
        <Text>Время</Text>
        <Text>Курс</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5, 
    paddingBottom: 5, 
    paddingLeft: 14, 
    paddingRight: 14, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Ubuntu-Medium', 
    fontSize: 14, 
    color: COLORS.white2,
  } 
});

export default ScheduleTitle;