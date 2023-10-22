'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { PostCard} from '@/components';
import { fetchPosts } from '@/utils';
import { PostProps } from '@/types';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [pageNo, setpageNo] = useState(0);
  const [nPages, setNPages] = useState(0);
  const [allPosts, setAllPosts] = useState(Object);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);

    try{
      const result = await fetchPosts(searchText, pageNo);

      setAllPosts(result);
      setpageNo(result.page);
      setNPages(result.nbPages);
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
  }, [searchText, pageNo]);

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
            <div className='home__cars-wrapper mb-10'>
              {allPosts.hits?.map((post: PostProps) => (
                <PostCard post={post} key={post.objectID} />
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
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
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
            </h2>
          </div>
        )}

      <div>
        <button onClick={() => setpageNo(pageNo - 1)} className='m-4 py-1 px-4 rounded-md bg-red-200'>Prev</button>
        {pageNo + 1} of {nPages}
        <button onClick={() => setpageNo(pageNo + 1)} className='m-4 py-1 px-4 rounded-md bg-red-200'>Next</button>
      </div>
    </section>
  )
}

export default Feed
