import data from '../../constants/portfolioData.json'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} {data.name}. Built with React, Tailwind, Framer Motion, and purpose.
      </p>
    </footer>
  )
}

export default Footer
