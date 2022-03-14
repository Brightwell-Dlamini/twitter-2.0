import { XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import profilePic from '../public/gerv.jpg'

function Input() {
  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  return (
    <div
      className={`flex space-x-3 overflow-y-scroll border-b border-gray-700 p-3`}
    >
      <img
        src="/gerv.jpg"
        alt="userImg"
        className="h-11 w-11 cursor-pointer rounded-full"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            rows="2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What is happening?"
            className="min-h-[50px] w-full bg-transparent tracking-wide text-[#d9d9d9] placeholder-gray-500 outline-none"
          />
        </div>
        {selectedFile && (
          <div className="relative">
            <div
              className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center rounded-full bg-[#15181c] bg-opacity-75
             hover:bg-[#272c26]"
              onClick={() => setSelectedFile(null)}
            >
              <XIcon className="h-5 text-white" />
            </div>
            <img
              src={selectedFile}
              alt=""
              className="max-h-80 rounded-2xl object-contain"
            />
          </div>
        )}
        <div></div>
      </div>
    </div>
  )
}

export default Input
