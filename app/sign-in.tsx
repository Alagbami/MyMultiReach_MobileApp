import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { login } from "@/lib/appwrite";
import { Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Auth = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Image
          source={images.onboardingOne}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          {/* Updated MyMultiReach Styling */}
          <Text className="text-4xl font-extrabold text-center mt-4">
            <Text
              style={{
                color: "#ff6f61", // Primary color for gradient effect
                textShadowColor: "rgba(0, 0, 0, 0.2)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 4,
              }}
            >
              My
            </Text>
            <Text
              style={{
                color: "#6a1b9a", // Secondary color for gradient effect
                textShadowColor: "rgba(0, 0, 0, 0.2)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 4,
              }}
            >
              Multi
            </Text>
            <Text
              style={{
                color: "#0288d1", // Tertiary color for gradient effect
                textShadowColor: "rgba(0, 0, 0, 0.2)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 4,
              }}
            >
              Reach
            </Text>
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-4">
            Seamlessly Locate Our Nearest {"\n"}
            <Text className="text-primary-300">
              Branches, Agents, & Offices
            </Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to MyMultiReach with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;
