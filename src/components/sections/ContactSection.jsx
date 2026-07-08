import { motion } from 'framer-motion'
import data from '../../constants/portfolioData.json'
import SectionHeading from '../ui/SectionHeading'

function ContactSection() {
  return (
    <section id="contact" className="section-container pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s Build Something Meaningful"
        description="I am open to research collaborations, internships, and impactful AI/ML opportunities."
      />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card grid gap-4 p-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input className="input-field" type="text" placeholder="Your Name" />
          <input className="input-field" type="email" placeholder="Your Email" />
        </div>
        <input className="input-field" type="text" placeholder="Subject" />
        <textarea className="input-field min-h-36" placeholder="Your Message" />
        <button
          type="button"
          className="w-fit rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5"
        >
          Send Message
        </button>
        <p className="text-sm text-slate-400">Or email directly: {data.socials.find((social) => social.label === 'Email')?.url.replace('mailto:', '')}</p>
      </motion.form>
    </section>
  )
}

export default ContactSection
