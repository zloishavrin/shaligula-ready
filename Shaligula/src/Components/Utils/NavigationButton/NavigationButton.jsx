import { View, Image, Button, TouchableHighlight } from 'react-native';
import { styles } from './NavigationButton.style';
const HistoryIcon = require('../../../assets/history.png');
const SearchIcon = require('../../../assets/search.png');
const LikeIcon = require('../../../assets/like.png');

export const NavigationButton = ({ type, handler }) => {

    return (
        <TouchableHighlight 
            style={styles.button}
            onPress={handler}
            activeOpacity={1}
            underlayColor={'#333333'}
        >
            {
                type === "history" ?
                    <Image style={styles.image} source={HistoryIcon} />
                : type === "search" ?
                    <Image style={styles.image} source={SearchIcon} />
                : type === 'like' ?
                    <Image style={styles.image} source={LikeIcon} />
                :
                    <Image style={styles.image} source={CloseIcon} />
            }
        </TouchableHighlight>
    )

}