import { View, Text, StyleSheet, Modal,TouchableOpacity,Pressable, } from "react-native"; // Mude para react-native
import * as Clipboard from 'expo-clipboard'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ModalPassword({password,handleClose}){

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        alert("Senha salva com sucesso!")
        handleClose();
    }

    return (
        <Modal
            transparent={true}
            animationType="fade"
        >
            <View style={styles.container}>
                <View style={styles.modalContent}>

                    <Text style={styles.title}>Senha Gerada</Text>
                    <Pressable style={styles.innerSenha} onLongPress={handleCopyPassword}>
                        <Text style={styles.text}>{password}</Text>
                    </Pressable>

                    <View style={styles.btnArea}>

                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button,styles.btnSalvar]}>
                    <Text style={styles.btnSalvarText}>Salvar</Text>
                    </TouchableOpacity>

                    </View>
                    
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: "#FFF",
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 10,
        width: "85%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 24,
        color:"#000"
    },
    innerSenha:{
        backgroundColor:"#0e0e0e",
        width:'90%',
        padding:14,
        borderRadius:8,
    },
    text:{
        color:"#FFF",
        textAlign:"center"
    },
    btnArea:{
        flexDirection:"row",
        width:'90%',
        marginTop:8,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    button:{
        flex:1,
        alignItems: 'center',
        marginTop:14,
        marginBottom:14,
    },
    btnSalvar:{
        backgroundColor:'blue',
        borderRadius:8,
    },
    btnSalvarText:{
        color:'#FFF',
        fontWeight:'bold',
        marginTop:14,
        marginBottom:14,
    },
   
});