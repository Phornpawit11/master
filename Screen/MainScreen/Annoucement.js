import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image } from 'react-native';
const Annoucement = () => {
  const { colors } = useTheme()
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: colors.secondary ,justifyContent:'center'}} >
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Image source={require('../../assets/Image/new.png')} style={{ width:200, height: 200}} resizeMode='contain'/>
        <Text style={{ fontSize: 25, fontWeight: '800', color: colors.primary }}>No Announcement Now</Text>
      </View>
    </ScrollView>
  )
}
export default Annoucement

const styles = StyleSheet.create({})