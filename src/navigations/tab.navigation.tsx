import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, MapScreen , PerfilScreen, QrCodeScreen, CameraScreen ,SairScreen } from "../screens";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.red,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.red,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
       <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
           < FontAwesome5 name="map-marker-alt" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="camera" size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}