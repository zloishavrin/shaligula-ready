import { TouchableHighlight, Image } from "react-native"
import { styles } from "./SmallButton.style"
const Like = require('../../../assets/like.png');

export const SmallButton = ({ isActive, handler }) => {

    return (
        <TouchableHighlight
            onPress={handler}
            activeOpacity={1}
            underlayColor={'#333333'}
            style={isActive? styles.containerOn : styles.containerOff}
        >
            <Image 
                source={Like} 
                style={styles.image}
            />
        </TouchableHighlight>
    )

}