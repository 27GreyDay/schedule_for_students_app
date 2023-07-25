import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants/theme';

const Settings = () => {
  return ( 
    <View>
      <Text style={styles.title}>Настройки</Text>
    </View>
  );
}
  const styles = StyleSheet.create({
    title: {
      marginVertical: 40,
      fontFamily: 'Ubuntu-Bold',
      textTransform: 'uppercase',
      fontSize: 16,
      color: COLORS.white2,
      alignSelf: 'center'
    }
  }) 
export default Settings;