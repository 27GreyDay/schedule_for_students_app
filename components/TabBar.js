import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants/theme';

const TabBar = () => {
  return ( 
    <View style={ styles.containerTabBar }>
      <TouchableOpacity>
       <Image style={ styles.imgTabBar } source={require('../assets/icons/notes.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
       <Image style={ styles.imgTabBar } source={require('../assets/icons/schedule.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
       <Image style={ styles.imgTabBar } source={require('../assets/icons/settings.png')}/>
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
  } 
});
export default TabBar;