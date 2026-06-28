import { Button } from "@/src/components/buttons/Button"
import { Divider } from "@/src/components/dividers/Divider";
import { InputField } from "@/src/components/input/InputField";

import AntDesign from '@expo/vector-icons/AntDesign';

import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";

import { useState } from "react";
import { Text, View } from "react-native"

export default function Login() {
    
    const router = useRouter();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="flex-1 items-center justify-center bg-white px-6">
            <Text className="text-header">
                Welcome Back!
            </Text>

            <View>
                <Image
                    contentFit="contain" 
                    className="w-40 h-40 mb-12" 
                    source={require("../../assets/images/logos/logo-color.png")} 
                />
            </View>

            <View className="flex gap-4">
                <InputField 
                    title="Username"
                    value={username}
                    onChangeText={setUsername} 
                />
                <InputField
                    title="Password"
                    secureText={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    icons={[{
                        icon: <AntDesign 
                            name={showPassword ? "eye" : "eye-invisible"} 
                            size={22}
                            color="white" 
                        />,
                        position: "right", 
                        onPress: () => setShowPassword(!showPassword) 
                    }]}
                />
            </View>
            

            <View className="flex-row justify-end w-48 mb-4">
                <Link href="/authentication/forgotPassword">
                    <Text className="font-secondary text-xs">
                        Forgot Password?
                    </Text>
                </Link>
            </View>

            <View className="gap-4 mb-4">
                <Button 
                    title="Login" 
                    onPress={() => console.log(username, password)}
                />
            </View>

            <Divider text="or signup with" />

            <View>
                <Link href="/authentication/forgotPassword">
                    <Text className="font-secondary text-xs">
                        Need an Account? Sign Up
                    </Text>
                </Link>
            </View>
        </View>
    );
}