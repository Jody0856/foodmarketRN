import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';
const Number = ({number, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumericFormat
        value={number}
        displayType="text"
        decimalSeparator="."
        decimalScale={1}
        renderText={value => <Text style={style}>{value}</Text>}
        fixedDecimalScale
      />
    );
  }
  return (
    <NumericFormat
      value={number}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      prefix="IDR "
      renderText={value => <Text style={style}>{value}</Text>}
    />
  );
};

export default Number;
