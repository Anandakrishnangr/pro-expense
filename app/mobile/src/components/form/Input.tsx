import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "../../styles";

type InputProps = TextInputProps & {
    value: string;
    onChangeText: (text: string) => void;
};

 const Input: React.FC<InputProps> = ({ value, onChangeText, style, ...props }) => (
    <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        {...props}
    />
);

export  {Input};