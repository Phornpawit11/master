import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
const SubHeader = ({ route }) => {
    const { width, height } = Dimensions.get('window');
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: insets.top, alignItems: 'center', width: width,  backgroundColor: 'white', borderBottomWidth: 0.5, borderBottomColor: '#ECECEC',backgroundColor:colors.primary }}>
            <View style={{ height: 45, flexDirection: "row", alignItems: "center", justifyContent: 'center', }} >
                {/* <MaterialCommunityIcons name={
                } size={30} color={'rgb(236,106,82)'} /> */}
                <Text style={{ fontSize: 26, color: colors.secondary, fontWeight: 'bold' }}> {route.name == "MainHome" ? "1st Astrology":route.name} </Text>
            </View>
        </View>
    )
}

export default SubHeader

const styles = StyleSheet.create({})