import React from "react";
import { Text, View, Image } from "react-native";
import { IMensagemState, IMensagem } from "../../interfaces/Mensagem.interface";
import styles from "./styles";
import { format } from "date-fns";

export default function Card({ data }: IMensagemState) {
  return (
    <View style={styles.cardOrange}>
      <Text>
        {data.user.name} - {""}
        {format(new Date(data.created_at), "dd/MM/yyyy HH:mm:ss")}
      </Text>
      <View style={styles.msg}>
        <Text>Título: {data.titulo}</Text>
        <Text>Mensagem: {data.mensagem}</Text>
        <Image source={{ uri: data.imagem }} style={styles.img} />
        <View style={styles.topico}>
          {data.topico.map((i) => (
            <View key={i.id} style={styles.topico}>
              <Text>{i.item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}