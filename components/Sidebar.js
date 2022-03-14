import React from 'react'
import Image from 'next/image'
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
  return (
    <div className="fixed hidden h-full items-center p-2 sm:flex sm:flex-col xl:w-[340px] xl:items-start ">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24 ">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="mb2.5 mt-4 space-y-2.5 xl:ml-24 ">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        <button className="ml-auto hidden h-[52px] w-56 rounded-full bg-[#1d9bf0] text-lg text-white shadow-md transition duration-200 hover:bg-[#1a8cd8] xl:inline">
          Tweet
        </button>
      </div>

      <div className="hoverAnimation mt-auto flex items-center justify-center text-white xl:ml-auto xl:-mr-5">
        <img
          src="https://lh3.googleusercontent.com/fPnweq5qC4GtQ741QtkTFiotnlgN7vjaJ8uKHfkspJOMP7Dos_n5GYReUBkqx-6TPNxoBID6yJG9kZlm6osI5E53CeDZX2JTEyBOpeNk-AAGVcikvBGbXI-irFlDnLyqZGQMDHv1d0nHg8vI0Kl_YDWrDw5gQ-HSdBGIMZw9Q-m6qsQ23pk6nzbdX3gOj71oFR47_OC3BT1XLg9FGsvlpqIUjd-kKwOg6zPHuj8Po522krnpi9WeKWzVrf98_4t0NnwrCE3FVt-OcmmL7Z1jmF3Df_p7y-BaA6cHxOeWcWKV-0Joll8O3gal2mtudAfrEIj11Na80a8D-7O8J85LMSN58215CGUbGi9DbWNscmYooPgFqfxRGYseOL3rierhrbKJVYjBde21r2f-kxnW2qO2odFkG4NfJLnCu4kVEfE7Tv1HouZi1ZiE7I7gti0Vxq4t9Inte4ROONfiXdvtyYkoX8uFR7h2OGHbtnkyAoTV-2ttPNJLY9v52HKMVkQ9WwDRwZJHgRPkz5FtBPSVCSGh2t15bEeDoE5I6Lzfd2Ey9dnAgNgVhHfX9xC3-MWXe50G8uqj0D-hSVv9_z1z8kc1ipNpeZjbTNpdxp9YzgIhbYQzEECWonn7OBA4iK_Qpg062BhInrrWQISJKNmvWLVqiOj2g7dK9beVbldVfCWxh-2SOUsBe2XAsAdbZI4YjjNyhe9wuAy8ZrcaR3X322c=s640-no?authuser=0"
          alt="userImage"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden leading-5 text-white xl:inline">
          <h4 className="font-bold">Neliswa Mabuza</h4>
          <p className="text-white">@teziemabuza</p>
        </div>
        <DotsHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  )
}

export default Sidebar
