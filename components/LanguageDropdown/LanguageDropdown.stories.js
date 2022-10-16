import LanguageDropdown from './index'

export default {
  title: 'LanguageDropdown',
  component: LanguageDropdown, 
  argTypes: {
    onChange: { action: 'change' },
  }
}


export const Primary = (args) => <LanguageDropdown className='max-w-2xl mx-auto' {...args} />
