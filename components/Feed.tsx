'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { PostCard, ShowMore } from '@/components';
import { fetchPosts } from '@/utils';
import { PostProps } from '@/types';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [allPosts, setAllPosts] = useState(Object);
  const [loading, setLoading] = useState(false);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getPosts = async () => {
    setLoading(true);
    console.log("Hello");

    try{
      const result = await fetchPosts(searchText);

      setAllPosts(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    getPosts();
  }, [searchText]);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'> 
        <input
          type='text'
          placeholder='Search stories by title, url or author'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>


      {allPosts.hits?.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allPosts.hits?.map((post: PostProps) => (
                <PostCard post={post} />
              ))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src='/loader.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}

            <ShowMore 
              pageNumber={limit / 10}
              isNext={limit > allPosts.hits?.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              Loading waiting for posts
            </h2>
          </div>
        )}
    </section>
  )
}

export default Feed
