import { styles } from "./CloseButton.style";
const CloseIcon = require("../../../assets/close.png");
import { View, TouchableHighlight, Image } from "react-native";

export const CloseButton = ({ handler }) => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={1}
                underlayColor={"#333333"}
                onPress={handler}
            >
                <Image 
                    style={styles.buttonImage}
                    source={CloseIcon} 
                />
            </TouchableHighlight>
        </View>
    )

}