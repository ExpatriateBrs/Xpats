import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown'
import { colors } from "../../Styles/theme";

export function CategoriesDropdown({
  setIsFocus,
  setCategory,
  isFocus,
  data,
  value,
  onChange,
  customStyle,
  placeholderStyle,
  selectedTextStyle
}: any) {

  return (

    <Dropdown
      style={[styles.dropdown, customStyle
      ]}
      placeholderStyle={placeholderStyle ? placeholderStyle : styles.placeholderStyle}
      selectedTextStyle={selectedTextStyle ? selectedTextStyle : styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      autoScroll
      search
      maxHeight={300}
      minHeight={100}
      labelField="label"
      valueField="value"
      searchField="search"
      placeholder={!isFocus ? 'Categoria' : '...'}
      searchPlaceholder="Buscar..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item: any) => {
        setCategory(item.value);
        console.log('item.value', item.value)
        setIsFocus(false);
        if (!!onChange) onChange(item.value)
      }}

    />

  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '85%',
    backgroundColor: colors.bluePrimary,
    color: colors.whitePrimary,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.whitePrimary,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.whitePrimary,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});