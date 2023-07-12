import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DimensionsScreen } from '../../Constant/index';
import { useTheme } from '@react-navigation/native'
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    interpolate,
} from 'react-native-reanimated';

export function CustomTabBar({ state, descriptors, navigation, }) {
    const insets = useSafeAreaInsets();
    const Colors = useTheme();
    const [focusedIndex, setFocusedIndex] = useState(state.index);

    const animationValues = Array.from({ length: state.routes.length }, () =>
        useSharedValue(0)
    );

    useEffect(() => {
        animationValues.forEach((value, index) => {
            if (index === focusedIndex) {
                value.value = withTiming(1, { duration: 200 });
            } else {
                value.value = withTiming(0, { duration: 200 });
            }
        });
    }, [focusedIndex, animationValues]);

    const animatedStyles = animationValues.map((value) =>
        useAnimatedStyle(() => {
            const top = interpolate(value.value, [0, 1], [0, -20]);
            // const borderRadius = interpolate(value.value, [0, 1], [0, 999]);
            return {
                top,
                // borderRadius,
            };
        })
    );

    const handlePress = (index) => {
        setFocusedIndex(index);
        navigation.navigate(state.routes[index].name);
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                width: DimensionsScreen.Width,
                justifyContent: 'center',
                paddingBottom: insets.bottom,
                backgroundColor: Colors.colors.primary,
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel || options.title || route.name;
                const isFocused = state.index === index;
                let iconName = '';
                let color = '';
                let animatedStyle = {};
                let backgroundColor = ''
                if (label === 'Annoucement') {
                    backgroundColor = isFocused ? '#ffff' : Colors.colors.primary,
                        iconName = isFocused ? 'newspaper' : 'newspaper-outline';
                    color = isFocused ? Colors.colors.primary : 'white';
                    animatedStyle = animatedStyles[index];
                } else if (label === 'Feeds') {
                    backgroundColor = isFocused ? '#ffff' : Colors.colors.primary,
                        iconName = isFocused ? 'home' : 'home-outline';
                    color = isFocused ? Colors.colors.primary : 'white';
                    animatedStyle = animatedStyles[index];
                } else {
                    backgroundColor = isFocused ? '#ffff' : Colors.colors.primary,
                        iconName = isFocused ? 'grid' : 'grid-outline';
                    color = isFocused ? Colors.colors.primary : 'white';
                    animatedStyle = animatedStyles[index];
                }

                return (
                    <Animated.View
                        key={route.key}
                        style={[
                            animatedStyle,
                            {
                                flex: 1,
                                backgroundColor: backgroundColor,
                                borderWidth: 1,
                                borderColor: Colors.colors.primary,
                                borderRadius: 999
                            },
                        ]}
                    >
                        <Pressable onPress={() => handlePress(index)} style={{ alignItems: 'center', padding: 15 }}>
                            <Ionicons
                                name={iconName}
                                size={isFocused ? 30 : 30}
                                color={isFocused ? Colors.colors.primary : 'white'}
                            />
                        </Pressable>
                    </Animated.View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        height: 60,
    },
    tabItem: {
        paddingBottom: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderStart: {
        borderTopLeftRadius: 8,
    },
    borderEnd: {
        borderTopRightRadius: 8,
    },
});
