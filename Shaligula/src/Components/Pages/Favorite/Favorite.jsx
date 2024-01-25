import { ScrollView, TextInput } from "react-native";
import { styles } from "./Favorite.style";
import { Error } from "../../Utils/Error/Error";
import { TestElement } from "../../Utils/TestElement/TestElement";
import { useFavorite } from "../../../Hooks/LocalStorage/useFavorite";

export const Favorite = ({openTest}) => {

    const { favorite, deleteFavorite } = useFavorite();

    if(favorite && !favorite.length) return <Error text={"Пока что у Вас нет избранных тестов :("} />

    return (
        <ScrollView style={styles.container}>
            {favorite && favorite.map(element => {
                return <TestElement 
                            key={element._id}
                            isFavorite={true}
                            element={element}
                            favoriteHandler={deleteFavorite}
                            openTest={openTest}
                        />
            })}
        </ScrollView>
    )

}