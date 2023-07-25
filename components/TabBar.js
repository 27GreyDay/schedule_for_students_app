import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants/theme';

const TabBar = () => {
  return ( 
    <View style={ styles.containerTabBar }>
      <TouchableOpacity style={ styles.center }>
       <Image style={ styles.imgTabBar } source={require('../assets/icons/notes.png')}/>
       <Image style={ styles.point } source={require('../assets/icons/t.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={ styles.center }>
       <Image style={ styles.imgTabBar } source={require('../assets/icons/schedule.png')}/>
       <Image style={ styles.point } source={require('../assets/icons/t.png')}/>
      </TouchableOpacity>

      <TouchableOpacity style={ styles.center }>
       <Image style={ styles.imgTabBar } source={require('../assets/icons/settings.png')}/>
       <Image style={ styles.point } source={require('../assets/icons/t.png')}/>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  containerTabBar: {
    height: 70,
    backgroundColor: COLORS.black2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgTabBar: {
    width: 24, 
    height: 24,
    marginTop: 20,
  },
  center: {
    alignItems: 'center',
  },
  point: {
    width: 4, 
    height: 4, 
    marginTop: 5
  }
});
export default TabBar;