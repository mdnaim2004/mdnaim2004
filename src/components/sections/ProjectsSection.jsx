import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import data from '../../constants/portfolioData.json'
import SectionHeading from '../ui/SectionHeading'

function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading eyebrow="Featured Projects" title="Built for Impact" />
      <div className="grid gap-5 lg:grid-cols-2">
        {data.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="glass-card overflow-hidden"
          >
            <div className="relative h-40 bg-gradient-to-r from-indigo-500/35 via-fuchsia-500/30 to-cyan-500/35">
              <div className="absolute inset-0 grid place-items-center text-lg font-semibold text-white/90">{project.image}</div>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{project.subtitle}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/85 px-4 py-2 text-sm text-white transition hover:bg-indigo-500"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
