import { motion } from 'framer-motion'
import data from '../../constants/portfolioData.json'
import { fadeUp } from '../../utils/animations'
import SectionHeading from '../ui/SectionHeading'

function AboutSection() {
  return (
    <section id="about" className="section-container">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <SectionHeading
          eyebrow="About"
          title="Curiosity-Driven Engineer"
          description="I blend research thinking with practical engineering to create AI systems that are useful, explainable, and human-centered."
        />
        <div className="glass-card p-7 md:p-8">
          <p className="text-slate-200">{data.about}</p>
          <p className="mt-4 text-slate-300">{data.mission}</p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
