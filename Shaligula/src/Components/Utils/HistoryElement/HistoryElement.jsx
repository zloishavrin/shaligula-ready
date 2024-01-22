import { View, Text } from "react-native"
import { styles } from "./HistoryElement.style"
import { BigButton } from "../Big Button/BigButton"

export const HistoryElement = () => {

    return (
        <View style={styles.element}>
            <Text style={styles.mainText}>Frontend - ReactJS</Text>
            <Text style={styles.secondText}>16 января 2024</Text>
            <View style={styles.resultContain}>
                <Text style={styles.mainText}>Результат:</Text>
                <Text style={styles.mainText}>18/20</Text>
            </View>
            <View style={styles.buttonContain}>
                <BigButton text={'Смотреть'} />
            </View>
        </View>
    )

}