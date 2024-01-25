import { TouchableHighlight, View } from "react-native"
import { styles } from "./SmallButton.style"
import { Svg, G, Path, Rect, ClipPath } from "react-native-svg"

export const SmallButton = ({ isActive, handler }) => {

    return (
        <TouchableHighlight
            onPress={handler}
            activeOpacity={1}
            underlayColor={"#333333"}
            style={isActive? styles.containerOn : styles.containerOff}
        >
            <View style={styles.image}>
                <Svg width="100%" height="100%" viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G clip-path="url(#clip0_1_10)">
                        <Path d="M36.5126 56.0241C35.4177 56.0241 34.4108 55.7178 33.5131 55.1137C28.5712 52.6512 15 43.3506 15 31.8224C15 23.9146 21.4353 17.4793 29.3431 17.4793C31.8812 17.4793 34.3353 18.1421 36.5126 19.4049C38.6899 18.1421 41.1482 17.4793 43.6821 17.4793C51.5899 17.4793 58.0252 23.9146 58.0252 31.8224C58.0252 43.3506 44.454 52.6554 39.5121 55.1137C38.6143 55.7178 37.6075 56.0241 36.5126 56.0241ZM29.3431 21.0661C23.4112 21.0661 18.5868 25.8905 18.5868 31.8224C18.5868 36.7391 21.9681 41.2698 24.804 44.2022C28.416 47.9359 32.6699 50.7131 35.2121 51.9548L35.468 52.11C36.1015 52.5631 36.9195 52.5631 37.553 52.11L37.8089 51.9548C40.3553 50.7089 44.6092 47.9359 48.217 44.2022C51.0529 41.2698 54.4341 36.7433 54.4341 31.8224C54.4341 25.8905 49.6098 21.0661 43.6779 21.0661C41.4712 21.0661 39.3485 21.7374 37.532 23.0001L36.5126 23.7175L35.4848 23.0001C33.6725 21.7332 31.5456 21.0661 29.3431 21.0661Z" fill="#A7A7A7"/>
                    </G>
                    <G>
                        <ClipPath id="clip0_1_10">
                            <Rect width="43" height="43" fill="white" />
                        </ClipPath>
                    </G>
                </Svg>
            </View>
        </TouchableHighlight>
    )

}