import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { styles } from "../../styles";

interface LinkProps {
    onPress: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
    style?: object;
}

const Link: React.FC<LinkProps> = ({ onPress, children, style }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={[styles.link, style]}>{children}</Text>
    </TouchableOpacity>
);

export  {Link};