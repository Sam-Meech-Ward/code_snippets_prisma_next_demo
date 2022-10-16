import Post from './index'

export default {
  title: 'Post',
  component: Post, 
  argTypes: {
    onSubmit: { action: 'submit' },
  }
}

const code = `
some js code to do something:
\`\`\`js
const a = 1
const b = 2
const c = a + b
\`\`\`
`


export const Primary = (args) => <Post 
className='max-w-2xl mx-auto' 
href="#"
post={{
  title: "My first post",
  code: code,
  totalComments: 10,
  totalLikes: 10,
}} 
user={{
  name: "John Doe",
  image: "https://www.placecage.com/gif/284/196"
}}
{...args} 
/>


export const liked = (args) => <Post 
className='max-w-2xl mx-auto' 
href="#"
post={{
  title: "My first post",
  code: code,
  totalComments: 10,
  totalLikes: 10,
}} 
liked={true}
user={{
  name: "John Doe",
  image: "https://www.placecage.com/gif/284/196"
}}
{...args} 
/>
