import NavBar from './index'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default {
  title: 'NavBar',
  component: NavBar, 
  argTypes: {
    selected: {
      options: ['None', 'Articles', 'Videos'],
      control: { type: 'radio' },
      defaultValue: 'None',
    },
    onSignIn: { action: 'sign in' },
    onSignOut: { action: 'sign out' },
  }
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

const user = {
  name: 'Tom Cook',
}


export const Primary = (args) => <NavBar Image={Image} {...args} navigation={navigation} user={user} />
export const SignedOut = (args) => <NavBar Image={Image} {...args} navigation={navigation} user={null} />
export const Icon = (args) => <NavBar Image={Image} {...args} navigation={[{...navigation[0], Icon: PlusCircleIcon, current: false}, ...navigation.splice(1)]} user={null} />

