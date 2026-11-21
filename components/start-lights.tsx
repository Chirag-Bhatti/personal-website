type LightProps = { color: string; delay: string }

function lightStyle({ color, delay }: LightProps) {
  return { '--on-delay': delay, '--light-color': `var(${color})` } as React.CSSProperties
}

const lightClass = 'size-4 rounded-full bg-secondary ring-1 ring-border'

function BlinkLight(props: LightProps) {
  return <span className={`start-light ${lightClass}`} style={lightStyle(props)} />
}

function HoldLight(props: LightProps) {
  return <span className={`start-light-hold ${lightClass}`} style={lightStyle(props)} />
}

export function StartLights() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border bg-card px-3 py-2" aria-hidden="true">
      <BlinkLight color="--primary" delay="0.3s" />
      <BlinkLight color="--caution" delay="0.9s" />
      <HoldLight color="--accent" delay="1.5s" />
    </div>
  )
}
