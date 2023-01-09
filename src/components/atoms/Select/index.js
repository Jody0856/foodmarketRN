import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange, data}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputStyle}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => onSelectChange(itemValue)}>
          {data.map(city => {
            return (
              <Picker.Item
                label={city.label}
                value={city.value}
                key={city.id}
                style={styles.item}
              />
            );
          })}
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
