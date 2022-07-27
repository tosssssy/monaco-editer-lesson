import Editor from '@monaco-editor/react'
import React, { useState } from 'react'

export default function Home() {
  const [text, setText] = useState<string | undefined>("const a = 'abc'")

  return (
    <div className="flex h-screen items-center justify-center  bg-gray-500">
      <Editor
        width="50vh"
        height="70vh"
        defaultValue={text || ''}
        defaultLanguage="typescript"
        onChange={setText}
      />
    </div>
  )
}
