import FaSearch from '@meronex/icons/fa/FaSearch'
import ZoAddSolid from '@meronex/icons/zo/ZoAddSolid'
import Link from 'next/link'

export default function Topnav() {
  return (
    <header class="flex items-center w-full justify-between px-10 pb-5 pt-6 border-b border-black sm:px-10 sm:py-8">
      <div class="flex flex-wrap">
      <Link href="/" class="cursor-pointer">
        <a class="text-4xl font-black uppercase w-full sm:text-6xl sm:mb-1">P<span class="font-light">(</span>l<span class="font-light">)</span>antones</a></Link>
        <span class="-mt-1 text-xl">A Botanical Collection of Colors</span>
      </div>
      {/* <div class="flex mr-2">
        <span class="mr-5 sm:mr-10">
          <FaSearch class="scale-150 sm:scale-[2.25]" />
        </span>
        <span class="-mt-.5">
          <ZoAddSolid class="scale-150 sm:scale-[2.25]"/>
        </span>
      </div> */}
    </header>
  )
}
