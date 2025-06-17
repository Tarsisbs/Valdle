import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    viewPrincipalFilmes:{
        display:'flex',
        gap:'20px',
        flexDirection:'row',
        marginLeft:'-93px',
        marginBottom:'20px'
    },

    viewFilmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#0f1923',
        padding:'35px',
        borderRadius:'10px',
        marginBottom: '40px',
        marginRight: '20px',
        width:'280px',
        height:'510px'
    },

    titulo:{
        marginTop: -40,
        fontWeight: 1000,
        color: 'black',
        backgroundColor: 'white',
        width: 280,
        height: 510,
        textAlign: 'left',
        fontSize: 40,
        paddingTop:8,
        marginBottom:20
    },
    textNota:{
        fontSize:19,
        color: '#FFCC33',
        paddingLeft:4
    },
    images:{
        marginTop: -30,
        width: 270,
        height: 480,
    }
})

export default styles