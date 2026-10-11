import { socialLinks } from '@/data/social'
import SocialIcon from './SocialIcon'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={className}>
      {socialLinks.map((link) => {
        const isMail = link.icon === 'mail'
        return (
          <a
            key={link.href}
            href={link.href}
            target={isMail ? undefined : '_blank'}
            rel={isMail ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-400/30 transition-colors duration-200 hover:border-teal-500 hover:text-teal-500 dark:border-slate-600/50"
          >
            <SocialIcon name={link.icon} />
          </a>
        )
      })}
    </div>
  )
}
