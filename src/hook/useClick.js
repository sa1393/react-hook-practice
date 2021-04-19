import React, { useEffect, useRef, useState } from 'react';


const useClick = (onClick)=>{
    const elemet = useRef();
    useEffect(()=>{
        if(elemet.current){
            elemet.current.addEventListener("click", onClick);
            console.log("추가됨");
        }

        return ()=>{
            if(elemet.current){
                elemet.current.removeEventListener("click", onClick);

            }
        }
    }, []);

    return elemet;
}

const UseClickApp = ()=>{
    const sayHello = ()=> console.log("say hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <div ref={title}>Hi</div>
        </div>
      );
}

export default UseClickApp;


