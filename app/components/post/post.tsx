import styles from "./styles.module.scss";
import { HeartIcon } from "../../assets/icons";
import { IPostInfo } from "@/app/types";
import Like from "./like";

const Post = ({ post, liked }: { post: IPostInfo, liked: boolean }) => {
 
  return (
    <article className={styles.post_container}>
      <header className={styles.creator}>
        <img src={post.profileImg} /> 
        <span className={styles.user}> {post.authorName}</span>
      </header>

      <main className={styles.post}>
        <div className={styles.poster}>
          <img src={post.postImg} alt="image" />
          <div className={styles.poster_content}>
            <div className={styles.titles}>
              <div className={styles.name}>{post.productName}</div>
              <div className={styles.price}>{post.price}</div>
            </div>
            <div className={styles.like}>
              <Like post={post} liked={liked}/>
            </div>
          </div>
        </div>
        <footer className={styles.info}>
          <div className={styles.likes}>
            <HeartIcon fill="#4A5BDD" width={1} />
            {post.likesCount + (liked ? 1 : 0)} likes
          </div>
          <div className={styles.details}>
            <div className={styles.description}>{post.postDescription}</div>
            <div className={styles.tags}>#iphone #cases #mobile #mac</div>
          </div>
          <div className={styles.view_comments}>View 12 comments</div>
        </footer>
      </main>
      <hr className="line" />
    </article>
  );
};

export default Post;
