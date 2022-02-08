import { useEffect, useState } from "react"

//hook criado para usar localstorage
 const useLocalStorage = (key, inicial) =>{
    const [state, setState] = useState(()=>{
        const local = window.localStorage.getItem(key);
        return local ? local : inicial;
    })


    useEffect(() =>{
        window.localStorage.setItem(key, state);
    },[state, key])

    return [state, setState]
}

export default useLocalStorage;