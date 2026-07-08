import { useEffect, useMemo, useState } from 'react'

const TYPING_SPEED = 65
const PAUSE = 1300

export function useTypewriter(words = []) {
  const safeWords = useMemo(() => words.filter(Boolean), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [value, setValue] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!safeWords.length) return
    const current = safeWords[wordIndex % safeWords.length]

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, value.length + 1)
          setValue(next)
          if (next === current) {
            setTimeout(() => setDeleting(true), PAUSE)
          }
        } else {
          const next = current.slice(0, value.length - 1)
          setValue(next)
          if (!next) {
            setDeleting(false)
            setWordIndex((prev) => (prev + 1) % safeWords.length)
          }
        }
      },
      deleting ? TYPING_SPEED / 2 : TYPING_SPEED,
    )

    return () => clearTimeout(timeout)
  }, [deleting, safeWords, value, wordIndex])

  return value
}
