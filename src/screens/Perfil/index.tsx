import React from "react";
import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Text>Luan Dantass</Text>
        <CardSocial>
          <>
            <FontAwesome5 name="facebook" />
            <TextInput placeholder="https://facebook.com" />
          </>
        </CardSocial>
        <CardSocial>
          <>
            <FontAwesome5 name="instagram" />
            <TextInput placeholder="https://instagram.com" />
          </>
        </CardSocial>
        <CardSocial>
          <>
            <FontAwesome5 name="linkedin" />
            <TextInput placeholder="https://linkedin.com" />
          </>
        </CardSocial>
        <Button
          title="Salvar"
          type="third"
          onPress={() => console.log("Salvar")}
        />
        <Button
          title="Alterar Senha"
          type="third"
          onPress={() => console.log("Alterar Senha")}
        />
        <Button title="Sair" type="third" onPress={() => console.log("Sair")} />
    </View>
  );
}