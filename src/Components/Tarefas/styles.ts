import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainToDoList:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        marginTop:50,
        padding: 20,
    },
    progressoDeConlusao:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    info:{
       display:'flex',
       flexDirection:'row',
    },
    create:{
        color:'#4EA8DE',
        fontSize:14,
        fontWeight:'700',
    },
    count:{
        color:'#D9D9D9',
        fontSize:12,
        fontWeight:'700',
        backgroundColor:'#333333',
        borderRadius:10,
        paddingTop:1,
        paddingRight:5,
        paddingBottom:1,
        paddingLeft:5,
        marginLeft:5

    },
    conclude:{
        color:'#8284FA',
        fontSize:14,
        fontWeight:'700'
    },
    semTarefas:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:64,
    },
    clip:{
       marginBottom:30
    },
    empty:{
        color:'#808080',
        margin:5,
        fontWeight:'700',
        fontSize:14
    },
    conteudoTarefas:{
        marginTop:12
    }
});