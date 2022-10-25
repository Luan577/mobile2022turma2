import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, MapScreen, PerfilScreen, QrCodeScreen, CameraScreen, ArquivoScreen, SairScreen, VideoAudioScreen, AcelerometroScreen, PedometroScreen } from "../screens";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";
import ChatNavigation from "./chat.navigation";

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
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="map" size={24} color={colors.white} />
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
      <Tab.Screen
        name="Arquivo"
        component={ArquivoScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="file-account" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatNavigation"
        component={ChatNavigation}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="chat" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="AudioVideo"
        component={VideoAudioScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="video" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
      name="Acelerometro"
      component={AcelerometroScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="car" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedometro"
        component={PedometroScreen}
        options={{
          tabBarIcon: () => (
            <Foundation name="foot" size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}