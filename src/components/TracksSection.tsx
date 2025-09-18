import { useState, useEffect } from 'react';
import { Brain, Cloud, Coins, Cpu, Gamepad2, Smartphone, Sparkles } from 'lucide-react';
import { TrackCard } from "@/components/ui/track-card";
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';

const tracks = [
	{
		id: 'ipx-hub',
		title: 'Agenda to Calendar: The Smart Way',
		description: 'Create a personalized and seamless journey for every attendee.',
		icon: Brain,
		color: 'from-blue-500 to-purple-600',
		details: `Persona: Participant\n\nCore Idea: Build an all-in-one application that acts as a personal concierge for the SIT event.\n\nKey AI-Powered Features:\n- AI-Powered Agenda Builder\n- SIT Concierge Chatbot\n- Smart Networking Assistant\n- Automated Skill-Based Certification`
	},
	{
		id: 'content-lifecycle',
		title: 'The Smart Stage: Sessions, Schedules & Speakers',
		description: 'Streamline the entire content curation process using AI.',
		icon: Cloud,
		color: 'from-cyan-500 to-blue-500',
		details: `Personas: Speakers, Organizers/Admins\n\nCore Idea: Create a unified platform that automates and adds intelligence to the speaker and session management lifecycle.\n\nKey AI-Powered Features:\n- AI-Assisted Proposal Review\n- Intelligent Agenda Balancing\n- Automated, Personalized Communication\n- Speaker Profile Auto-Enrichment`
	},
	{
		id: 'event-operations',
		title: 'Intelligent Event Management',
		description: 'Build an intelligent command center for smooth event execution.',
		icon: Cpu,
		color: 'from-green-500 to-teal-500',
		details: `Persona: Organizers\n\nCore Idea: Build a central management platform where AI handles repetitive work and provides predictive insights.\n\nKey AI-Powered Features:\n- Generative Project Planning\n- Predictive Task Management & Risk Alerting\n- Intelligent Resource Assignment\n- Automated Post-Event Reporting`
	}
];

const TracksSection = () => {
	const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
	const [activeTrack, setActiveTrack] = useState<string | null>(null);
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 20,
			scale: 0.95
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut" as const
			}
		}
	};

	return (
		<section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 90, 0],
						opacity: [0.3, 0.2, 0.3],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "linear"
					}}
				/>
				<motion.div
					className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [90, 0, 90],
						opacity: [0.2, 0.3, 0.2],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "linear",
						delay: 5
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto relative">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* Title with floating elements */}
					<div className="relative inline-block mb-6">
						<motion.div
							className="absolute -top-8 -left-8 text-blue-500/80"
							animate={{
								rotate: [0, 360],
								scale: [1, 1.2, 1]
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "linear"
							}}
						>
							<Sparkles className="w-8 h-8" />
						</motion.div>

						<h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 relative">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 
                filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
								Challenges
							</span>
						</h2>

						<motion.div
							className="absolute -top-8 -right-8 text-blue-400/80"
							animate={{
								rotate: [360, 0],
								scale: [1, 1.2, 1]
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "linear"
							}}
						>
							<Sparkles className="w-8 h-8" />
						</motion.div>
					</div>

					<motion.p
						className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Embark on your journey of innovation across six cutting-edge domains.<br />
					</motion.p>
				</motion.div>

				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={controls}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
				>
					{tracks.map((track, index) => {
						const IconComponent = track.icon;
						const isActive = activeTrack === track.id;

						return (
							<motion.div
								key={track.id}
								variants={cardVariants}
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<Card
									role="button"
									tabIndex={0}
									aria-expanded={isActive}
									aria-controls={`track-details-${track.id}`}
									className="interactive-card glass-card group cursor-pointer relative overflow-hidden 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10
                    border dark:border-white/10 border-purple-200/50 backdrop-blur-sm
                    bg-gradient-to-br from-background/50 via-background/30 to-background/50
                    dark:from-white/[0.02] dark:via-white/[0.01] dark:to-white/[0.02]
                    shadow-lg shadow-purple-500/5"
									onClick={() => {
										setActiveTrack((prev) => (prev === track.id ? null : track.id));
									}}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											setActiveTrack((prev) => (prev === track.id ? null : track.id));
										}
									}}
								>
									{/* Animated gradient background */}
									<motion.div
										className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0`}
										animate={{
											opacity: isActive ? 0.1 : 0,
											scale: isActive ? 1.1 : 1,
										}}
										transition={{ duration: 0.3 }}
									/>

									<CardHeader className="relative z-10">
										<motion.div
											className="mb-4 flex items-center gap-4"
											whileHover={{ scale: 1.1 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<motion.div
												className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center relative
                          overflow-hidden group-hover:shadow-lg transition-all duration-300 
                          bg-gradient-to-br ${track.color}`}
												animate={{
													rotate: isActive ? [0, 360] : 0,
												}}
												transition={{ duration: 0.5 }}
											>
												<motion.div
													className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
													animate={{
														scale: isActive ? [1, 1.5, 1] : 1,
													}}
													transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
												/>
												<IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" />
											</motion.div>
											<span className="text-base sm:text-lg font-semibold text-blue-500">Use Case {index + 1}</span>
										</motion.div>

										<CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300">
											<motion.span
												className="bg-clip-text text-transparent bg-gradient-to-r from-foreground/90 to-foreground/80
                          group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600
                          drop-shadow-sm"
												animate={{
													y: isActive ? [0, -2, 0] : 0,
												}}
												transition={{ duration: 0.3 }}
											>
												{track.title}
											</motion.span>
										</CardTitle>
										<CardDescription className="text-sm sm:text-base md:text-lg text-muted-foreground/80 group-hover:text-foreground/90 
                      transition-colors duration-300 mt-2">
											{track.description}
										</CardDescription>
									</CardHeader>

									<CardContent className="relative z-10">
										<motion.div
											className="overflow-hidden"
											animate={{
												height: isActive ? 'auto' : 0,
												opacity: isActive ? 1 : 0
											}}
											transition={{ duration: 0.3 }}
										>
											<div id={`track-details-${track.id}`} className="text-sm sm:text-base text-muted-foreground/90 bg-background/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg 
      border dark:border-white/10 border-purple-200/50 dark:bg-white/[0.02] shadow-inner">
												{/* Structured details */}
												<ul className="space-y-2 list-disc list-inside">
													<li><span className="font-semibold">Persona:</span> {track.details.split('\n')[0].replace('Persona:', '').replace('Personas:', '').trim()}</li>
													<li><span className="font-semibold">Core Idea:</span> {track.details.split('\n')[2].replace('Core Idea:', '').trim()}</li>
													<li>
														<span className="font-semibold">Key AI-Powered Features:</span>
														<ul className="ml-4 list-disc">
															{track.details.split('Key AI-Powered Features:')[1]?.split('\n').filter(f => f.trim().startsWith('-')).map((f, i) => (
																<li key={i}>{f.replace('-', '').trim()}</li>
															))}
														</ul>
													</li>
												</ul>
											</div>
										</motion.div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</motion.div>
				<span className="block mt-8 text-blue-500 font-semibold text-lg text-center">The full theme and problem statements will be unveiled on the event day, challenging you to think on your feet and innovate in real time!</span>
			</div>
		</section>
	);
};

export default TracksSection;