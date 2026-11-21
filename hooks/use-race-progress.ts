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

/** Tracks which section crosses the upper reading line, re-rendering only on change. */
export function useActiveSection<T extends string>(ids: readonly T[]) {
  const [activeId, setActiveId] = useState<T>(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id as T)
        }
      },
      { rootMargin: '-40% 0px -59% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
