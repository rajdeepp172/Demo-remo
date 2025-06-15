import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
	title: "About Us - ResizeIt | Professional Image Resizing Tool",
	description:
		"Learn about ResizeIt, the professional image resizing tool trusted by millions. Our mission, values, and commitment to providing the best image optimization experience.",
	keywords:
		"about resizeIt, image resizing company, photo editing team, image optimization mission",
};

export default function AboutPage() {
	return (
		<div className='py-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Hero Section */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl font-bold text-slate-900 mb-6'>
						About ResizeIt
					</h1>
					<p className='text-xl text-slate-600 max-w-3xl mx-auto'>
						We&apos;re passionate about making image optimization
						simple, fast, and accessible to everyone. Our mission is
						to provide professional-grade tools without the
						complexity.
					</p>
				</div>

				{/* Story Section */}
				<div className='mb-16'>
					<h2 className='text-3xl font-bold text-slate-900 mb-6'>
						Our Story
					</h2>
					<div className='prose prose-lg text-slate-600 max-w-none'>
						<p className='mb-6'>
							ResizeIt was born from a simple frustration: why
							should resizing images be complicated? As developers
							and designers ourselves, we found existing tools
							either too complex, too slow, or required expensive
							subscriptions for basic functionality.
						</p>
						<p className='mb-6'>
							In 2024, we set out to create the perfect image
							resizing tool - one that would be fast, secure, and
							completely free. We believe that everyone should
							have access to professional-grade image optimization
							tools, whether you&apos;re a student working on a
							project or a business optimizing your website.
						</p>
						<p>
							Today, ResizeIt processes millions of images every
							month, helping users around the world optimize their
							visual content with ease and confidence.
						</p>
					</div>
				</div>

				{/* Values Section */}
				<div className='mb-16'>
					<h2 className='text-3xl font-bold text-slate-900 mb-8'>
						Our Values
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4'>
										<Users className='w-6 h-6 text-blue-600' />
									</div>
									<h3 className='text-xl font-semibold text-slate-900'>
										User-First
									</h3>
								</div>
								<p className='text-slate-600'>
									Every decision we make is guided by
									what&apos;s best for our users. We
									prioritize simplicity, speed, and
									reliability above all else.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4'>
										<Target className='w-6 h-6 text-green-600' />
									</div>
									<h3 className='text-xl font-semibold text-slate-900'>
										Privacy-Focused
									</h3>
								</div>
								<p className='text-slate-600'>
									Your images are yours. We process everything
									locally in your browser, ensuring your data
									never leaves your device.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4'>
										<Award className='w-6 h-6 text-purple-600' />
									</div>
									<h3 className='text-xl font-semibold text-slate-900'>
										Quality-Driven
									</h3>
								</div>
								<p className='text-slate-600'>
									We&apos;re committed to delivering the
									highest quality results with every image you
									process through our platform.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4'>
										<Heart className='w-6 h-6 text-red-600' />
									</div>
									<h3 className='text-xl font-semibold text-slate-900'>
										Community-Minded
									</h3>
								</div>
								<p className='text-slate-600'>
									We&apos;re believe in giving back to the
									community that supports us. ResizeIt will
									always be free for everyone.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Mission Section */}
				<div className='text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8'>
					<h2 className='text-3xl font-bold text-slate-900 mb-4'>
						Our Mission
					</h2>
					<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
						To democratize image optimization by providing powerful,
						professional-grade tools that are accessible to
						everyone, regardless of technical expertise or budget.
					</p>
				</div>
			</div>
		</div>
	);
}
