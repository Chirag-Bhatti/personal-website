import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const linkButtonVariants = cva(
  'inline-flex h-11 items-center gap-2 rounded-md px-5 text-sm font-medium transition-[background-color,border-color,color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/85',
        outline: 'border hover:border-foreground/25 hover:bg-secondary',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
)

type LinkButtonProps = React.ComponentProps<'a'> & VariantProps<typeof linkButtonVariants>

export function LinkButton({ variant, className, href, ...props }: LinkButtonProps) {
  const isExternal = href?.startsWith('http')
  return (
    <a
      href={href}
      className={cn(linkButtonVariants({ variant }), className)}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...props}
    />
  )
}
