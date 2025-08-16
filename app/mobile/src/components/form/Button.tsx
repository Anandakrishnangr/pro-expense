import React from "react";
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useStyle } from "../../features";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle }) => {
  const styles = useStyle();

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.7}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
