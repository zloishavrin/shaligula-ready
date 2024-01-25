import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#191919",
        color: "white",
        height: '100%',
        paddingBottom: '5%'
    },
    contentContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    resultContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40
    },
    resultText: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold"
    },
    answerContainer: {
        width: "90%"
    },
    answer: {
        marginTop: 30
    },
    testTitle: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    testTextTitle: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold"
    },  
    testText: {
        color: "#FFFFFF",
        fontSize: 20,
        marginTop: 10
    },
    testTrueText: {
        color: "#4FB400",
        fontSize: 20,
        marginTop: 10
    },
    testFalseText: {
        color: "#B40000",
        fontSize: 20,
        marginTop: 10
    }
})