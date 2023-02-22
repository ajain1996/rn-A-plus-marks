import { View, Text, StatusBar, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../Component/Constant/Color'
import CustomHeader from '../../Component/CustomHeader'
import HomeCarousel from './HomeCarousel'
import { commonStyles } from '../../Utils/commonStyles'
import LinearGradient from 'react-native-linear-gradient'
import Navigation from '../../Service/Navigation'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ width: "100%", backgroundColor: "#fff" }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkBlue} />
      <CustomHeader
        title="Home Screen"
        navigation={navigation}
      />

      <View style={{ padding: 8 }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          numColumns={3}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          renderItem={({ }) => {
            return (
              <TouchableHighlight onPress={() => { Navigation.navigate("ExamsScreen") }} underlayColor="#f7f8f9"
                style={{ borderRadius: 12 }}
              >
                <LinearGradient colors={["#F2F5F6", "#EDF6F7"]} style={styles.categories}>
                  <View style={styles.categoriesCard}>
                    <Image
                      source={require("../../Assets/algorithm.png")}
                      style={{ width: 38, height: 38, borderRadius: 100, marginBottom: 5 }}
                    />
                  </View>
                  <Text style={{ ...commonStyles.fs14_500, color: COLORS.darkBlue }}>Algorithms</Text>
                </LinearGradient>
              </TouchableHighlight>
            );
          }}
          ListHeaderComponent={
            <View>
              <View style={{ paddingHorizontal: 4 }}>
                <HomeCarousel />
              </View>
              <View style={{ alignItems: "center", marginBottom: 5, marginTop: 12 }}>
                <Text style={styles.polularCaregoriesTxt}>POPULAR CATEGORIES</Text>
                <View style={{ width: 80, height: 3, backgroundColor: COLORS.darkBlue }} />
              </View>
            </View>
          }
          ListFooterComponent={
            <View style={{ marginTop: 16 }}>
              <View style={{ alignItems: "center", marginBottom: 5, marginTop: 12 }}>
                <Text style={{ ...commonStyles.fs18_700, marginBottom: 5 }}>LISTINGS</Text>
                <View style={{ width: 50, height: 3, backgroundColor: COLORS.darkBlue }} />
              </View>

              <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                horizontal
                renderItem={({ }) => {
                  return (
                    <TouchableHighlight underlayColor="#fff"
                      onPress={() => { navigation.navigate("MockTestDetailScreen") }}
                    >
                      <View style={styles.listingCard}>
                        <View style={styles.listingImage}>
                          <Image
                            source={require("../../Assets/algorithm2.png")}
                            style={{ width: 70, height: 42, borderRadius: 8 }}
                          />
                        </View>
                        <View style={{ paddingVertical: 12, paddingHorizontal: 5 }}>
                          <Text style={{ ...commonStyles.fs14_600, marginTop: 5 }}>Algorithms with DSA</Text>
                          <Text style={{ ...commonStyles.fs12_400, marginTop: 10 }}>learn how to build projects and use DSA</Text>

                          <Text style={{ ...commonStyles.fs12_400, marginTop: 18 }}>Price: 1800</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  );
                }}
              />
              <View style={{ height: 200 }} />
            </View>
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categories: {
    width: SIZES.width / 3.4,
    height: SIZES.width / 3.4,
    elevation: 9,
    shadowColor: "#999",
    borderRadius: 9,
    margin: 5,
    ...commonStyles.centerStyles,
  },
  categoriesCard: {
    width: 66, height: 66, backgroundColor: "#fff",
    borderRadius: 100, ...commonStyles.centerStyles,
    marginBottom: 8
  },
  listings: {
    elevation: 4, shadowColor: "#999",
    padding: 12, borderRadius: 6,
    backgroundColor: "#fff",
    ...commonStyles.rowBetween,
    margin: 8
  },
  polularCaregoriesTxt: {
    ...commonStyles.fs18_700, margin: 5, marginTop: 20
  },
  listingCard: {
    elevation: 6,
    shadowColor: "#999",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    width: SIZES.width / 2.2,
    marginRight: 10,
    marginBottom: 10
  },
  listingImage: {
    width: "100%",
    height: 110,
    backgroundColor: "#EDF6F7",
    ...commonStyles.centerStyles,
    borderRadius: 8
  }
})
