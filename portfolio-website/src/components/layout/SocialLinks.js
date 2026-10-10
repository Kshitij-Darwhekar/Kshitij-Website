import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillMediumSquare, AiFillMail } from 'react-icons/ai'
import { socialLinks } from '@/data/social'

const ICONS = {
  twitter: AiFillTwitterCircle,
  linkedin: AiFillLinkedin,
  github: AiFillGithub,
  medium: AiFillMediumSquare,
  mail: AiFillMail,
}

export default function SocialLinks({ className = '' }) {
  return (
    <div className={className}>
      {socialLinks.map((link) => {
        const Icon = ICONS[link.icon]
        const isMail = link.icon === 'mail'
        return (
          <a
            key={link.href}
            href={link.href}
            target={isMail ? undefined : '_blank'}
            rel={isMail ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
            className="hover:text-teal-500"
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}
