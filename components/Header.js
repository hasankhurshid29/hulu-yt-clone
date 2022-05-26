import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { HomeIcon,LightningBoltIcon, BadgeCheckIcon, CollectionIcon,SearchIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center ml-16'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
      <HeaderItem title='HOME' Icon={HomeIcon} />
      <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
      <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
      <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
      <HeaderItem title='SEARCH' Icon={SearchIcon} />
      <HeaderItem title='ACCOUNTS' Icon={UserIcon} />
      </div>
      <Image
        className='!-mt-3'
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
        width={60}
        height={60}
      />
    </header>

  )
}

export default Header
