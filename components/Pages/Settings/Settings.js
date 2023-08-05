import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';
import Donation from './Donation';
import AboutAppMod from './AboutAppMod';
import { useState } from 'react';

const Settings = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return ( 
    <>
    <AboutAppMod modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Настройки</Text>
      <View style={ styles.container }>
        <TouchableOpacity style={ styles.button } onPress={() => props.setNumerToDenom(!props.numerToDenom)}>
          { props.numerToDenom ? 
            <Image style={styles.icons} source={require('../../../assets/icons/square.png')}/> 
            :
            <Image style={styles.icons} source={require('../../../assets/icons/check.png')}/>
          }
          <Text style={styles.settings}>Поменять числитель на знаменатель</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.icons} source={require('../../../assets/icons/Info.png')}/>
          <Text style={styles.settings}>О приложении</Text>
        </TouchableOpacity>
      </View>
      <Donation />
    </View>
    </>
  );
}
  const styles = StyleSheet.create({
    title: {
      marginTop: 60,
      marginBottom: 30,
      fontFamily: 'Ubuntu-Bold',
      textTransform: 'uppercase',
      fontSize: 16,
      color: COLORS.white2,
      alignSelf: 'center'
    },
    container: {
      marginHorizontal: 20,
    },
    icons: {
      width: 24,
      height: 24,
    },
    button: {
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
    },
    settings: {
      fontFamily: 'Ubuntu-Medium',
      fontSize: 16,
      color: COLORS.white,
      marginLeft: 10
    }
  }) 
export default Settings;