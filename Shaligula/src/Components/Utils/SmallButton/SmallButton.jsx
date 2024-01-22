import { TouchableHighlight, Image } from "react-native"
import { styles } from "./SmallButton.style"
const Like = require('../../../assets/like.png');

export const SmallButton = () => {

    return (
        <TouchableHighlight
            onPress={() => console.log(1)}
            activeOpacity={1}
            underlayColor={'#333333'}
            style={styles.container}
        >
            <Image 
                source={Like} 
                style={styles.image}
            />
        </TouchableHighlight>
    )

}