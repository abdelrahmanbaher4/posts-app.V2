"use client";
import { Context, createContext, useContext, useEffect, useState } from "react";

interface IProviderProps {
  children: React.ReactNode;
}

export type Tlike=  {
  [postId:string]:boolean
}
export interface ILikesContext {
  storedLikes:Tlike ;
  setStoredLikes: any;
}

export const LikesContext: Context<ILikesContext> = createContext({storedLikes: {},setStoredLikes: () => {},});

export default function LikesContextProvider({ children }: IProviderProps) {
  
  const [storedLikes, setStoredLikes] = useState<Tlike>({}); 
  useEffect(()=>{
    let likes = JSON.parse(localStorage.getItem("likes") || "{}"); 
    setStoredLikes(likes);
  },[])

  return (    
      <LikesContext.Provider value={{ storedLikes, setStoredLikes }}>
        {children}
      </LikesContext.Provider>
  );
}

export function useLikes():ILikesContext{ // custom hook to not to decalare use context every where
  return useContext(LikesContext);
} 
