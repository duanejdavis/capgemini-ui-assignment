import { useState, useEffect } from "react";

export const useFetch = (apiFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async ( ) => {
            try {
                setLoading(true);
                setError(null);

                const response = await apiFunction();

                setData(response.data);
            } catch (error) {
                setError(error.message || "An error occured while fetching data");
                console.error('Fetch error: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, dependencies);

    return { data, error, loading };
};