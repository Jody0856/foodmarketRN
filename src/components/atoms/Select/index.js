import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputStyle}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => onSelectChange(itemValue)}>
          <Picker.Item label="Batam" value="Batam" style={styles.item} />
          <Picker.Item label="Jakarta" value="Jakarta" style={styles.item} />
          <Picker.Item label="Bandung" value="Bandung" style={styles.item} />
          <Picker.Item label="Bali" value="Bali" style={styles.item} />
          <Picker.Item label="Surabaya" value="Surabaya" style={styles.item} />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    //  / color: '#8D92A3',
    // borderStyle: 'solid',
    backgroundColor: 'white',
  },
  item: {
    color: 'black',
    backgroundColor: 'white',
  },
});
