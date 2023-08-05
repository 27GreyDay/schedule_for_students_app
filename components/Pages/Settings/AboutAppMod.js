import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { COLORS } from '../../../constants/theme';

const AboutAppMod = ({ modalVisible, setModalVisible }) => {
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleEmailPress = () => {
    Linking.openURL('mailto:unischedule@mail.ru');
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.modalText}>Версия:<Text style={styles.infText}> 1.0.0</Text></Text>
              
              <TouchableOpacity onPress={closeModal}>
                <Image style={styles.icons} source={require('../../../assets/icons/deleted.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Обратная связь:</Text>
            <Text onPress={handleEmailPress} style={[styles.infText, { textDecorationLine: 'underline'}]}>eunischedule@mail.ru</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLORS.black2,
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginTop: 2,
    marginBottom: 8,
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    color: COLORS.white
  },
  infText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 16,
    color: COLORS.white2
  },
  icons: {
    width: 24,
    height: 24,
  }
});

export default AboutAppMod;