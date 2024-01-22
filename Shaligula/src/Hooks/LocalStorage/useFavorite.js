import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export const useFavorite = () => {

    const [favorite, setFavorite] = useState(null);

    useEffect(() => {
        console.log(1);
        const storeData = async (value) => {
            try {
                console.log(2);
                const jsonValue = JSON.stringify(value);
                console.log(1);
                await AsyncStorage.setItem('my-key', jsonValue);
                const logs = await AsyncStorage.getItem('my-key');
                console.log(logs);
                setFavorite(logs);
            } catch (e) {
                console.log(e);
            }

            
        };
        storeData({aue: 'eu333r'});

    }, []);

    return favorite;

}