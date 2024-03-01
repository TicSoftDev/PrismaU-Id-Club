import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StackGroup } from "./StackGruop";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Routes } from "../models/routes";


export default function Navigation() {

    return (
        <NavigationContainer>
            <StackGroup />
        </NavigationContainer>
    );
}