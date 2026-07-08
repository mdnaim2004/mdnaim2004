import { motion } from 'framer-motion'
import { FaGithub, FaKaggle, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import data from '../../constants/portfolioData.json'
import { useTypewriter } from '../../hooks/useTypewriter'

const socialIcons = {
  GitHub: FaGithub,
  Kaggle: FaKaggle,
  LeetCode: SiLeetcode,
  LinkedIn: FaLinkedin,
}

function HeroSection() {
  const title = useTypewriter(data.titleFrames)

  return (
    <section id="home" className="relative px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="glass-card p-8 text-center md:p-12"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-indigo-300">AI | ML | Research</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">{data.name}</h1>
          <p className="mt-4 text-lg text-indigo-200 sm:text-xl">
            {title}
            <span className="ml-1 animate-pulse">|</span>
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-slate-300">{data.mission}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium text-slate-200 transition hover:border-indigo-300 hover:text-white"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            {data.socials
              .filter((social) => socialIcons[social.label])
              .map((social) => {
                const Icon = socialIcons[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:-translate-y-1 hover:text-indigo-200"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
