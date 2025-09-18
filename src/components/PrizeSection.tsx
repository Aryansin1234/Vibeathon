import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award, Gift, Zap, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const prizes = [
	{
		position: '1st Place',
		amount: 'Prizes worth ₹25,000',
		icon: Trophy,
		color: 'from-yellow-400 to-yellow-600',
		glow: 'shadow-[0_0_30px_rgba(255,215,0,0.5)]',
		description: 'Grand Prize Winner'
	},
	{
		position: '2nd Place',
		amount: 'Prizes worth ₹15,000',
		icon: Medal,
		color: 'from-gray-300 to-gray-500',
		glow: 'shadow-[0_0_30px_rgba(192,192,192,0.5)]',
		description: 'Runner Up'
	},
	{
		position: '3rd Place',
		amount: 'Prizes worth ₹5,000',
		icon: Award,
		color: 'from-amber-600 to-amber-800',
		glow: 'shadow-[0_0_30px_rgba(205,127,50,0.5)]',
		description: 'Third Place'
	},
	{
		position: 'Best Innovation',
		amount: 'Prizes worth ₹3,000 + Goodies',
		icon: Zap,
		color: 'from-purple-500 to-purple-700',
		glow: 'shadow-[0_0_30px_rgba(147,51,234,0.5)]',
		description: 'Most Creative Solution'
	},
	{
		position: 'People\'s Choice',
		amount: 'Prizes worth ₹2,000 + Goodies',
		icon: Gift,
		color: 'from-pink-500 to-pink-700',
		glow: 'shadow-[0_0_30px_rgba(236,72,153,0.5)]',
		description: 'Community Favorite'
	}
];

const PrizeSection = () => {
	const [totalPrize, setTotalPrize] = useState(0);
	const [hoveredPrize, setHoveredPrize] = useState<number | null>(null);
	const targetTotal = 50000;

	useEffect(() => {
		const duration = 2000; // 2 seconds
		const steps = 60;
		const increment = targetTotal / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= targetTotal) {
				setTotalPrize(targetTotal);
				clearInterval(timer);
			} else {
				setTotalPrize(Math.floor(current));
			}
		}, duration / steps);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="py-20 px-4 relative">
			<div className="absolute inset-0 gradient-hero opacity-30" />

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-16 scroll-reveal">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative z-30 mb-20"
					>
						<div className="relative inline-block">
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

							<div className="relative">
								<div className="absolute -inset-x-1 -inset-y-4 bg-gradient-to-r from-blue-500/10 to-blue-400/10 blur-xl rounded-lg" />
								<h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 relative">
									Amazing Prize Pool
								</h2>
							</div>

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
					</motion.div>

					<motion.div
						className="relative mb-12"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, type: "spring" }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 blur-3xl z-10" />
						<div className="relative z-20">
							<div className="text-7xl md:text-9xl font-black text-center mb-4 relative">
								<span className="absolute -inset-x-2 inset-y-0 bg-gradient-to-r from-blue-500/40 to-blue-400/40 blur-2xl z-10" />
								<div className="relative bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
									₹{totalPrize.toLocaleString()}
								</div>
								<motion.div
									className="absolute -right-4 -top-4 text-4xl"
									initial={{ rotate: -15 }}
									animate={{ rotate: 15 }}
									transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
								>
									💰
								</motion.div>
							</div>
							<motion.div
								className="flex items-center justify-center gap-4 text-xl text-muted-foreground"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 }}
							>
								<span className="px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20">
									Total Prize Pool
								</span>
								<span className="px-4 py-2 rounded-full bg-blue-400/10 dark:bg-blue-400/20">
									5 Categories
								</span>
							</motion.div>
						</div>
					</motion.div>

					<motion.p
						className="text-lg text-muted-foreground max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 }}
					>
						Join the competition and showcase your skills to win amazing prizes across multiple categories
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{prizes.slice(0, 3).map((prize, index) => {
						const IconComponent = prize.icon;

						return (
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								whileHover={{ scale: index === 0 ? 1.05 : 1.02 }}
							>
								<Card
									key={prize.position}
									className={`glass-card group relative overflow-hidden transition-all duration-500
                    ${index === 0 ? 'md:scale-110 md:-translate-y-4' : ''}
                    ${hoveredPrize === index ? `${prize.glow} border-none` : ''}
                    hover:shadow-2xl dark:hover:shadow-none
                  `}
									onMouseEnter={() => setHoveredPrize(index)}
									onMouseLeave={() => setHoveredPrize(null)}
								>
									<div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

									<CardHeader className="text-center relative z-10 p-8">
										<motion.div
											className="mb-6 flex justify-center"
											animate={hoveredPrize === index ? {
												scale: [1, 1.2, 1],
												rotate: [0, -10, 10, 0],
											} : {}}
											transition={{ duration: 0.5 }}
										>
											<div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center`}>
												<IconComponent className="w-12 h-12 text-white" />
											</div>
										</motion.div>
										<motion.div
											initial={false}
											animate={hoveredPrize === index ? { scale: 1.1 } : { scale: 1 }}
											transition={{ duration: 0.3 }}
										>
											<CardTitle className="text-4xl font-black mb-2 bg-gradient-to-br group-hover:bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
												{prize.amount}
											</CardTitle>
											<div className={`text-xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
												{prize.position}
											</div>
											<p className="text-muted-foreground mt-2">{prize.description}</p>
										</motion.div>

										{hoveredPrize === index && (
											<motion.div
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												className="mt-4 pt-4 border-t border-border/50"
											>
												<div className="text-sm font-medium text-gray-900 dark:text-white">
													{index === 0 ? '🏆 Grand Champion!' : index === 1 ? '🥈 Amazing work!' : '🥉 Great achievement!'}
												</div>
											</motion.div>
										)}
									</CardHeader>
								</Card>
							</motion.div>
						);
					})}
				</div>

				{/* Special Categories */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{prizes.slice(3).map((prize, index) => {
						const IconComponent = prize.icon;

						return (
							<motion.div
								key={prize.position}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 + index * 0.2 }}
								whileHover={{ scale: 1.02 }}
							>
								<Card
									className={`glass-card group relative overflow-hidden transition-all duration-500 
                    ${hoveredPrize === index + 3 ? prize.glow : ''}
                    hover:shadow-lg dark:hover:shadow-none
                  `}
									onMouseEnter={() => setHoveredPrize(index + 3)}
									onMouseLeave={() => setHoveredPrize(null)}
								>
									<div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

									<CardContent className="flex items-center p-8 relative z-10">
										<motion.div
											className="mr-8"
											animate={hoveredPrize === index + 3 ? {
												scale: [1, 1.2, 1],
												rotate: [0, -10, 10, 0],
											} : {}}
											transition={{ duration: 0.5 }}
										>
											<div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center`}>
												<IconComponent className="w-10 h-10 text-white" />
											</div>
										</motion.div>
										<div className="flex-1">
											<motion.div
												initial={false}
												animate={hoveredPrize === index + 3 ? { scale: 1.05, x: 10 } : { scale: 1, x: 0 }}
												transition={{ duration: 0.3 }}
											>
												<div className="text-2xl font-black mb-1 bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
													{prize.amount}
												</div>
												<div className={`text-lg font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-1`}>
													{prize.position}
												</div>
												<p className="text-sm text-muted-foreground">{prize.description}</p>
											</motion.div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default PrizeSection;