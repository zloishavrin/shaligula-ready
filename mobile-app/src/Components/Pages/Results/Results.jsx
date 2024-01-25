import { ScrollView, Text, View } from "react-native"
import { styles } from "./Results.style";
import { CloseButton } from "../../Utils/CloseButton/CloseButton";

export const Results = ({ results, closeResults }) => {

    return (
        <View style={styles.container}>
            <CloseButton 
                handler={closeResults}
            />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.answerContainer}>
                        <Text style={styles.testTitle}>{results.name}</Text>

                        {results.answer.map((element, index) => {
                            return (
                                <View style={styles.answer} key={index} >
                                    <Text style={styles.testTextTitle}>Вопрос {index+1}. {element.quest}</Text>
                                    <Text style={styles.testText}>Ваш ответ:</Text>
                                    <Text style={element.result ? styles.testTrueText : styles.testFalseText}>{element.yourAnswer}</Text>
                                    <Text style={styles.testText}>Правильный ответ:</Text>
                                    <Text style={styles.testTrueText}>{element.trueAnswer}</Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>Результат:</Text>
                        <Text style={styles.resultText}>{results.true_answer}/{results.all_quest}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}