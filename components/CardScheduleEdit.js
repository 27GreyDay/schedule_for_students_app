import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { COLORS } from '../constants/theme';

const CardScheduleEdit = () => {
  const [text, setText] = useState('');

  const handleTextChange = (input) => {
    let formattedText = input;
    
    formattedText = formattedText.replace(/\D/g, '');// Удалить все символы, кроме цифр

    if (formattedText.length === 1 && (formattedText === '8' || formattedText === '9')) {
      formattedText = '0' + formattedText.slice(0, 1) + ':' + formattedText.slice(1);
    }
    else if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + ':' + formattedText.slice(2);
    }

    setText(formattedText);
  };

  return ( 
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end', width: 44 }}>
        <TextInput style={{ fontFamily: 'Ubuntu-Medium', fontSize: 16, color: COLORS.white, paddingBottom: 14 }} placeholder='0:00' keyboardType="numeric" value={text} onChangeText={handleTextChange} maxLength={5}/>
        <Text style={{ fontFamily: 'Ubuntu-Medium', fontSize: 14, color: COLORS.white2 }}>13:30</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.card}>
        <Text style={styles.typeCourse}>практика</Text>
        <Text style={styles.course}>Редактирование</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 16, height: 18 }} source={require('../assets/icons/where.png')} />
          <Text style={styles.textDown}>293</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
          <Image style={{ width: 18, height: 18 }} source={require('../assets/icons/name.png')} />
          <Text style={styles.textDown}>Зельцер С. Н.</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    height: 55,
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
export default CardScheduleEdit;