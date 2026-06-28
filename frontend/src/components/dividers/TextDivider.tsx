import { Text } from "react-native";

interface TextDividerProps {
    text?: string;
}

export const TextDivider = ({text = "TextDivder"}) => {
    <Text>
        {text}
    </Text>
}