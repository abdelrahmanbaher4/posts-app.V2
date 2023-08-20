"use client"
import { HeartIcon } from "@/app/assets/icons"
import { IPostInfo } from "@/app/types";
import {useState} from "react";
import { useLikes } from "@/app/providers";
import { ILikesContext, Tlike } from "@/app/providers/LikesProvider";

type TlikeProps = {
    post:IPostInfo
    liked:boolean
}
const Like = ({post, liked}:TlikeProps )=>{

    const [isClicked, setIsClicked] = useState(liked ? true : false);
    const { storedLikes, setStoredLikes }: ILikesContext = useLikes();

    const likeChanged = (postId: number, status: boolean) => {
      setStoredLikes( (prevState:Tlike)=>{
        const tmp = {...prevState};
        if (!status) delete tmp[postId];
        else tmp[postId] = true;
        localStorage.setItem("likes", JSON.stringify(tmp));
        return tmp;
      });
      };
    const handleClick = () => {
      likeChanged(post.postId, !isClicked);
      setIsClicked(prev => !prev);
    };
  
    return (
        <HeartIcon
                fill={isClicked ? "#ff0000" : "#3D3C3A"}
                width={1.5}
                onClick={handleClick}
        />
    )
}
export default Like;