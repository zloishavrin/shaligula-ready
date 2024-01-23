import { Image, Text, View } from "react-native"
import { BigButton } from "../Big Button/BigButton"
import { styles } from "./TestElement.style"
import { SmallButton } from "../SmallButton/SmallButton"

export const TestElement = ({ isFavorite, element, favoriteHandler }) => {

    return (
        <View style={styles.container}>
            <Image 
                source={{uri: `https://dev.shaligula.ru/university-image/${element.img_path}`}} 
                style={styles.image} 
            />
            <View style={styles.rightContainer}>
                <Text style={styles.text}>{element.name}</Text>
                <View style={styles.bottomContainer}>
                    <BigButton 
                        text={'Перейти'}
                    />
                    <SmallButton 
                        isActive={isFavorite}
                        handler={() => favoriteHandler(element)}
                    />
                </View>
            </View> 
        </View>
    )

}