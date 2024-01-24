import { ScrollView, TextInput } from "react-native";
import { styles } from "./Search.style";
import useGet from "../../../Hooks/Fetch/useGet";
import { Loader } from "../../Utils/Loader/Loader";
import { Error } from "../../Utils/Error/Error";
import { TestElement } from "../../Utils/TestElement/TestElement";
import { useFavorite } from "../../../Hooks/LocalStorage/useFavorite";
import { useState } from "react";

export const Search = ({ openTest }) => {

    const [ search, setSearch ] = useState('');
    const [ loading, error, value ] = useGet(search ? `/search-test?search=${search}` : '/all-test');
    const { favorite, addFavorite, deleteFavorite } = useFavorite();

    if(loading) return <Loader />;
    else if(error) return <Error text={'Извините, произошла ошибка при загрузке.'}/>;

    return (
        <>
            <TextInput 
                editable
                inputMode="text"
                keyboardType="default"
                placeholder="Поиск..."
                style={styles.input}
                numberOfLines={1}
                value={search}
                onChangeText={(text) => setSearch(text)}
            />

            <ScrollView style={styles.container}>
                {value.map((element) => {
                    const isFavorite = favorite && favorite.some(object => 
                        object._id === element._id
                    );

                    return <TestElement
                        isFavorite={isFavorite}
                        element={element}
                        favoriteHandler={!isFavorite ? addFavorite : deleteFavorite}
                        key={element._id}
                        openTest={openTest}
                    />
                })}
            </ScrollView>
        </>
    )

}