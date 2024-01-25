import { styles } from "./BigButton.style"
import { TouchableHighlight, Text } from "react-native"

export const BigButton = ({ text, handler }) => {

    return (
        <TouchableHighlight 
            style={styles.button}
            onPress={handler}
            activeOpacity={1}
            underlayColor={'#333333'}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableHighlight>
    )

}