import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export const useFavorite = () => {

    const [favorite, setFavorite] = useState(null);

    useEffect(() => {
        const getStore = async () => {
            try {
                const favoriteStorage = await AsyncStorage.getItem("favorite");
                if(favoriteStorage === null) {
                    setFavorite([]);
                }
                else {
                    setFavorite(JSON.parse(favoriteStorage));
                }
            } 
            catch (e) {
                console.error(e);
            }
        };
        getStore();
    }, []);

    useEffect(() => {
        const changeStore = async (value) => {
            try {
                const valueJSON = JSON.stringify(value);
                await AsyncStorage.setItem("favorite", valueJSON);
            }
            catch(error) {
                console.error(error);
            }
        }
        changeStore(favorite);
    }, [favorite]);

    const addFavorite = (element) => {
        if(favorite && !favorite.includes(element)) {
            const newFavorite = [element, ...favorite];
            setFavorite(newFavorite);
        }
        else if(favorite === null) {
            setFavorite([element]);
        }
    }

    const deleteFavorite = (element) => {
        if(favorite && favorite.some(object => 
            object._id === element._id
        )) {
            if(favorite.length > 1) {
                const newFavorite = favorite.filter(item => item._id !== element._id);
                setFavorite(newFavorite);
            }
            else {
                setFavorite([]);
            }
        }
    }

    return { favorite, addFavorite, deleteFavorite };

}