import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222222",
        width: "100%",
        flex: 1,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center",
        marginTop: 20
    },
    rightContainer: {
        width: "60%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    bottomContainer: {
        flexDirection: "row",
        marginTop: 20,
        width: 200,
        justifyContent: "flex-end"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "right",
        maxWidth: "100%"
    },
    image: {
        width: 65,
        height: 65
    }
})