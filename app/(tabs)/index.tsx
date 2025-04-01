import { Image,Text,View, StyleSheet,TouchableOpacity,Modal, Platform } from 'react-native';


import Slider from '@react-native-community/slider'
import {useState} from 'react'
import {ModalPassword} from '../../components/modal.js'

let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%"

export default function HomeScreen() {
  const [size,setSize]=useState(10)//size e o valor inicial,setSize valor final "dinamico" e oq passa atraves da propriedade value e onchangeValue no componente qe eu quero,que tambem esta atrelado as propriedades max e min
  const [passwordValue,setPasswordValue]= useState("")
  const [modalVisible,setModalVisible]=useState(false)
  function geradorSenha(){

    let password ="";

    for(let i=0,n=charset.length; i<size; i++){
      password+= charset.charAt(Math.floor(Math.random()*n)) //floor:gera  numero inteiro,random:numero aleatorio
    }

    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>

      <Image 
      source={require("../../assets/images/logo.png")}
      style={styles.logo}
       />

       <Text style={styles.title}>{size} caracters</Text> 
       
       <View style={styles.area}>
        <Slider style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#ff0000' //cor da barrinha na frente
        minimumTrackTintColor='#000'  //cor da barrinha atras
        thumbTintColor='#392de9'//cor da bolinha do carregamento
        value={size}
        onValueChange={(value)=>setSize(Math.round(value))}
        />
       </View>

       <TouchableOpacity style={styles.button} onPress={geradorSenha}>
        <Text style={styles.buttonText}>Gerar senha</Text>
       </TouchableOpacity>

       <Modal visible={modalVisible} animationType='fade' transparent={true} >
        <ModalPassword password={passwordValue} handleClose={()=> setModalVisible(false)}/>
       </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F3F3FF',
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    marginBottom:60
  },
  title:{
    fontFamily:'Arial',
    fontSize:30,
    fontWeight:'bold',
  },
  area:{
     marginTop:14,
     marginBottom:14,
     width:'80%',
     backgroundColor:"#FFF",
     borderRadius:8,
     padding:6,
  },
  button:{
    backgroundColor:"#392de9",
    width:'80%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  buttonText:{
    color:'#fff',
    fontSize:20,
  }


});