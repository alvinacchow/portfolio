'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-white text-black">
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
