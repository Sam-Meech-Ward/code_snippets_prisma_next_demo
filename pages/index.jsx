import { prisma } from '../server/db/client'

import PostSmall from '../components/PostSmall'
import Button from '../components/Button'

import { useRouter } from "next/router"

export default function Home({ posts }) {

  const router = useRouter()

  return (
    <>
      <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 mx-auto max-w-7xl px-2">

        <div className='max-w-2xl mx-auto'>

          <Button onClick={() => router.push("/addPost")}>
            Create A Snippet
          </Button>

          <ul className='mt-8'>
            {posts?.map(post => (
              <li key={post.id}>
                <PostSmall
                  post={post}
                  user={post.user}
                  href={`/code/${post.id}`}
                  className='my-10'
                  onLike={() => console.log("like post", post.id)}
                  onComment={() => console.log("comment post", post.id)}
                  onShare={() => console.log("share post", post.id)}
                />
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      user: true,
    }
  })

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  }
}