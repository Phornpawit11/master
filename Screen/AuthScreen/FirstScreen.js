import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image } from 'react-native';
import { DimensionsScreen } from '../../Constant/index';
const FirstScreen = () => {
    const { colors } = useTheme();
    const { navigate } = useNavigation()
    return (
        <View style={[styles.container, { backgroundColor: colors.primary }]}>
            <Image source={require("../../assets/Image/Choco.png")} style={{ width: DimensionsScreen.Width, height: DimensionsScreen.Height / 3, }} resizeMode='contain'></Image>
            <Text style={[styles.font, { color: colors.secondary, marginVertical: 20 }]}>ChocoMinto</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigate("CharactorSelect")}>
                <Text style={{ color: colors.primary, fontSize: 20, fontWeight: 'bold' }}>
                    Let's start
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }, font: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    btn: {
        width: 150,
        height: 40,
        backgroundColor: "#92CBA9",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99
    }
})