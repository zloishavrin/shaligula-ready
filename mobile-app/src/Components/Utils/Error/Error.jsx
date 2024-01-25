import { View, Text, Image } from "react-native";
import { styles } from "./Error.style";
const Logo = require("../../../assets/logo.png");

export const Error = ({ text }) => {

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )

}