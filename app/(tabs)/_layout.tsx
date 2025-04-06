import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color,focused }) => {
            if(focused){
              return <Ionicons size={28} color={color} name="home"/>
          }
            return <Ionicons size={28} color={color} name="home-outline"/>
          }
        }}
      />

      <Tabs.Screen
        name="passwords"
        options={{
          title: 'Passwords',
          tabBarIcon: ({ color,focused }) => {
            if(focused){
              return <Ionicons size={28} color={color} name="lock-closed"/>
          }
            return <Ionicons size={28} color={color} name="lock-closed-outline"/>
          }
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />

    </Tabs>
  );
}
