import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Image, Platform } from "react-native";
import theme from "../global/styles/theme";

import { Home } from "../screens/Home";
import { TabbarIcon } from "../components/TabbarIcon";
import { TabbarIconSecondary } from "../components/TabbarIconSecondary";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      // initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.title,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "below-icon",
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 6,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: theme.colors.secondary,
          borderTopColor: "transparent",
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
        },
      }}
    >
      {/* <Screen
        name="Nutrição"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              style={{ width: size, height: size }}
              source={require("../assets/tabbar_nutrition_s.png")}
            />
          ),
        }}
      /> */}
      <Screen
        name="Mamãe"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabbarIconSecondary
              focused={focused}
              img={
                <Image
                  style={{ width: 22, height: 30 }}
                  source={require("../assets/tabbar_me_s.png")}
                />
              }
            />
          ),
        }}
      />
      <Screen
        name="Meu bebê "
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} />,
        }}
      />
      {/* <Screen
        name="Jornada"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabbarIconSecondary
              focused={focused}
              size={size}
              color={color}
              img={
                <Image
                  style={{ width: size, height: size }}
                  source={require("../assets/tabbar_journey_s.png")}
                />
              }
            />
          ),
        }}
      /> */}
      <Screen
        name="Configurações"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabbarIconSecondary
              focused={focused}
              img={
                <Image
                  style={{ width: 32, height: 22 }}
                  source={require("../assets/tabbar_health_s.png")}
                />
              }
            />
          ),
        }}
      />
    </Navigator>
  );
}
