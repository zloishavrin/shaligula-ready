import { Image, TouchableHighlight } from "react-native";
import { styles } from "./NavigationButton.style";
const HistoryIcon = require("../../../assets/history.png");
const SearchIcon = require("../../../assets/search.png");
const LikeIcon = require("../../../assets/like.png");
const HistoryActiveIcon = require("../../../assets/historyActive.png");
const SearchActiveIcon = require("../../../assets/searchActive.png");
const LikeActiveIcon = require("../../../assets/likeActive.png");
const CloseIcon = require("../../../assets/close.png");

export const NavigationButton = ({ type, handler }) => {

    return (
        <TouchableHighlight 
            style={styles.button}
            onPress={handler}
            activeOpacity={1}
            underlayColor={"#333333"}
        >
            {
                type === "history" ?
                    <Image style={styles.image} source={HistoryIcon} />
                    : type === "search" ?
                        <Image style={styles.image} source={SearchIcon} />
                        : type === "like" ?
                            <Image style={styles.image} source={LikeIcon} />
                            : type === "historyActive" ?
                                <Image style={styles.image} source={HistoryActiveIcon} />
                                : type === "searchActive" ?
                                    <Image style={styles.image} source={SearchActiveIcon} />
                                    : type === "likeActive" ?
                                        <Image style={styles.image} source={LikeActiveIcon} />
                                        : 
                                        <Image style={styles.image} source={CloseIcon} />
            }
        </TouchableHighlight>
    )

}