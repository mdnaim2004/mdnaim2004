import { useMemo } from 'react'
import { FaEnvelope, FaGithub, FaKaggle, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import data from '../../constants/portfolioData.json'

const iconMap = {
  GitHub: FaGithub,
  Kaggle: FaKaggle,
  LeetCode: SiLeetcode,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
}

function Navbar() {
  const socials = useMemo(() => data.socials.filter((entry) => iconMap[entry.label]), [])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a className="text-lg font-semibold tracking-wide text-white" href="#home">
          {data.name}
        </a>
        <div className="hidden items-center gap-3 md:flex">
          {socials.map((social) => {
            const Icon = iconMap[social.label]
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:-translate-y-0.5 hover:border-indigo-300/50 hover:text-indigo-200"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
