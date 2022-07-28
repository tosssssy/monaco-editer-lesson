import Editor from '@monaco-editor/react'
import React, { useState } from 'react'

const code =
  ////////////////////////////////////////
  `function sayHello(name: string) {
  console.log('hello', name)
}
`

export default function Home() {
  const [text, setText] = useState<string | undefined>(code)

  return (
    <div className="h-screen bg-gray-200 pt-10">
      <h1 className="text-center text-4xl">エディタサンプル</h1>
      <div className="mt-24 flex justify-center gap-10">
        <div className="w-[40%]">
          <Editor
            height="70vh"
            defaultValue={text || ''}
            defaultLanguage="typescript"
            onChange={setText}
          />
        </div>
        <div className="h-[70vh] w-[40%] bg-white">
          <pre>{text}</pre>
        </div>
      </div>
    </div>
  )
}
