import FaSearch from '@meronex/icons/fa/FaSearch'
import ZoAddSolid from '@meronex/icons/zo/ZoAddSolid'
import Link from 'next/link'

export default function Topnav() {
  return (
    <div class="flex items-center justify-between p-5 border-b sm:px-10 sm:py-8">
      <div class="flex flex-wrap w-56 sm:w-72 ">
      <Link href="/" class="cursor-pointer">
        <a class="text-3xl font-black uppercase sm:text-6xl">Plantones</a></Link>
        <span class="-mt-1 sm:text-xl">A Botanical Collection of Colors</span>
      </div>
      <div class="flex mr-2">
        <span class="mr-5 sm:mr-10">
          <FaSearch class="scale-150 sm:scale-[2.25]" />
        </span>
        <span class="-mt-.5">
          <ZoAddSolid class="scale-150 sm:scale-[2.25]"/>
        </span>
      </div>
    </div>
  )
}
