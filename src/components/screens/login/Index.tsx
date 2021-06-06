import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as LocalAuthentication from "expo-local-authentication";

import { styles } from "./styles";
import { LoginFormData, LoginSchema } from "../../../constant";
import { globalStyles } from "../../../styles/globalStyles";
import { hp } from "../../../utils";
import { LoadingIndicator } from "../../LoadingIndicator";
import { useAuthProvider } from "../../../hooks/useAuthProvider";

type Props = {};

export const LoginView = ({}: Props) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(LoginSchema) });
  const { dispatch } = useAuthProvider();

  const onSubmit = (data: LoginFormData) => {
    const { email, password } = data;
    if (email === "ademola@gmail.com" && password === "ademola10") {
      dispatch({
        type: "SET_USER",
        payload: "Ademola",
      });
    } else {
      Alert.alert("Login failed", "Invalid credential provided", [
        { text: "OK", onPress: () => {} },
      ]);
    }
  };

  const handleBiometricAuth = async () => {
    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
      Alert.alert("Biometric", "No Biometrics Found", [
        { text: "OK", onPress: () => {} },
      ]);
      return;
    } else {
      await LocalAuthentication.authenticateAsync({
        promptMessage: "Login with Biometrics",
        disableDeviceFallback: true,
        // promptMessage?: string;
        cancelLabel: "Cancel",
        // disableDeviceFallback?: boolean;
        fallbackLabel: "string",
      })
        .then((biometricAuth) => {
          if (biometricAuth.success) {
            dispatch({
              type: "SET_USER",
              payload: "Ademola",
            });
            return biometricAuth;
          } else {
            Alert.alert(
              "Biometric/ FaceId",
              "You cannot use Biometric/ FaceId to sign in! Kindly use the form provided",
              [{ text: "OK", onPress: () => {} }]
            );
          }
        })
        .catch((err) => {
          console.log(err);
          Alert.alert(
            "Alert Title",
            "You cannot use Biometric/ FaceId to sign in! Kindly use the form provided",
            [{ text: "OK", onPress: () => {} }]
          );
        });
    }
  };

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
    Alert.alert(
      "Login credential",
      `Kindly login with the below credential!${"\n"}email: ademola@gmail.com ${"\n"}password: ademola10`,
      [{ text: "OK", onPress: () => {} }]
    );
  }, []);

  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.wrapper}>
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <Text style={styles.title1}>Let's sign you in.</Text>
              <Text style={styles.title2}>Welcome back 😃</Text>
            </View>
            <View style={styles.forms}>
              <View style={styles.inputContainer}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Email"
                      keyboardType="email-address"
                    />
                  )}
                  name="email"
                  defaultValue=""
                />
                {errors.email && (
                  <Text style={styles.error}>{errors.email.message || ""}</Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Passsword"
                      secureTextEntry={secureEntry}
                    />
                  )}
                  name="password"
                  defaultValue=""
                />
                {errors.password && (
                  <Text style={styles.error}>
                    {errors.password.message || ""}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleBiometricAuth}
              >
                <Text style={styles.biometric}>Login with Biometric</Text>
              </TouchableOpacity>
              <View style={styles.footer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPress={handleSubmit(onSubmit)}
                >
                  <View style={globalStyles.rowStart}>
                    <Text style={styles.btnText}>Login</Text>
                    {submitting && <LoadingIndicator />}
                  </View>
                </TouchableOpacity>
                <View
                  style={[globalStyles.rowCenter, { marginVertical: hp(20) }]}
                >
                  <View>
                    <Text style={styles.acoountMessage}>
                      Don't have an account?
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "800" }}>Register</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
