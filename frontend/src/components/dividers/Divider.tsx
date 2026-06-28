import { View, Text } from "react-native";

interface DividerProps {
    text?: string;
    orientation?: "horizontal" | "vertical";

    className?: string;
    dividerClassName?: string;
    textClassName?: string;
};

const CONTAINER_STYLE = "items-center";
const DIVIDER_STYLE = "flex-1 bg-black";
const TEXT_STYLE = "font-secondary px-2";

export const Divider = ({
    text,
    orientation,
    className,
    dividerClassName,
    textClassName
} : DividerProps) => {
    
    const dividerPosition = orientation === "vertical" ? "w-0.5" : "h-0.5";
    const containerPosition = orientation === "vertical" ? "h-full flex-col" : "w-full flex-row";

    const containerStyle = [CONTAINER_STYLE, containerPosition, className].filter(Boolean).join(" ");
    const dividerStyle = [DIVIDER_STYLE, dividerPosition, dividerClassName].filter(Boolean).join(" ");
    const textStyle = [TEXT_STYLE, textClassName].filter(Boolean).join(" ");

    return (
        <View className={containerStyle}>
            <View className={dividerStyle} />

            {text && <Text className={textStyle}>
                {text}
            </Text>}
            
            <View className={dividerStyle} />
        </View>
    );
}