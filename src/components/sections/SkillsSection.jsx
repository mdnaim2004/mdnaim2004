import { motion } from 'framer-motion'
import data from '../../constants/portfolioData.json'
import { fadeUp, staggerContainer } from '../../utils/animations'
import SectionHeading from '../ui/SectionHeading'

function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading eyebrow="Skills" title="What Drives My Work" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.skills.map((skill) => (
          <motion.div key={skill} variants={fadeUp} className="glass-card p-5 text-slate-200 transition hover:border-indigo-300/50">
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection
