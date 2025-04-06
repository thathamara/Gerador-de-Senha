import AsyncStorage from "@react-native-async-storage/async-storage";

const  useStorage = () => {
 //Buscar os itens salvos

 const getItem=async(key)=>{
 try{
     const passwords=await AsyncStorage.getItem(key);
     return JSON.parse(passwords) || []
     }
catch(error){
        console.log('error ao buscar',error)
        return [];
    }
 }

 const saveItem=async(key,value)=>{
    try {
    let passwords=await getItem(key); //pega  as senhas que ja gerou/existem

    passwords.push(value) //colocando item a mais

    await AsyncStorage.setItem(key,JSON.stringify(passwords)); //salvar no async

    } catch (error) {
        console.log('erro ao salvar',error)
    }
 }

 const removeItem=async(key,item)=>{
     try {
        let passwords=await getItem(key);
        let myPasswords=passwords.filter((password)=>{
            return (password !== item)
        })//exclui apenas o item q vc selecionou

        await AsyncStorage.setItem(key,JSON.stringify(myPasswords))
        return myPasswords; //retorna todos os outros diferentes do selecionado !==

     } catch (error) {
        console.log('erro ao excluir',error)
     }
 }

return {
    getItem,
    saveItem,
    removeItem,
}

}





export default useStorage;