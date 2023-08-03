import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/theme';

const TodoAdd = props => {
  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ styles.button } onPress={props.handleAdd}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require('../../../assets/icons/deleted.png')}
          transform={[{ rotate: '45deg' }]}
        />
      </TouchableOpacity>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15
  },
  button: {
    backgroundColor: COLORS.purple2, 
    borderRadius: 50, 
    width: 40, 
    height: 40,
  }
}) 
export default TodoAdd;
