import { View, Text, StyleSheet, Modal,TouchableOpacity,Pressable, } from "react-native";

export default function Passwords(){
    return(
        <View style={styles.container}>
            <Text>Minhas Senhas</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});