import { StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { ProfessionalItemCard } from "../../Molecules/ProfessionalItemCard";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colors } from "../../Styles/theme";
import React from "react";

export const Gallery = ({ items, navigation, maxHeight }: any) => {
  return (
    <FlatGrid
      itemDimension={125}
      data={items}
      style={[styles.gridView, maxHeight && { height: maxHeight }]}
      staticDimension={400}
      spacing={10}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProfessionalItemCard
          id={item.id}
          country={item.country}
          description={item.description}
          name={item.displayName}
          services={item.services}
          user={item}
          key={`${item.id}`}
          navigation={navigation}
          city={item.city}
          category={item.category}
        />
      )}
      contentContainerStyle={styles.itemContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    height: heightPercentageToDP("100%"),
    marginBottom: heightPercentageToDP("45%"),
    padding: 0,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    resizeMode: "contain",
    maxWidth: widthPercentageToDP("100%"),
    backgroundColor: colors.whitePrimary,
  }
});
