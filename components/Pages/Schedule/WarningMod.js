import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/theme';

const WarningMod = ({ modalVisible, setModalVisible, clear, fEditAndSave}) => {
  const closeModal = () => {
    setModalVisible(!modalVisible);
    fEditAndSave();
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
            <Text style={styles.modalText}>Очистить расписание?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {closeModal(); clear()}}>
                <Text style={styles.textStyle}>Да</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={closeModal}>
                <Text style={styles.textStyle}>Нет</Text>
              </TouchableOpacity>
            </View>
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
    fontFamily: 'Ubuntu-Medium',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.black2,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
    backgroundColor: COLORS.purple2,
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default WarningMod;