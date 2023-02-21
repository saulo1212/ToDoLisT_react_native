import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        position: 'relative',
        height: 200,
        backgroundColor: '#0D0D0D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 112,
        height: 48
    },
    barraDeFerramenta: {
        height: 48,
        display: 'flex',
        flexDirection:'row',
        position: 'absolute',
        width: '90%',
        flex:1,
        marginTop: 90,
    },

    input: {
        flex:1,
        backgroundColor: "#262626",
        height: 54,
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
        marginTop: 90,
        fontWeight: '400',
        marginRight:5,
        color:'#fff',
    },
    button: {
        marginTop: 90,
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
})