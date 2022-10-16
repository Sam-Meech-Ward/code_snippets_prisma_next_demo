import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { twMerge } from 'tailwind-merge'

const languages = ["TypeScript", "JavaScript", "CSS", "LESS", "SCSS", "JSON", "HTML", "XML", "PHP", "C#", "C++", "Razor", "Markdown", "Diff", "Java", "VB", "CoffeeScript", "Handlebars", "Batch", "Pug", "F#", "Lua", "Powershell", "Python", "Ruby", "SASS", "R", "Objective-C"].sort()

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageDropdown({ language = "markdown", onChange, buttonClassName = "", optionsClassName = "" }) {
  const index = languages.findIndex(l => l.toLowerCase() === language.toLowerCase())
  const [selected, setSelected] = useState(languages[Number.isInteger(index) ? index : 14])

  const handleChange = (s) => {
    setSelected(s)
    onChange(s.toLowerCase())
  }


  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className={twMerge("relative w-full cursor-default rounded-xl border border-gray-300 bg-dark py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm", buttonClassName)}>
              <span className="flex items-center">
                <span className="ml-3 block">{selected}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-100" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className={twMerge("absolute z-10 mt-0 max-h-56 w-full overflow-hidden rounded-md bg-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", optionsClassName)}>
              <Listbox.Options className="max-h-56 w-full overflow-auto">
                {languages.map((language, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-100',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img src={language.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {language}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
              </div>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
