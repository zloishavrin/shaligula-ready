import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#191919",
        color: "white",
        height: "100%",
        width: "100%",
    },
    contentContainer: {
        height: "100%"
    },
    buttonContainer: {
        width: "100%",
        alignItems: "flex-start"
    },
    button: {
        borderRadius: 100,
        width: 70,
        height: 70
    },
    buttonImage: {
        width: "100%",
        height: "100%"
    },
    resultsContainter: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: '40%'
    },
    resultsTitle: {
        color: "#FFFFFF",
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 40
    },
    resultsText: {
        color: "#FFFFFF",
        fontSize: 26
    }
})