import Head from 'next/head'
import Post from '../../components/Post'

export default function Code() {

  // { id, title, code, language, totalLikes, totalComments, createdAt}
  const post = {}

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Post
        post={post}
        className='px-6 my-3 mt-10'
        smallMaxWith={"max-w-2xl"}
        largeMaxWith={"max-w-7xl"}
        onComment={() => console.log("comment")}
        onLike={() => console.log("like")}
        onShare={() => console.log("share")}
      />
    </>
  )
}