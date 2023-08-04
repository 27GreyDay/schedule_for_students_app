import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';
import SaveMod from '../../../constants/SaveMod';

const TodoTitle = props => {
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
    <View style={styles.title}>
      <View style={{ width: props.save ? 48 : 96 }}/>
      <Text style={styles.titleText}>Задачи</Text>

      <View style={{ flexDirection: 'row',}}> 
        {
        !props.save &&
          <TouchableOpacity onPress={() => {
            props.onSaveTodo() 
            handleSave()
          }}>
            <Image style={styles.icons} source={require('../../../assets/icons/save.png')}/>
          </TouchableOpacity>
        }

        <TouchableOpacity onPress={() => props.setSave(!props.save)}>
        {props.save ? 
        (
        <Image style={styles.icons} source={require('../../../assets/icons/edit.png')}/>
        ) : (
        <Image style={styles.icons} source={require('../../../assets/icons/close.png')}/>
        )}
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}
  const styles = StyleSheet.create({
    title: {
      marginHorizontal: 20,
      marginTop: 60,
      marginBottom: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleText: {
      fontFamily: 'Ubuntu-Bold',
      textTransform: 'uppercase',
      fontSize: 16,
      color: COLORS.white2,
    },
    icons: {
      width: 24,
      height: 24,
      marginLeft: 24
    }
  }) 
export default TodoTitle;