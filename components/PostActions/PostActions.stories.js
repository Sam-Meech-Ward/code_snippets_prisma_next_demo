import PostActions from './index'

export default {
  title: 'PostActions',
  component: PostActions, 
  argTypes: {
    onComment: { action: 'comment' },
    onLike: { action: 'like' },
  }
}


export const Primary = (args) => <PostActions
totalComments={10}
totalLikes={10}
className='max-w-2xl mx-auto'
{...args} 
/>
export const Liked = (args) => <PostActions
totalComments={10}
totalLikes={10}
liked={true}
className='max-w-2xl mx-auto'
{...args} 
/>
