import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - ResizeIt | Your Data Protection Rights",
	description:
		"Read ResizeIt's privacy policy to understand how we protect your data and ensure your privacy while using our image resizing tool.",
	keywords:
		"privacy policy, data protection, image resizing privacy, user data security",
};

export default function PrivacyPage() {
	return (
		<div className='py-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='prose prose-lg max-w-none'>
					<h1 className='text-4xl font-bold text-slate-900 mb-8'>
						Privacy Policy
					</h1>

					<p className='text-lg text-slate-600 mb-8'>
						<strong>Last updated:</strong>{" "}
						{new Date().toLocaleDateString()}
					</p>

					<div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8'>
						<h2 className='text-xl font-semibold text-blue-900 mb-2'>
							Privacy First Approach
						</h2>
						<p className='text-blue-800'>
							ResizeIt is designed with privacy as a core
							principle. All image processing happens directly in
							your browser, which means your images never leave
							your device or get uploaded to our servers.
						</p>
					</div>

					<h2>1. Information We Collect</h2>

					<h3>1.1 Images and Files</h3>
					<p>
						When you use ResizeIt to process images, these files are
						processed entirely within your web browser using
						client-side JavaScript. We do not upload, store, or have
						access to any images you process through our service.
					</p>

					<h3>1.2 Usage Analytics</h3>
					<p>
						We may collect anonymous usage statistics to help us
						improve our service, including:
					</p>
					<ul>
						<li>
							Number of images processed (without any image
							content or metadata)
						</li>
						<li>Browser type and version</li>
						<li>Device type (desktop, mobile, tablet)</li>
						<li>General geographic location (country level)</li>
						<li>Pages visited on our website</li>
					</ul>

					<h3>1.3 Contact Information</h3>
					<p>
						If you contact us through our contact form, we collect
						the information you provide, such as your name, email
						address, and message content, solely for the purpose of
						responding to your inquiry.
					</p>

					<h2>2. How We Use Your Information</h2>

					<p>We use the limited information we collect to:</p>
					<ul>
						<li>Provide and maintain our image resizing service</li>
						<li>Improve our website and user experience</li>
						<li>Respond to your questions and support requests</li>
						<li>Analyze usage patterns to enhance our service</li>
						<li>
							Ensure the security and proper functioning of our
							website
						</li>
					</ul>

					<h2>3. Information Sharing and Disclosure</h2>

					<p>
						We do not sell, trade, or otherwise transfer your
						personal information to third parties. This does not
						include trusted third parties who assist us in operating
						our website, conducting our business, or serving our
						users, so long as those parties agree to keep this
						information confidential.
					</p>

					<h2>4. Data Security</h2>

					<p>
						We implement appropriate security measures to protect
						your information:
					</p>
					<ul>
						<li>
							All image processing occurs client-side in your
							browser
						</li>
						<li>
							We use HTTPS encryption for all data transmission
						</li>
						<li>We regularly update our security practices</li>
						<li>
							We limit access to personal information to
							authorized personnel only
						</li>
					</ul>

					<h2>5. Cookies and Tracking</h2>

					<p>
						We may use cookies and similar tracking technologies to
						enhance your experience:
					</p>
					<ul>
						<li>
							<strong>Essential Cookies:</strong> Required for
							basic website functionality
						</li>
						<li>
							<strong>Analytics Cookies:</strong> Help us
							understand how visitors use our site
						</li>
						<li>
							<strong>Preference Cookies:</strong> Remember your
							settings and preferences
						</li>
					</ul>

					<p>
						You can control cookie settings through your browser
						preferences.
					</p>

					<h2>6. Third-Party Services</h2>

					<p>
						We may use third-party services for analytics and
						website functionality. These services have their own
						privacy policies:
					</p>
					<ul>
						<li>Google Analytics (for website analytics)</li>
						<li>Vercel (for website hosting)</li>
					</ul>

					<h2>7. Your Rights</h2>

					<p>You have the right to:</p>
					<ul>
						<li>
							Access the personal information we hold about you
						</li>
						<li>
							Request correction of inaccurate personal
							information
						</li>
						<li>Request deletion of your personal information</li>
						<li>
							Object to processing of your personal information
						</li>
						<li>Request data portability</li>
					</ul>

					<h2>8. Children&apos;s Privacy</h2>

					<p>
						Our service is not directed to children under 13. We do
						not knowingly collect personal information from children
						under 13. If you are a parent or guardian and believe
						your child has provided us with personal information,
						please contact us.
					</p>

					<h2>9. Changes to This Privacy Policy</h2>

					<p>
						We may update this privacy policy from time to time. We
						will notify you of any changes by posting the new
						privacy policy on this page and updating the &quot;Last
						updated&quot; date at the top of this policy.
					</p>

					<h2>10. Contact Us</h2>

					<p>
						If you have any questions about this privacy policy or
						our privacy practices, please contact us at:
					</p>
					<ul>
						<li>Email: privacy@example.com</li>
						<li>
							Contact Form:{" "}
							<a href='/contact'>example.com/contact</a>
						</li>
					</ul>

					<div className='bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8'>
						<h3 className='text-lg font-semibold text-slate-900 mb-2'>
							Summary
						</h3>
						<p className='text-slate-700'>
							ResizeIt is committed to protecting your privacy. We
							process images locally in your browser, collect
							minimal analytics data, and never share your
							personal information with third parties for
							marketing purposes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
