import { useState } from "react"

import SimpleCodeEditor from "../../components/SimpleCodeEditor"
import Button from "../Button"
import LanguageDropdown from "../LanguageDropdown"

export default function NewPostForm({ defaultLanguage = "markdown", defaultCode = "", onSubmit, onChange, className = "" }) {
  const [code, setCode] = useState(defaultCode)
  const [language, setLanguage] = useState(defaultLanguage)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ code, language })
  }

  const handleChange = (value) => {
    setCode(value)
    onChange?.(value)
  }

  return (
    <form onSubmit={handleSubmit} className={"mt-8 space-y-6 " + className} action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>

          <LanguageDropdown
            // buttonClassName="rounded-none rounded-t-xl"
            // optionsClassName="rounded-none rounded-b-xl"
            optionsClassName="mt-1"
            language={language}
            onChange={setLanguage}
          />
          <SimpleCodeEditor
            // className="rounded-none rounded-b-xl"
            className="mt-5"
            value={code}
            onChange={handleChange}
            language={language}
            id="code"
            name="code"
          />

          <Button
            type="submit"
          >
            Push!
          </Button>
        </div>
      </div>
    </form>
  )
}