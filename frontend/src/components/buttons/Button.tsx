import { Pressable, Text } from "react-native";

interface ButtonProps {
    title?: string;
    className?: string;
    textClassName?: string;
    onPress?: () => void;
}

const PRESSABLE_STYLE = "flex justify-center items-center bg-red-orange ml-20 mr-20 p-2 rounded-md"
const TEXT_STYLE = "font-primary text-base text-white"

export const Button = ({ title = "Button", onPress, className, textClassName }: ButtonProps) => {
    
    const pressableStyle = [PRESSABLE_STYLE, className].filter(Boolean).join(" ")
    const textStyle = [TEXT_STYLE, textClassName].filter(Boolean).join(" ")
    
    return (
        <Pressable onPress={onPress} className={pressableStyle}>
            <Text className={textStyle}>
                {title}
            </Text>
        </Pressable>
    );
};