import { View, Text, Modal, StyleSheet } from 'react-native';
import { COLORS } from './theme';

const SaveMod = props => {
  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => props.setModalVisible(false)}
      >
        <View style={ styles.modalBackground}>
          <View style={ styles.modalView }>
            <Text style={ styles.textStyle }>Данные сохранены</Text>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  modalView: {
    backgroundColor: COLORS.black2,
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: COLORS.white,
    fontSize: 14,
    marginBottom: 3
  },
});

export default SaveMod;
