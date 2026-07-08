import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import data from '../../constants/portfolioData.json'
import SectionHeading from '../ui/SectionHeading'

function AchievementsSection() {
  return (
    <section id="achievements" className="section-container">
      <SectionHeading eyebrow="Achievements" title="Milestones" />
      <div className="grid gap-4 md:grid-cols-2">
        {data.achievements.map((achievement, index) => (
          <motion.div
            key={achievement}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="glass-card flex items-center gap-4 p-5"
          >
            <span className="rounded-lg bg-indigo-400/20 p-3 text-indigo-200">
              <FaAward />
            </span>
            <p className="text-slate-200">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
