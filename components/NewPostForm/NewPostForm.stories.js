import NewPostForm from './index'

export default {
  title: 'NewPostForm',
  component: NewPostForm, 
  argTypes: {
    onSubmit: { action: 'submit' },
    onChange: { action: 'change' },
  }
}


export const Primary = (args) => <NewPostForm className='max-w-2xl mx-auto' {...args} />

export const WithCode = (args) => <NewPostForm 
className='max-w-2xl mx-auto'
defaultCode={`
import SimpleCodeEditor from './index'

export default {
  title: 'SimpleCodeEditor',
  component: SimpleCodeEditor,
  argTypes: {
    onSubmit: { action: 'submit' },
    }
  }
}`}
defaultLanguage='javascript'
 {...args} 
 />
