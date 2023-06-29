import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/theme';

const Schedule = () => {
  return (
    <SafeAreaView style={styles.containerV}> 
    <ScrollView>
    <View style={ styles.container }>
      <View style={{ alignItems: 'flex-end', width: 44 }}>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }}>8:20</Text>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>9:50</Text>
      </View>
      <View style={ styles.line }></View>
      <View style={ styles.card }>
        <Text style={ styles.typeCourse }>Лекция</Text>
        <Text style={ styles.course }>Структуры данных и алгорит- мы</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 16, height: 18}} source={require('../assets/icons/where.png')}/>
          <Text style={ styles.textDown }>12 корпус ауд.230</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 18, height: 18}} source={require('../assets/icons/name.png')}/>
          <Text style={ styles.textDown }>Грецова А. П.</Text>
        </View>
      </View>
    </View>
    <View style={ styles.container }>
    <View style={{ alignItems: 'flex-end', width: 44 }}>
      <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }}>8:20</Text>
      <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>9:50</Text>
    </View>
    <View style={ styles.line }></View>
    <View style={ styles.card }>
      <Text style={ styles.typeCourse }>Лекция</Text>
      <Text style={ styles.course }>Структуры данных и алгорит- мы</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
        <Image style={{ width: 16, height: 18}} source={require('../assets/icons/where.png')}/>
        <Text style={ styles.textDown }>12 корпус ауд.230</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
        <Image style={{ width: 18, height: 18}} source={require('../assets/icons/name.png')}/>
        <Text style={ styles.textDown }>Грецова А. П.</Text>
      </View>
    </View>
  </View>
  <View style={ styles.container }>
      <View style={{ alignItems: 'flex-end', width: 44 }}>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }}>8:20</Text>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>9:50</Text>
      </View>
      <View style={ styles.line }></View>
      <View style={ styles.card }>
        <Text style={ styles.typeCourse }>Лекция</Text>
        <Text style={ styles.course }>Структуры данных и алгорит- мы</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 16, height: 18}} source={require('../assets/icons/where.png')}/>
          <Text style={ styles.textDown }>12 корпус ауд.230</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 18, height: 18}} source={require('../assets/icons/name.png')}/>
          <Text style={ styles.textDown }>Грецова А. П.</Text>
        </View>
      </View>
    </View>
    <View style={ styles.container }>
      <View style={{ alignItems: 'flex-end', width: 44 }}>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }}>8:20</Text>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>9:50</Text>
      </View>
      <View style={ styles.line }></View>
      <View style={ styles.card }>
        <Text style={ styles.typeCourse }>Лекция</Text>
        <Text style={ styles.course }>Структуры данных и алгорит- мы</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 16, height: 18}} source={require('../assets/icons/where.png')}/>
          <Text style={ styles.textDown }>12 корпус ауд.230</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 18, height: 18}} source={require('../assets/icons/name.png')}/>
          <Text style={ styles.textDown }>Грецова А. П.</Text>
        </View>
      </View>
    </View>
    <View style={ styles.container }>
      <View style={{ alignItems: 'flex-end', width: 44 }}>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }}>8:20</Text>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>9:50</Text>
      </View>
      <View style={ styles.line }></View>
      <View style={ styles.card }>
        <Text style={ styles.typeCourse }>Лекция</Text>
        <Text style={ styles.course }>Структуры данных</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 16, height: 18}} source={require('../assets/icons/where.png')}/>
          <Text style={ styles.textDown }>12 корпус ауд.230</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 18, height: 18}} source={require('../assets/icons/name.png')}/>
          <Text style={ styles.textDown }>Грецова А. П.</Text>
        </View>
      </View>
    </View>
  </ScrollView>
  </SafeAreaView>
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
    height: 46, 
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