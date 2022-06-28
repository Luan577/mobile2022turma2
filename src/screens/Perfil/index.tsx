import React from "react";
import { Text, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp, CardSocialComp } from "../../components";
import styles from "./styles";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";
import { IUser } from "../../interfaces/User.interface";
export default function Perfil() {
  const { user, signOut } = useAuth();
  async function logout() {
    try {
        await signOut();
    } catch (error) {
        const err = error as AxiosError;
        const data = err.response?.data as IUser;
        let message = "";
        if (data.data) {
            for (const [key, value] of Object.entries(data.data)) {
                message = `${message} ${value}`;
            }
        }
        Alert.alert(`${data.message} ${message}`);
    }
}
  return (
    <>
      <Text style={styles.title}>{user?.name}</Text>
      <CardSocialComp>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <Text style={styles.link}>https://linkedin.com</Text>
        </>
      </CardSocialComp>
      <ButtonComp
        title="Alterar Senha"
        type="primary"
        onPress={() => console.log("Alterar Senha")}
      />
      <ButtonComp
        title="Sair"
        type="primary"
        onPress={() => logout()}
      />
      </>
  );
}