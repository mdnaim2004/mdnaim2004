import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'

function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 hidden h-8 w-8 rounded-full border border-indigo-300/60 bg-indigo-400/10 backdrop-blur-sm md:block"
      animate={{ x: x - 16, y: y - 16 }}
      transition={{ type: 'spring', stiffness: 280, damping: 25, mass: 0.2 }}
    />
  )
}

export default CursorGlow
