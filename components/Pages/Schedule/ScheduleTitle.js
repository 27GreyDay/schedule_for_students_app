import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';
import WarningMod from './WarningMod';
import { useState } from 'react';
import SaveMod from '../../../constants/SaveMod';

const ScheduleTitle = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSave, setModalVisibleSave] = useState(false);

  const handleSave = () => {
    // Сохранение данных
    setModalVisibleSave(true); // Показываем модальное окно
    setTimeout(() => {
      setModalVisibleSave(false); // Скрываем модальное окно через 2 секунды
    }, 1000);
  };

  return (
    <>
    <SaveMod modalVisible={modalVisibleSave} setModalVisible={setModalVisibleSave}/>
    <WarningMod 
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible} 
      clear={props.clear} 
      fEditAndSave={props.fEditAndSave}
    />
    
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.timeCourse}>Время</Text>
        <Text style={styles.timeCourse}>Курс</Text>
      </View>

      <TouchableOpacity onPress={() => {
        setModalVisible(!modalVisible); 
        props.fEditAndSave();
      }}>
        {!props.editAndSave && (
          <Image
            style={ styles.button }
            source={require('../../../assets/icons/delete.png')} 
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        props.onSaveCards();
        handleSave();
      }}>
        {!props.editAndSave && (
          <Image
            style={ styles.button }
            source={require('../../../assets/icons/save.png')}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.fEditAndSave()}>
        {props.editAndSave ? (
          <Image
            style={ styles.button }
            source={require('../../../assets/icons/edit.png')}
          />
        ) : (
          <Image
            style={ styles.button }
            source={require('../../../assets/icons/close.png')}
          />
        )}
      </TouchableOpacity>
    </View>
    </>
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
  button: {
    width: 24,
    height: 24,
  },
  timeCourse: {
    paddingRight: 33,
    fontFamily: 'Ubuntu-Medium', 
    fontSize: 14, 
    color: COLORS.white2,
    marginRight: 10,
  } 
});

export default ScheduleTitle;