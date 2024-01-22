import { Image, Text, View } from "react-native"
import { BigButton } from "../Big Button/BigButton"
import { styles } from "./TestElement.style"
import { SmallButton } from "../SmallButton/SmallButton"

export const TestElement = ({ title }) => {

    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'}} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.bottomContainer}>
                    <BigButton text={'Перейти'}/>
                    <SmallButton />
                </View>
            </View> 
        </View>
    )

}