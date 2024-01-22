import { useState, useEffect } from "react"

function useGet(path) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                const response = await fetch(`https://dev.shaligula.ru/university-api${path}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setValue(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchResource();
    }, [path]);

    return [ loading, error, value ];

}

export default useGet;