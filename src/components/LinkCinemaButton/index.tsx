import { forwardRef, ButtonHTMLAttributes, Ref } from 'react'

interface LinkCinemaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  alt: string
  src: string
  size: string
  url: string
}

export const LinkCinemaButton = forwardRef<HTMLButtonElement, LinkCinemaButtonProps>(
  ({ alt, src, size, url, ...props }, forwardRef) => {
    return (
        <button  ref={forwardRef} {...props}>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {' '}
            <img className={size} src={src} alt={alt} />
          </a>
        </button>
      
    )
  }
)

