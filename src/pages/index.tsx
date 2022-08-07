import Editor from '@monaco-editor/react'
import { Base64 } from 'js-base64'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const BASE_URL = 'https://monaco-editor-lesson.netlify.app/'

const defaultCode =
  ////////////////////////////////////////
  `function sayHello(name: string) {
  console.log('hello' + name)
}
`

export default function Home() {
  const router = useRouter()
  const code = useMemo(() => {
    if (router.isReady && router.query['code']) {
      return Base64.decode(
        (router.query['code'] as string).split(' ').join('+'),
      )
    }
  }, [router.isReady, router.query])
  const [text, setText] = useState<string | undefined>(code || defaultCode)
  useEffect(() => {
    if (code) setText(code)
  }, [code])

  return (
    <div className="h-screen bg-gray-200 pt-10">
      <h1 className="text-center text-4xl">エディタサンプル</h1>
      <CopyToClipboard
        text={`${BASE_URL}?code=${Base64.encode(text || '')}`}
        onCopy={() => alert('コピーしました')}
      >
        <button className="ml-40 block rounded-lg bg-sky-600 p-2 text-white hover:opacity-70">
          共有リンクをコピー
        </button>
      </CopyToClipboard>
      <div className="mt-10 flex justify-center gap-10">
        <div className="w-[40%]">
          <Editor
            height="70vh"
            defaultValue={text || ''}
            defaultLanguage="typescript"
            onChange={setText}
          />
        </div>
        <div className="h-[70vh] w-[40%]  bg-white">
          <pre>{text}</pre>
        </div>
      </div>
    </div>
  )
}
