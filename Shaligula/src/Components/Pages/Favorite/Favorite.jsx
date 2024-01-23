import { ScrollView, TextInput } from "react-native";
import { styles } from "./Favorite.style";
import useGet from "../../../Hooks/Fetch/useGet";
import { Loader } from "../../Utils/Loader/Loader";
import { Error } from "../../Utils/Error/Error";
import { TestElement } from "../../Utils/TestElement/TestElement";
import { useFavorite } from "../../../Hooks/LocalStorage/useFavorite";
import { useEffect, useState } from "react";
import { usePost } from "../../../Hooks/Fetch/usePost";

export const Favorite = () => {

    const { favorite, deleteFavorite } = useFavorite();

    return (
        <ScrollView style={styles.container}>
            {favorite && favorite.map(element => {
                return <TestElement 
                            key={element._id}
                            isFavorite={true}
                            element={element}
                            favoriteHandler={deleteFavorite}
                        />
            })}
        </ScrollView>
    )

}