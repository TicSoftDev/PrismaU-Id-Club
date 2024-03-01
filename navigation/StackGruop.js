import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabGroup } from "./TabGroup";
import LoginScreen from "../screens/LoginScreen";
import { Routes } from "../models/routes";

const Stack = createNativeStackNavigator();

export function StackGroup() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
            <Stack.Screen name={Routes.PRINCIPAL} component={TabGroup} />
        </Stack.Navigator>
    );
}