import { StyleSheet, View, Text, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';

const CardSchedule = props => {
  return ( 
    <View style={styles.container} >
      <View style={{ alignItems: 'flex-end', width: 44 }}>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }}>{props.item.start_time}</Text>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>{props.item.end_time}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.card}>
        <Text style={styles.typeCourse}>{props.item.type_pair}</Text>
        <Text style={styles.course}>{props.item.name_pair}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 16, height: 18 }} source={require('../../../assets/icons/where.png')} />
          <Text style={styles.textDown}>{props.item.auditorium}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 18, height: 18 }} source={require('../../../assets/icons/name.png')} />
          <Text style={styles.textDown}>{props.item.teacher}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
 
export default CardSchedule;