import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

function GitHubStatsSection() {
  return (
    <section id="github-stats" className="section-container">
      <SectionHeading
        eyebrow="GitHub Stats"
        title="Open Source Footprint"
        description="Placeholders are ready for contribution graphs and dynamic repository analytics."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {['Contribution Graph Placeholder', 'Top Languages Placeholder', 'Streak Stats Placeholder'].map((item) => (
            <div key={item} className="rounded-xl border border-dashed border-white/25 bg-white/5 p-6 text-center text-sm text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default GitHubStatsSection
