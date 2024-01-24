import { View, Text } from "react-native"
import { styles } from "./HistoryElement.style"
import { BigButton } from "../BigButton/BigButton"

export const HistoryElement = ({ element, openResults }) => {

    console.log(element);

    return (
        <View style={styles.element}>
            <Text style={styles.mainText}>{element.name}</Text>
            <Text style={styles.secondText}>{element.date}</Text>
            <View style={styles.resultContain}>
                <Text style={styles.mainText}>Результат:</Text>
                <Text style={styles.mainText}>{element.true_answer}/{element.all_quest}</Text>
            </View>
            <View style={styles.buttonContain}>
                <BigButton 
                    text={'Смотреть'} 
                    handler={openResults}
                />
            </View>
        </View>
    )

}