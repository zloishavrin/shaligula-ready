import { useState } from "react"
import { View } from "react-native"
import { styles } from "./Multiform.style";
import { BigButton } from "../BigButton/BigButton";

export const Multiform = ({ children, closeTest }) => {

    const [numberOfPage, setNumberOfPage] = useState(0);

    return (
        <View style={styles.container}>
            {children[numberOfPage]}
            <View style={styles.buttonContainer}>
                {numberOfPage > 0 && <BigButton text={"Назад"} handler={() => setNumberOfPage(numberOfPage-1)} />}
                {numberOfPage < children.length-1 ? 
                    <BigButton 
                        text={"Далее"} 
                        handler={() => setNumberOfPage(numberOfPage+1)}
                    />
                    : 
                    <BigButton 
                        text={"Закончить"} 
                        handler={closeTest} 
                    />
                }
            </View>
        </View>
    )

}