'use client'

import { useEffect, useEffectEvent, useState } from 'react'

/**
 * Streams scroll progress (0–1) to a callback without triggering React renders,
 * so consumers can write transient values straight to the DOM.
 */
export function useScrollProgress(onProgress: (progress: number) => void) {
  const emit = useEffectEvent(onProgress)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      emit(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}

/** Tracks the last section to cross the reading line, re-rendering only on change. */
export function useActiveSection<T extends string>(ids: readonly T[]) {
  const [activeId, setActiveId] = useState<T>(ids[0])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      if (ids.length === 0) return

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      let nextId = ids[0]

      if (maxScroll > 0 && window.scrollY >= maxScroll - 1) {
        nextId = ids[ids.length - 1]
      } else if (window.scrollY > 1) {
        const readingLine = Math.min(window.innerHeight * 0.4, 320)
        for (const id of ids) {
          const section = document.getElementById(id)
          if (section && section.getBoundingClientRect().top <= readingLine) nextId = id
        }
      }

      setActiveId((currentId) => (currentId === nextId ? currentId : nextId))
    }

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate, { passive: true })
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids])

  return activeId
}
