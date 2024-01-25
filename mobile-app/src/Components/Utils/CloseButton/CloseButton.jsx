import { Path, Svg } from "react-native-svg";
import { styles } from "./CloseButton.style";
import { View, TouchableHighlight } from "react-native";

export const CloseButton = ({ handler }) => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={1}
                underlayColor={"#333333"}
                onPress={handler}
            >
                <View style={styles.buttonImage}>
                    <Svg width="74" height="73" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M25.5858 35.5858C24.8047 36.3668 24.8047 37.6332 25.5858 38.4142L38.3137 51.1421C39.0948 51.9232 40.3611 51.9232 41.1421 51.1421C41.9232 50.3611 41.9232 49.0948 41.1421 48.3137L29.8284 37L41.1421 25.6863C41.9232 24.9052 41.9232 23.6389 41.1421 22.8579C40.3611 22.0768 39.0948 22.0768 38.3137 22.8579L25.5858 35.5858ZM27.5 35H27V39H27.5V35Z" fill="#A7A7A7"/>
                    </Svg>
                </View>
            </TouchableHighlight>
        </View>
    )

}