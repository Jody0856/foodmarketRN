import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#8D92A3"
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: '#000',
    // borderStyle: 'solid',
  },
});
