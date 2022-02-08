import {useCallback, useState} from 'react';

const useFetch = () =>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    //furnção para fazer request

   const request = useCallback(async(url, options) => {
        let response;
        let json;
        try{
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            

           
        }catch(erro){
            json = null;
            setError('Error')
        }finally{
            setData(json);
            setLoading(false);

            return{response, json}
        }
    
    }, [])

    //objetos retornados para uso 
    return {data, error, loading, request}

}

export default useFetch;