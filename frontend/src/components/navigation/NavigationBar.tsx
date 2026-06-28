import { ReactNode } from "react";
import { TextInput, View, Pressable } from "react-native";

interface Icon {
    icon?: ReactNode;
    position?: "left" | "right";

    onPress?: () => void;

    className?: string;
};

interface InputFieldProps {
    title?: string;
    secureText? : boolean;
    value?: string;

    onChangeText? : (text: string) => void;

    icons? : Icon[];

    className?: string;
};

const TEXT_INPUT_STYLE = "bg-navy-blue color-white font-primary p-1.5 col-start-1 row-start-1";
const ICON_STYLE = "absolute top-1/2 -translate-y-1/2";

export const InputField = ({ 
    title, 
    secureText, 
    value, 
    onChangeText, 
    className, 
    icons 
}: InputFieldProps) => {
    
    const textInputStyle = [TEXT_INPUT_STYLE, className].filter(Boolean).join(" ");
    
    return (
        <View className="relative">
            <TextInput 
                placeholder={title} 
                value={value} 
                secureTextEntry={secureText} 
                className={textInputStyle} 
                onChangeText={onChangeText}
            />

            {icons?.map((icon, index) => {

                const iconPosition = icon.position === "right" ? "right-2" : "left-2";
                const iconStyle = [ICON_STYLE, iconPosition, icon.className].filter(Boolean).join(" ");

                return icon.onPress ? (
                    <Pressable
                        key={index}
                        className={iconStyle}
                        onPress={icon.onPress}
                    >
                        {icon.icon}
                    </Pressable>
                ) : (
                    <View
                        key={index}
                        className={iconStyle}
                    >
                        {icon.icon}
                    </View>
                );
            })}
        </View>
    );
}