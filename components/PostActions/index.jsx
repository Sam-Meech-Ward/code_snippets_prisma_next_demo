import Link from "next/link"
import Image from "next/image"

import { ChatBubbleBottomCenterTextIcon as CommentIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

export default function PostActions({ onComment, onLike, onShare, totalLikes, totalComments, liked, className = "" }) {

  return (
    <div className={'flex items-center justify-between ' + className}>
      <button
        onClick={onComment}
        className="flex flex-col items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md hover:outline-none text-gray-400 hover:text-gray-500"
      >
        <span>{totalComments}</span>
        <CommentIcon className="h-7 w-7" aria-hidden="true" />
      </button>
      <button
        onClick={onLike}
        className="flex flex-col items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md hover:outline-none text-gray-400 hover:text-gray-500"
      >
        <span>{totalLikes}</span>
        {
          !liked ? <HeartIcon className="h-7 w-7" aria-hidden="true" />
            : <HeartIconSolid className="h-7 w-7" aria-hidden="true" />
        }
      </button>
      <button
        onClick={onShare}
        className="flex flex-col items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md hover:outline-none text-gray-400 hover:text-gray-500"
      >
        <span>&nbsp;</span>
        <ArrowUpTrayIcon className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  )
}