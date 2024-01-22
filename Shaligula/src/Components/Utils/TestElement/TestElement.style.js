import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
        color: '',
        height: '100%',
        width: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
        alignItems: 'center'
    },
    rightContainer: {
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    bottomContainer: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'right'
    },
    image: {
        width: 65,
        height: 65
    }
})