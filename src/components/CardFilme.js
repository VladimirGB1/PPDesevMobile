import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl = "https://api.otaviolube.com"

export default function CardFilme({ filme }){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: baseUrl + filme.poster.data.attributes.url}}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>Sinopse: {filme.sinopse}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8D3B6',
        margin: 15,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        borderRadius: '5px'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    sinopse: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 10
        
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#c9080b',
        alignItems: 'center',
        justifyContent: 'center'

    },
    btnText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#E8D3B6'
    }
})