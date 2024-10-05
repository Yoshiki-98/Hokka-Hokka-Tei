import React, { useState, useCallback, useDebugValue } from 'react';

// input 向けにコールバックと現在の入力内容をまとめたフック
const useInput = () => {
  // 現在の入力値を保持するフック
  const [state, setState] = useState('')

  // input が変化したらフック内の状態を更新する
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, []);

  // デバッグように値を出力する
  // 値は開発者用ツール React Developer ToolsのComponentsタブに表示される
  useDebugValue(`Input: ${state}`)

  // 現在の入力内容とコールバック関数だけ返す
  return [state, onChange] as const
}

export const Input = () => {
  const [text, onChangeText] = useInput()
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  )
}
