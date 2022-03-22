import React from 'react'
import Image from 'next/image'
import { getSession, useSession, signOut } from 'next-auth/react'
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/outline'
import { DotsHorizontalIcon, HomeIcon } from '@heroicons/react/solid'
import SidebarLink from '../components/SidebarLink'
function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="fixed hidden h-full items-center p-2 sm:flex sm:flex-col xl:w-[340px] xl:items-start ">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24 ">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="mb-2.5 mt-4 space-y-1.5 xl:ml-24 ">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        <button className="ml-auto mb-6 hidden h-[52px] w-56 rounded-full bg-[#1d9bf0] text-lg text-white shadow-md transition duration-200 hover:bg-[#1a8cd8] xl:inline">
          Tweet
        </button>
      </div>
      <div className="hoverAnimation mt-auto flex items-center justify-center text-white xl:ml-auto xl:-mr-5">
        <img
          src={session.user.image}
          alt="userImage"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div
          className="hidden leading-5 text-white xl:inline"
          onClick={signOut}
        >
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-white">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  )
}

export default Sidebar
