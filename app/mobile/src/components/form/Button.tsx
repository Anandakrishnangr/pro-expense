import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from "react-native";
import { styles } from "../../styles";

type ButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

export  {Button};