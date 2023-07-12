import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Post, DimensionsScreen } from '../../Constant/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useTheme } from '@react-navigation/native';
const LastFeedScreen = () => {
  const { colors } = useTheme()
  // const [first, setfirst] = useState(second)
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const sortList = [
    { name: "ความรัก", icon: 'heart-outline' },
    { name: "เม้าท์มอย", icon: 'forum' },
    { name: "สุขภาพ", icon: 'plus-thick' },
    { name: "การเรียน", icon: 'book-open-page-variant' },

  ]
  return (
    <View style={{ flexGrow: 1, alignItems: 'center', backgroundColor: colors.secondary }}>
      <View style={{ width: DimensionsScreen.Width, height: 45 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ padding: 7, backgroundColor: colors.primary, paddingHorizontal: 10, borderRadius: 100, marginHorizontal: 5 }}>
            <Text style={{ color: 'white', fontSize: 12 }}>ทั้งหมด</Text>
          </View>
          {sortList.map((item, index) => (
            <View key={index} style={{ padding: 7, backgroundColor: colors.secondary, paddingHorizontal: 10, borderRadius: 100, marginHorizontal: 5, flexDirection: 'row', borderWidth: 1, borderColor: colors.primary, alignItems: 'center' }}>
              <MaterialCommunityIcons name={item.icon} size={15} color={colors.primary} />
              <Text style={{ color: colors.primary, fontSize: 12, marginHorizontal: 5 }}>{item.name}</Text>
            </View>
          ))}

        </ScrollView>
      </View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: colors.secondary }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
          {Post.map((item, index) => (
            <View key={index} style={styles.postContainer}>
              <Text style={{ alignSelf: 'flex-end', fontSize: 12 }}>{item.time}</Text>
              <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                <View style={{ alignItems: 'center', paddingHorizontal: 5 }}>
                  <MaterialCommunityIcons name={"emoticon-happy-outline"} size={35} color={colors.primary} />
                  <Text> {item.name}</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 5, alignSelf: 'center' }}>
                  <Text style={{ fontSize: 18 }}>{item.message}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center' }}>
                <MaterialCommunityIcons name={"thumb-up-outline"} size={23} color={colors.primary} />
                <Text style={{ marginHorizontal: 10, fontSize: 20 }}>{item.status.status_liked}</Text>
                <MaterialCommunityIcons name={"thumb-down-outline"} size={23} color={colors.primary} />
                <Text style={{ marginHorizontal: 10, fontSize: 20 }}>|</Text>
                <MaterialCommunityIcons name={"comment-text-outline"} size={23} color={colors.primary} />
              </View>
            </View>
          ))}

        </View>
      </ScrollView>

      <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: colors.primary, alignSelf: 'flex-end', borderRadius: 999, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons name={"plus"} size={45} color={colors.secondary} />
      </TouchableOpacity>
    </View>

  )
}

export default LastFeedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  postContainer: {
    borderBottomWidth: 1,
    width: DimensionsScreen.Width,
    padding: 10,
  }
})