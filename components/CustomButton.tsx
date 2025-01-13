import React from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          backgroundColor: disabled ? "#E2E8F0" : "#0286FF",
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          opacity: disabled ? 0.7 : 1,
        },
        buttonStyle,
      ]}
    >
      <Text
        style={[
          {
            color: disabled ? "#A0AEC0" : "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold",
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
