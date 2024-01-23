import { useEffect, useState } from "react"

export const usePost = (path, body) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                fetch("https://dev.shaligula.ru/university-api/tests", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body),
                    redirect: 'follow'
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setValue(result);
                    setLoading(false);
                })
                .catch(error => {
                    throw new Error(`Error: ${error}`);
                });
            } 
            catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        if(body) fetchResource();
    }, []);

    return [ loading, error, value ];

}