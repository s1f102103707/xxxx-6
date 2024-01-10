import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const posts = await apiClient.api.public.posts.$get().catch(returnNull);

    if (posts !== null) setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id} className={styles.post}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
