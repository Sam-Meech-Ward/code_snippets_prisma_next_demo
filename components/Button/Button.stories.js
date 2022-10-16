import Button from './index'

export default {
  title: 'Button',
  component: Button, 
  argTypes: {
    onClick: { action: 'click' },
  }
}


export const Primary = (args) => <Button className='max-w-2xl mx-auto' {...args}>This is a button</Button>
