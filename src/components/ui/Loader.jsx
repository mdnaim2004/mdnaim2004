import { motion } from 'framer-motion'

function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-indigo-300/30 border-t-indigo-300"
        animate={{ rotate: 360 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: 'linear' }}
      />
    </div>
  )
}

export default Loader
