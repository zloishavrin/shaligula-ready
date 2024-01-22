import { styles } from "./BigButton.style"
import { TouchableHighlight, Text } from "react-native"

export const BigButton = ({ text, handle }) => {

    return (
        <TouchableHighlight 
            style={styles.button}
            onPress={() => console.log(1)}
            activeOpacity={1}
            underlayColor={'#333333'}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableHighlight>
    )

}