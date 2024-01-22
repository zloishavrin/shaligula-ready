import { ScrollView, Text, TextInput } from "react-native";
import { styles } from "./Search.style";
import useGet from "../../../Hooks/Fetch/useGet";
import { Loader } from "../../Utils/Loader/Loader";
import { Error } from "../../Utils/Error/Error";
import { TestElement } from "../../Utils/TestElement/TestElement";
import { useFavorite } from "../../../Hooks/LocalStorage/useFavorite";
import { useEffect } from "react";

export const Search = () => {

    const [ loading, error, value ] = useGet('/all-test');
    const fav = useFavorite();

    useEffect(() => {
        console.log(fav);
    }, [fav]);

    if(loading) return <Loader />
    else if(error) return <Error />;

    return (
        <ScrollView style={styles.container}>

            <TextInput />

            {value.map((element) => 
                <TestElement
                    title={element.name}
                />
            )}
        </ScrollView>
    )

}