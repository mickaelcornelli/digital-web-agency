import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://digital-web-agency.vercel.app/api/blog/", { next: { revalidate: 3600 } });
  //const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();
  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post,index) => (
        <div className={styles.post} key={index}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
