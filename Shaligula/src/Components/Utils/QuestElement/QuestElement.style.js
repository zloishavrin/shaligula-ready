import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        color: 'white',
        height: '100%',
        width: '90%'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20
    },
    variable: {
        flexDirection: 'row',
        marginTop: 15,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 10
    },
    button: {
        borderColor: '#FFFFFF',
        borderWidth: 2,
        width: 30,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeButton: {
        width: 20,
        height: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 6
    }
})