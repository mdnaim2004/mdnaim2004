import AboutSection from '../components/sections/AboutSection'
import AchievementsSection from '../components/sections/AchievementsSection'
import ContactSection from '../components/sections/ContactSection'
import GitHubStatsSection from '../components/sections/GitHubStatsSection'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ResearchSection from '../components/sections/ResearchSection'
import SkillsSection from '../components/sections/SkillsSection'
import TechStackSection from '../components/sections/TechStackSection'
import TimelineSection from '../components/sections/TimelineSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <ResearchSection />
      <TimelineSection />
      <AchievementsSection />
      <GitHubStatsSection />
      <ContactSection />
    </>
  )
}

export default HomePage
