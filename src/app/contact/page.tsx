import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
	title: "Contact Us - ResizeIt | Get Help with Image Resizing",
	description:
		"Contact the ResizeIt team for support, feedback, or questions about our image resizing tool. We're here to help you optimize your images.",
	keywords:
		"contact resizeIt, image resizing support, customer service, help with image optimization",
};

export default function ContactPage() {
	return (
		<div className='py-16'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Hero Section */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl font-bold text-slate-900 mb-6'>
						Get in Touch
					</h1>
					<p className='text-xl text-slate-600 max-w-3xl mx-auto'>
						Have questions about ResizeIt? Need help with image
						optimization? We&apos;d love to hear from you and help
						you get the most out of our tools.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Contact Form */}
					<div className='lg:col-span-2'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<MessageSquare className='w-5 h-5' />
									Send us a Message
								</CardTitle>
							</CardHeader>
							<CardContent>
								<form className='space-y-6'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
										<div>
											<Label htmlFor='firstName'>
												First Name
											</Label>
											<Input
												id='firstName'
												placeholder='John'
											/>
										</div>
										<div>
											<Label htmlFor='lastName'>
												Last Name
											</Label>
											<Input
												id='lastName'
												placeholder='Doe'
											/>
										</div>
									</div>

									<div>
										<Label htmlFor='email'>Email</Label>
										<Input
											id='email'
											type='email'
											placeholder='john@example.com'
										/>
									</div>

									<div>
										<Label htmlFor='subject'>Subject</Label>
										<Input
											id='subject'
											placeholder='How can we help you?'
										/>
									</div>

									<div>
										<Label htmlFor='message'>Message</Label>
										<Textarea
											id='message'
											placeholder='Tell us more about your question or feedback...'
											rows={6}
										/>
									</div>

									<Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					{/* Contact Information */}
					<div className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Mail className='w-5 h-5' />
									Contact Information
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-start gap-3'>
									<Mail className='w-5 h-5 text-blue-600 mt-1' />
									<div>
										<p className='font-medium text-slate-900'>
											Email
										</p>
										<p className='text-slate-600'>
											support@resizeIt.com
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<Clock className='w-5 h-5 text-green-600 mt-1' />
									<div>
										<p className='font-medium text-slate-900'>
											Response Time
										</p>
										<p className='text-slate-600'>
											Usually within 24 hours
										</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<MapPin className='w-5 h-5 text-purple-600 mt-1' />
									<div>
										<p className='font-medium text-slate-900'>
											Location
										</p>
										<p className='text-slate-600'>
											Global - Remote Team
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									Frequently Asked Questions
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div>
									<h4 className='font-medium text-slate-900 mb-1'>
										Is ResizeIt really free?
									</h4>
									<p className='text-sm text-slate-600'>
										Yes! ResizeIt is completely free with no
										hidden costs or limitations.
									</p>
								</div>

								<div>
									<h4 className='font-medium text-slate-900 mb-1'>
										Are my images secure?
									</h4>
									<p className='text-sm text-slate-600'>
										Absolutely. All processing happens in
										your browser - your images never leave
										your device.
									</p>
								</div>

								<div>
									<h4 className='font-medium text-slate-900 mb-1'>
										What formats are supported?
									</h4>
									<p className='text-sm text-slate-600'>
										We support JPEG, PNG, and WebP formats
										for both input and output.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
