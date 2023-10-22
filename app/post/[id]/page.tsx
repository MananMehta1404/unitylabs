"use client"

import { CommentProps, PostProps } from '@/types';
import { fetchPostDetails } from '@/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const PostDetails = ({ params }: { params: { id: string } }) => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(Object);

    const getPosts = async () => {
        setLoading(true);
    
        try{
          const result = await fetchPostDetails(params.id);
          console.log(result);
    
          setPost(result);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, [params.id]);

    const [title, url, author, num_comments, points] = [post.title, post.url, post.author, post.num_comments, post.points];

    // Create an array of type postprops
    const children: CommentProps[] = post.children;

    return (
        <div className='flex flex-col w-full'>
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
          <div className='font-bold'>
            {title}
          </div>
          <div className='font-bold'>
            {author}
          </div>
          <div>
            {children?.map((child: CommentProps) => (
              <div key={child.id} className='w-full rounded-lg bg-white shadow-md mt-5 p-3'>
                <div className='font-bold'>{child.author}</div>
                <div>
                  {child.text}
                </div>
              </div>
            ))}

          </div>
        </div>
    )
}

export default PostDetails