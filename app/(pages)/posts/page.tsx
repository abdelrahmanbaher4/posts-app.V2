"use client";
import styles from "./styles.module.scss";
import Post from "@/app/components/post/post";
import { useLikes } from "@/app/providers";
import { postsService } from "@/app/services";
import { IPostInfo } from "@/app/types";
import { useEffect, useState } from "react";

const Posts = () => {
  const { storedLikes }: any = useLikes(); // custom hook so we don't import the context and useContext hook everywhere.
  const [page, setPage] = useState(1); // this's used to paginate the load of the posts
  const [showLoad, setShowLoad] = useState(true); // conditional rendering of the load button.
  const [data, setData]: [IPostInfo[], any] = useState([]); 

  useEffect(() => { // whenever the page changes, we re-get the posts and populate the date store.
    const [fetchedData, end] = getPosts(page);
    if (end) {
      setShowLoad(false);
    }
    setData(fetchedData);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage:number) => {
        return prevPage+1
    });
  };

  return (
    <div className="content">
      {data.map((post: IPostInfo) => (
        <Post key={post.postId} post={post} liked={storedLikes[post.postId]} />
      ))}

      {showLoad ? (
        <div className={styles.load} onClick={handleLoadMore}>
          Load More
        </div>
      ) : (
        <div className={styles.no_load}>No more posts to load</div>
      )}
    </div>
  );
};

export function getPosts(page: number) {
  const [posts, end] = postsService.getPosts(page);
  return [posts, end];
}

export default Posts;
