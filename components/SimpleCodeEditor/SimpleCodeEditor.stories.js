import SimpleCodeEditor from './index'

export default {
  title: 'SimpleCodeEditor',
  component: SimpleCodeEditor, 
  argTypes: {
    onChange: { action: 'change' },
  }
}


export const Primary = (args) => <SimpleCodeEditor 
value={`
import SimpleCodeEditor from './index'

export default {
  title: 'SimpleCodeEditor',
  component: SimpleCodeEditor,
  argTypes: {
    onSubmit: { action: 'submit' },
    }
  }
}`}
language='javascript'
 {...args} 
 />
