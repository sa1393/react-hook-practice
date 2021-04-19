import React, { useEffect, useRef, useState } from 'react';
import defaultAxios from 'axios';

//axiosClient 요청
const useAxios = (opts, axiosInstance = defaultAxios)=>{
    const [state, setState] = useState({
        loading:true,
        error:null,
        data:null,
    });
    
    const [trigger, setTrigger] = useState(0);

    useEffect(()=>{
        axiosInstance(opts)
        .then(res=>{
            setState({...state, loading:false})
        })
        .catch(error =>{
            setState({...state, error})
        })
    }, [trigger]);

    const refetch = ()=> {
        setState({
            ...state,
            loading:true
        });
        setTrigger(Date.now());
    }

    if(!opts.url){
        return null;
    }

    return {...state, refetch};
};

const UseAxiosApp = ()=>{
    const {loading, error, data, refetch} = useAxios({url : "yts.am/api/v2/list_movies.json"});
  
    return (
      <div className="App">
          <h1>{data && data.status}</h1>
          <h2>{loading ? "loading" : ""}</h2>
          <button onClick={refetch}>reFetch</button>
      </div>
    );
}

export default UseAxiosApp;