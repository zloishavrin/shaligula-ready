import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export const useResults = () => {

    const [results, setResults] = useState(null);

    useEffect(() => {
        const getStore = async () => {
            try {
                const resultsStorage = await AsyncStorage.getItem("results");
                if(resultsStorage === null) {
                    setResults([]);
                }
                else {
                    setResults(JSON.parse(resultsStorage));
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
                await AsyncStorage.setItem("results", valueJSON);
            }
            catch(error) {
                console.error(error);
            }
        }
        changeStore(results);
    }, [results]);

    const addResults = (element) => {
        if(results) {
            const newResults = [element, ...results];
            setResults(newResults);
        }
        else {
            setResults([element]);
        }
    }

    return { results, addResults };

}