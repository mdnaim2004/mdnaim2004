import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

function ResearchSection() {
  return (
    <section id="research" className="section-container">
      <SectionHeading
        eyebrow="Research"
        title="AI, ML & Human-Computer Interaction"
        description="I am deeply interested in designing intelligent systems that understand human behavior, support better decisions, and improve lives."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-4 md:grid-cols-3"
      >
        {[
          'Human-aware AI systems',
          'Machine learning for healthcare and wellbeing',
          'HCI-driven predictive intelligence',
        ].map((topic) => (
          <div key={topic} className="glass-card p-6 text-slate-200">
            {topic}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default ResearchSection
