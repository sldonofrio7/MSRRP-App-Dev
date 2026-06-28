import { Tabs } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Home",
                    tabBarIcon: ({ color, focused}) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                }} 
            />
        </Tabs>
  );
}