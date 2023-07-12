import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FirstScreen, CharactorSelect } from '../Screen/AuthScreen/index';
import { LastFeedScreen, Annoucement, Menus, TrendFeedScreen } from '../Screen/MainScreen/index';
import { SubHeader, CustomTabBar, CustoTopTab } from './Custom/index';
export default function Mainavigation() {
    const Stack = createStackNavigator();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'rgba(71,49,41,1)',
            secondary: 'rgba(238,231,215,1)',
            button: 'rgba(146,203,169,1)'

        },
    };
    function RootNavigator() {
        return (
            <Stack.Navigator initialRouteName='FirstScreen' >
                <Stack.Screen name='FirstScreen' component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name='CharactorSelect' component={CharactorSelect} options={{ headerShown: false }} />
                <Stack.Screen name='MyTabs' component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    }
    const BtnTab = createBottomTabNavigator();
    function MyTabs() {
        return (
            <BtnTab.Navigator initialRouteName='Feeds' tabBar={(props) => <CustomTabBar {...props}></CustomTabBar>} screenOptions={{ header: (props) => <SubHeader {...props}></SubHeader> }}>
                <BtnTab.Screen name='Annoucement' component={Annoucement} />
                <BtnTab.Screen name='Feeds' component={TabFeeds} options={{ headerShown: false }} />
                <BtnTab.Screen name='Menus' component={Menus} options={{ headerShown: false }} />
            </BtnTab.Navigator>
        )
    }
    const TTab = createMaterialTopTabNavigator();
    function TabFeeds() {
        return (
            <TTab.Navigator screenOptions={{ swipeEnabled: false }} tabBar={(props) => <CustoTopTab {...props}></CustoTopTab>}>
                <TTab.Screen name='LastFeedScreen' component={LastFeedScreen} />
                <TTab.Screen name='TrendFeedScreen' component={TrendFeedScreen} />
            </TTab.Navigator>
        )
    }
    return (
        <NavigationContainer theme={MyTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}
