"use client";
import Post from "@/app/components/post/post";
import { useLikes } from "@/app/providers";
import { postsService } from "@/app/services";

const Favorites = () => {

  let { storedLikes } = useLikes();
  console.log(storedLikes);
  
  const getPost = (likedPostId: string) => {
    const post = postsService.getPost(likedPostId);
    return <Post key={post.postId} post={post} liked={true} />;
  };
  return (
    <div className="content">
      <h2>Your Favorite List: </h2>
      <br/>
      <br/>
      {Object.keys(storedLikes).map((likedPostId) => getPost(likedPostId))}
    </div>
  );
};

export default Favorites;
