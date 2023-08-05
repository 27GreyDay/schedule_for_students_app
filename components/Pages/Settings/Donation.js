import React from 'react';
import { Text, TouchableOpacity, Linking, StyleSheet, View, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';

const Donation = () => {
  const handlePress = () => {
    Linking.openURL('https://yoomoney.ru/to/4100118095316084')
  };

  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ styles.button } onPress={handlePress}>
        <Image style={styles.icons} source={require('../../../assets/icons/Coffee.png')}/>
        <Text style={ styles.textStyle }>Угостишь меня кофе?</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.purple2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    color: COLORS.white,
  },
  icons: {
    width: 22,
    height: 22,
    marginRight: 5
  }
}) 
export default Donation;

