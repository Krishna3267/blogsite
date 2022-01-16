import { useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

    const abortCont = new AbortController(); //optional abort fetch, mount unmount thing

        fetch(url, {signal : abortCont.signal }).then(
            resp => {
                // console.log(resp);
                if(!resp.ok){
                    throw Error('Could not fetch the data.');
                }
                return resp.json();
            }
        ).then(data => {
            // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(error => {
            if(error.name === 'AbortError'){
                console.log('fetch aborted');
            } else{
            // console.log(error.message);
            setError(error.message);
            setIsPending(false);
            }
        })
        
        return () => abortCont.abort();  //optional : cleanup funtion
         
    }, [url]);

    return {data, isPending, error};
}
 
export default useFetch;