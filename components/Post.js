import { useAmp } from 'next/amp'
import React from 'react'
import Moment from 'react-moment'

function Post({ id, post, postPage }) {
  return (
    <div className="flex cursor-pointer border-b border-gray-700 p-3">
      {!postPage && (
        <img
          src={post?.userImg}
          alt="userImg"
          className="mr-4 h-11 w-11 rounded-full"
        />
      )}
      <div className="flex w-full flex-col space-y-2">
        <div className={`flex ${!postPage && 'justify-between'}`}>
          {postPage && (
            <img
              src={post?.userImg}
              alt="userImg"
              className="mr-4 h-11 w-11 rounded-full"
            />
          )}
          <div className="text-[#6e767d]">
            <div className="group inline-block">
              <h4
                className={` ${
                  !postPage && 'inline-block'
                } text-[15px] font-bold text-[#d9d9d9] group-hover:underline sm:text-base`}
              >
                {post?.username}
              </h4>
              <span
                className={`text-sm sm:text-[15px] ${!postPage && 'ml-1.5'}`}
              >
                @{post?.tag}
              </span>
            </div>{' '}
            .{' '}
            <span className="text-sm hover:underline sm:text-[15px]">
              {/* <Moment fromNow>{post?.timestamp?.apply.toDate()}</Moment> */}
            </span>
            {!postPage && (
              <p className="mt-0.5 text-[15px] text-[#d9d9d9] sm:text-base">
                {post?.text}
              </p>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Post
