import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../constants/theme';

const TabBar = props => {

  const onTransition = (index) => {
    props.setRouter(prevRouter => {
      const router = [...prevRouter];
      const index1 = router.indexOf(true);
      router[index1] = false;
      router[index] = true;
      return router;
    })
  }

  return ( 
    <View style={ styles.containerTabBar }>
      <TouchableOpacity style={ styles.center } onPress={() => onTransition(0)}>
       <Image style={[styles.imgTabBar, {marginTop: props.router[0] ? 15 : 20}]} source={require('../../assets/icons/notes.png')}/>
       {props.router[0] && <Image style={ styles.point } source={require('../../assets/icons/t.png')}/>}
      </TouchableOpacity>

      <TouchableOpacity style={ styles.center } onPress={() => onTransition(1)}>
       <Image style={[styles.imgTabBar, {marginTop: props.router[1] ? 15 : 20}]} source={require('../../assets/icons/schedule.png')}/>
       {props.router[1] && <Image style={ styles.point } source={require('../../assets/icons/t.png')}/>}
      </TouchableOpacity>

      <TouchableOpacity style={ styles.center } onPress={() => onTransition(2)}>
       <Image style={[styles.imgTabBar, {marginTop: props.router[2] ? 15 : 20}]} source={require('../../assets/icons/settings.png')}/>
       {props.router[2] && <Image style={ styles.point } source={require('../../assets/icons/t.png')}/>}
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