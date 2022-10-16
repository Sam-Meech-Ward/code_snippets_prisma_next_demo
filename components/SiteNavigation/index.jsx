import NavBar from "../NavBar"
import { useRouter } from 'next/router'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

export default function SiteNavigation() {

  const router = useRouter()
  const navigation = [
    { name: 'New', Icon: PlusCircleIcon, href: '/addPost', current: router.pathname === '/addPost' },
  ]

  const handleSearch = (text) => {
    router.push(`/search?q=${text}`)
  }


  return (
    <NavBar navigation={navigation} onSearch={handleSearch} />
  )
}