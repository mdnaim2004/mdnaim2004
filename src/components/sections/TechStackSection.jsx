import { motion } from 'framer-motion'
import data from '../../constants/portfolioData.json'
import { fadeUp } from '../../utils/animations'
import SectionHeading from '../ui/SectionHeading'

function TechBlock({ title, items }) {
  return (
    <motion.div variants={fadeUp} className="glass-card p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function TechStackSection() {
  return (
    <section id="tech" className="section-container">
      <SectionHeading eyebrow="Tech Stack" title="Core Technologies" />
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 md:grid-cols-3">
        <TechBlock title="Languages" items={data.techStack.languages} />
        <TechBlock title="Libraries & Frameworks" items={data.techStack.frameworks} />
        <TechBlock title="Tools" items={data.techStack.tools} />
      </motion.div>
    </section>
  )
}

export default TechStackSection
