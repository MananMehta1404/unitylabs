import { PostProps } from '@/types'
import React from 'react'

interface PostCardProps {
  post: PostProps
}

const PostCard = ({ post }: PostCardProps) => {
  const { author, num_comments, points, url, title, story_id } = post;
  return (
    <div>
      {title}
    </div>
  )
}

export default PostCard
