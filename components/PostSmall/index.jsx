import Link from "next/link"
import Image from "next/image"

import PostActions from "../PostActions"

import formatTimeAgo from "../../utils/formatTimeAgo"
import highlight from "../../utils/highlight"

export default function PostSmall({ onLike, onComment, onShare, href, post, user, className = "" }) {

  return (
    <div className={'lex flex-col overflow-hidden rounded-lg shadow-lg ' + className}>

      <div className="flex flex-1 flex-col justify-between p-6 pb-3">
        <Link
          href={href}
        >
            <div className="mt-2 flex items-center">
              <div className="flex-shrink-0 text-gray-100">
                {user?.image &&
                  <Image
                    className="h-12 w-12 rounded-full"
                    src={user.image}
                    width={50}
                    height={50}
                    alt=""
                  />
                }
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-100">
                    {user?.name}
                  </p>
                  <p className="text-sm text-gray-300">{formatTimeAgo(post.createdAt)}</p>
                </div>
                <div className="flex-1 mt-1">
                  <p className="text-xl font-semibold text-gray-100">
                    {post.title.substring(0, 50)}
                  </p>

                </div>
              </div>
            </div>
            <pre className="mt-4 mx-5 max-h-52 overflow-hidden border-b border-gray-700 whitespace-pre-wrap break-words">
              {post.language ?
                <code className={`language-${post.language}`} dangerouslySetInnerHTML={{ __html: highlight(post.code, post.language) }} ></code>
                :
                <code>{post.code}</code>
              }
            </pre>
        </Link>
      </div>
      <div className="flex flex-col items-center pb-3">
        <PostActions onComment={onComment} onLike={onLike} onShare={onShare} liked={post.liked} totalComments={post.totalComments} totalLikes={post.totalLikes} />
      </div>

    </div>
  )
}