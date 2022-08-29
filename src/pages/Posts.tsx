import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { IPosts } from '../components/Posts/IPosts';
import SearchUser from '../components/Search/Search';
import { useSearch } from '../hooks/useSearch';
import httpsPosts from '../https/httpsPosts';

const Posts = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [search, setSearch] = useState('');
  const searchedPost = useSearch(posts, search, 'title');

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const getNewPosts = await httpsPosts.get('');
      setPosts(getNewPosts.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  let key = 0;

  return (
    <>
      <SearchUser setSearch={setSearch} name={'Title'} />
      {posts.length ? (
        searchedPost.map((post) => {
          return (
            <div className='card mb-3' key={key++}>
              <h4 className='card-header'>{post.title}</h4>
              <div className='card-body'>
                <h5 className='card-title'>Author: {post.author}</h5>
                <h5 className='card-title'>Genre: {post.genre}</h5>
                <p className='card-text'>{post.content}</p>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Posts;
