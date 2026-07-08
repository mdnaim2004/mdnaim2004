import { motion } from 'framer-motion'
import data from '../../constants/portfolioData.json'
import SectionHeading from '../ui/SectionHeading'

function TimelineSection() {
  return (
    <section id="timeline" className="section-container">
      <SectionHeading eyebrow="Timeline" title="Growth Journey" />
      <div className="relative ml-4 space-y-6 border-l border-white/15 pl-6">
        {data.timeline.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass-card relative p-5"
          >
            <span className="absolute -left-[32px] top-6 h-3.5 w-3.5 rounded-full bg-indigo-300 shadow-[0_0_18px_rgba(165,180,252,0.8)]" />
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{item.phase}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
