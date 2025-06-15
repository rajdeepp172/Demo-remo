import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service - ResizeIt | Usage Terms and Conditions",
	description:
		"Read ResizeIt's terms of service to understand the terms and conditions for using our free image resizing tool.",
	keywords:
		"terms of service, usage terms, image resizing terms, service conditions",
};

export default function TermsPage() {
	return (
		<div className='py-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='prose prose-lg max-w-none'>
					<h1 className='text-4xl font-bold text-slate-900 mb-8'>
						Terms of Service
					</h1>

					<p className='text-lg text-slate-600 mb-8'>
						<strong>Last updated:</strong>{" "}
						{new Date().toLocaleDateString()}
					</p>

					<div className='bg-green-50 border border-green-200 rounded-lg p-6 mb-8'>
						<h2 className='text-xl font-semibold text-green-900 mb-2'>
							Welcome to ResizeIt
						</h2>
						<p className='text-green-800'>
							These terms of service outline the rules and
							regulations for the use of ResizeIt&apos;s image
							resizing service. By using our service, you agree to
							these terms.
						</p>
					</div>

					<h2>1. Acceptance of Terms</h2>

					<p>
						By accessing and using ResizeIt (&quot;the
						Service&quot;), you accept and agree to be bound by the
						terms and provision of this agreement. If you do not
						agree to abide by the above, please do not use this
						service.
					</p>

					<h2>2. Description of Service</h2>

					<p>
						ResizeIt is a free, web-based image resizing tool that
						allows users to:
					</p>
					<ul>
						<li>Resize images by adjusting dimensions</li>
						<li>Optimize image file sizes</li>
						<li>
							Convert between different image formats (JPEG, PNG,
							WebP)
						</li>
						<li>Adjust image quality settings</li>
					</ul>

					<p>
						All image processing is performed client-side in your
						web browser. We do not store or have access to your
						images.
					</p>

					<h2>3. User Responsibilities</h2>

					<h3>3.1 Acceptable Use</h3>
					<p>
						You agree to use ResizeIt only for lawful purposes and
						in accordance with these Terms of Service. You agree not
						to:
					</p>
					<ul>
						<li>
							Process images that contain illegal, harmful, or
							offensive content
						</li>
						<li>Violate any applicable laws or regulations</li>
						<li>
							Infringe upon the intellectual property rights of
							others
						</li>
						<li>
							Attempt to reverse engineer or compromise the
							security of our service
						</li>
						<li>
							Use automated tools to access our service in a way
							that could damage or overload our systems
						</li>
					</ul>

					<h3>3.2 Content Ownership</h3>
					<p>
						You retain full ownership of all images you process
						through ResizeIt. We do not claim any rights to your
						content, and since processing happens in your browser,
						we never have access to your images.
					</p>

					<h2>4. Service Availability</h2>

					<p>
						We strive to maintain high availability of our service,
						but we cannot guarantee uninterrupted access. The
						service may be temporarily unavailable due to:
					</p>
					<ul>
						<li>Scheduled maintenance</li>
						<li>Technical issues</li>
						<li>Force majeure events</li>
						<li>Third-party service dependencies</li>
					</ul>

					<h2>5. Limitation of Liability</h2>

					<p>
						ResizeIt is provided &quot;as is&quot; without any
						warranties, expressed or implied. We shall not be liable
						for any damages arising from:
					</p>
					<ul>
						<li>Use or inability to use our service</li>
						<li>
							Loss of data or images (though processing is local
							to your device)
						</li>
						<li>Service interruptions or technical issues</li>
						<li>
							Any indirect, incidental, or consequential damages
						</li>
					</ul>

					<h2>6. Privacy and Data Protection</h2>

					<p>
						Your privacy is important to us. Our privacy practices
						are detailed in our
						<a
							href='/privacy'
							className='text-blue-600 hover:underline'>
							Privacy Policy
						</a>
						. Key points include:
					</p>
					<ul>
						<li>Images are processed locally in your browser</li>
						<li>We do not store or access your images</li>
						<li>We collect minimal, anonymous usage analytics</li>
						<li>
							We do not share personal information with third
							parties
						</li>
					</ul>

					<h2>7. Intellectual Property</h2>

					<p>
						The ResizeIt service, including its design,
						functionality, and code, is protected by intellectual
						property laws. You may not:
					</p>
					<ul>
						<li>Copy, modify, or distribute our service</li>
						<li>Reverse engineer our algorithms or code</li>
						<li>
							Use our branding or trademarks without permission
						</li>
						<li>Create derivative works based on our service</li>
					</ul>

					<h2>8. Termination</h2>

					<p>
						We reserve the right to terminate or suspend access to
						our service immediately, without prior notice, for any
						reason, including but not limited to:
					</p>
					<ul>
						<li>Violation of these Terms of Service</li>
						<li>Fraudulent or illegal activity</li>
						<li>Abuse of our service or systems</li>
					</ul>

					<h2>9. Changes to Terms</h2>

					<p>
						We reserve the right to modify these terms at any time.
						Changes will be effective immediately upon posting on
						this page. Your continued use of the service after any
						changes constitutes acceptance of the new terms.
					</p>

					<h2>10. Governing Law</h2>

					<p>
						These terms shall be governed by and construed in
						accordance with applicable laws. Any disputes arising
						from these terms or use of our service shall be resolved
						through appropriate legal channels.
					</p>

					<h2>11. Contact Information</h2>

					<p>
						If you have any questions about these Terms of Service,
						please contact us:
					</p>
					<ul>
						<li>Email: legal@example.com</li>
						<li>
							Contact Form:{" "}
							<a
								href='/contact'
								className='text-blue-600 hover:underline'>
								example.com/contact
							</a>
						</li>
					</ul>

					<h2>12. Severability</h2>

					<p>
						If any provision of these terms is found to be
						unenforceable or invalid, that provision shall be
						limited or eliminated to the minimum extent necessary so
						that these terms shall otherwise remain in full force
						and effect.
					</p>

					<div className='bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8'>
						<h3 className='text-lg font-semibold text-slate-900 mb-2'>
							Questions?
						</h3>
						<p className='text-slate-700'>
							If you have any questions about these terms or need
							clarification on any point, please don&apos;t
							hesitate to{" "}
							<a
								href='/contact'
								className='text-blue-600 hover:underline'>
								contact us
							</a>
							. We&apos;re here to help!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
