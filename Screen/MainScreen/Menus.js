import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Post, DimensionsScreen, DimensionsWindow } from '../../Constant/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useTheme } from '@react-navigation/native';
const Menus = () => {
  const { colors } = useTheme()
  const tabs = [
    {
      title: "Choco ของฉัน",
      icon: 'pencil-outline'
    },
    {
      title: "Choco ที่รีพลาย",
      icon: 'reply-all-outline'
    },
    {
      title: "Choco ที่ติดตาม",
      icon: 'pin-outline'
    },
    {
      title: "มีอะไรถาม Choco",
      icon: 'face-agent'
    },
    {
      title: "Choco setting",
      icon: 'cog'
    }
  ]
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: colors.secondary }}>
    <View style={[{ backgroundColor: colors.secondary }, styles.container]}>

      <View style={[styles.header, { width: DimensionsWindow.Width, height: DimensionsScreen.Height / 2.1, backgroundColor: colors.primary, }]}>
        <MaterialCommunityIcons name={"emoticon-happy-outline"} size={150} color={colors.secondary} />
        <Text style={{ color: colors.secondary, fontSize: 35 }}> asdasd</Text>
      </View>
      <View style={{ flex: 1, width: DimensionsScreen.Width, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
        {tabs.map((item, index) => (
          <TouchableOpacity style={{ width: "45%", height: 90, backgroundColor: 'rgba(100,73,64,0.2)', borderRadius: 10, margin: 5,justifyContent:'center',alignItems:'center' }} key={index}>
          <MaterialCommunityIcons name={item.icon} size={50} color={colors.primary} />
            <Text>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}


      </View>
    </View>

      </ScrollView>
  )
}

export default Menus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: { borderBottomLeftRadius: 50, borderBottomRightRadius: 50, justifyContent: 'center', alignItems: 'center' }
})