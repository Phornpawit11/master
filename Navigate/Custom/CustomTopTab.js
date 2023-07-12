
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { DimensionsScreen } from './../../Constant/index';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
export function CustoTopTab({ state, descriptors, navigation, position }) {
    const insets = useSafeAreaInsets();
    const State = state.index
    const { colors } = useTheme()
    return (
        <View style={{ justifyContent: 'center', paddingTop: insets.top, width: DimensionsScreen.Width, backgroundColor: colors.primary, paddingVertical: 5 }}>
            <View style={{ height: 40, width: DimensionsScreen.Width, justifyContent: 'center', }}>
                <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: "bold", color: colors.secondary }}>
                    Chocominto
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: DimensionsScreen.Width / 1.1, justifyContent: 'center', marginVertical: 8, backgroundColor: colors.secondary, padding: 2, alignSelf: 'center', borderRadius: 22 }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ width: "50%", height: 30, alignItems: 'center', backgroundColor: isFocused ? colors.primary : "transparent", borderRadius: 20, justifyContent: 'center' }}
                            key={route.key}
                        >
                            <Text style={{ fontSize: 16, color: isFocused ? colors.secondary : "#696969", fontWeight: isFocused ? "500" : "400", }}>{label === "LastFeedScreen" ? "Last choco" :label === "TrendFeedScreen" ? "Trending choco":label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

        </View>
    );
}
