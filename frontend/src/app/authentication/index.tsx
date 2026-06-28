import { Button } from "@/src/components/buttons/Button"
import { InputField } from "@/src/components/input/InputField"

import AntDesign from '@expo/vector-icons/AntDesign';

import { Image } from "expo-image"
import { useState } from "react";
import { Text, View } from "react-native"

export default function Index() {
    const [showPassword, setShowPassword] = useState(false)
    
    return (

        <View className="flex-1 items-center justify-center bg-white px-6">
            <Text className="font-primary-bold text-2xl p-6 color-dark-blue">
                Welcome Back!
            </Text>
            <View>
                <Image 
                    contentFit="contain" 
                    className="w-40 h-40 mb-12" 
                    source={require("../../assets/images/logos/logo-color.png")} 
                />
            </View>
            <View className="flex mb-2 gap-4">
                <InputField title="Username" />
                <InputField 
                    title="Password" 
                    secureText={!showPassword} 
                    icons={[{ 
                        icon: <AntDesign 
                            name={showPassword ? "eye" : "eye-invisible"} 
                            size={20}
                            color="white" 
                        />, 
                        position: "right", 
                        onPress: () => setShowPassword(!showPassword) 
                    }]} 
                />
            </View>
            <View className="gap-4">
                <Button title="Login" />
            </View>
        </View>
    )
}