import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./QuestElement.style"

export const QuestElement = ({ element, number, quest, changeQuest }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{element.text}</Text>
            {element.variable.map((element, index) => {
                return (
                    <View
                        style={styles.variable} 
                        key={index}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => changeQuest(number, index)}
                        >
                            {quest === index ? <View style={styles.activeButton}></View> : null}
                        </TouchableOpacity>
                        <Text style={styles.text}>{element}</Text>
                    </View>
                )
            })}
        </View>
    )

}