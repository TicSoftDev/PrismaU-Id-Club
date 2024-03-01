import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import QrScreen from "../screens/QrScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Routes } from "../models/routes";
import CarnetScreen from "../screens/CarnetScreen";

const Tab = createBottomTabNavigator();

export function TabGroup() {
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, size }) => {
                    let iconName;
                    if (route.name === Routes.HOME) {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === Routes.CARNET) {
                        iconName = focused ? "id-card" : "id-card-outline";
                    } else if (route.name === Routes.QR) {
                        iconName = focused ? "qr-code" : "qr-code-outline";
                    } else if (route.name === Routes.PROFILE) {
                        iconName = focused ? "person-circle" : "person-circle-outline";
                    }
                    return <Ionicons name={iconName} size={size} color="rgb(9, 130, 33)" />
                },
                headerStyle: { backgroundColor: 'rgb(9, 130, 33)', },
                headerTintColor: 'white',
                headerTitleStyle: { fontWeight: 'bold', },
            })}
        >
            <Tab.Screen name={Routes.HOME} component={HomeScreen} options={{ title: 'Bienvenido'}} />
            <Tab.Screen name={Routes.CARNET} component={CarnetScreen} options={{ title: 'Carnet'}} />
            <Tab.Screen name={Routes.QR} component={QrScreen} options={{ title: 'Codigo QR' }} />
            <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} options={{ title: 'Perfil' }} />
        </Tab.Navigator>
    );
}