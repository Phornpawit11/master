import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image } from 'react-native';
import { DimensionsScreen } from '../../Constant/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
const CharactorSelect = () => {
    const { colors } = useTheme();
    const { navigate } = useNavigation()
    return (
        <View style={[styles.container, { backgroundColor: colors.primary }]}>
            <Text style={{ fontSize: 30, color: colors.secondary }}>เลือกอวตาของคุณได้เลย</Text>
            <Image source={require("../../assets/Image/Emoji.png")} style={{ width: DimensionsScreen.Width / 1.1, height: DimensionsScreen.Height / 3, }} resizeMode='contain'></Image>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'position' : undefined}>
                <View style={styles.tnpContainer}>
                    <TextInput style={{ flex: 1, fontSize: 25, paddingHorizontal: 15, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, backgroundColor: '#ffff' }} placeholder='กรอกชื่อที่นี่...'>
                    </TextInput>
                    <TouchableOpacity style={{ width: 65, backgroundColor: colors.button, borderTopRightRadius: 15, borderBottomRightRadius: 15, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigate("MyTabs")}>
                        <MaterialCommunityIcons name="send" size={45} color={colors.secondary} style={{ padding: 6 }} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default CharactorSelect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    tnpContainer: {
        width: DimensionsScreen.Width / 1.2,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})