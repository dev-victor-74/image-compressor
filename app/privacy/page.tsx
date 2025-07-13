import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Best Free Image Compressor And Resizer",
  description:
    "Our privacy policy explains how we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy describes how we collect, use, and protect
              your information when you use our image compression and resizing
              tools. We are committed to protecting your privacy and ensuring
              the security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Images You Upload
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Important:</strong> Your images are processed locally
                  in your browser and are never uploaded to our servers. We do
                  not store, collect, or have access to your images at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Usage Analytics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect anonymous usage statistics to improve our
                  service, such as:
                </p>
                <ul className="text-gray-600 ml-6 mt-2 space-y-1">
                  <li>• Number of images processed</li>
                  <li>• File types and sizes</li>
                  <li>• Compression ratios achieved</li>
                  <li>• Browser and device information</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-gray-600 ml-6 space-y-2">
                <li>• Provide and improve our image compression services</li>
                <li>• Analyze usage patterns to enhance user experience</li>
                <li>• Fix bugs and technical issues</li>
                <li>• Ensure the security and reliability of our platform</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your
              information:
            </p>
            <ul className="text-gray-600 ml-6 mt-2 space-y-2">
              <li>• All data transmission is encrypted using HTTPS</li>
              <li>• Images are processed locally in your browser</li>
              <li>• No personal data is stored on our servers</li>
              <li>• Regular security audits and updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use Tinify's API for image compression. While we don't upload
              your images to their servers (processing happens locally), their
              privacy policy may apply to any metadata or analytics data that
              might be shared. We recommend reviewing their privacy policy for
              complete information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use cookies and similar technologies to:
            </p>
            <ul className="text-gray-600 ml-6 mt-2 space-y-2">
              <li>• Remember your preferences</li>
              <li>• Analyze website traffic and usage</li>
              <li>• Improve our service performance</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="text-gray-600 ml-6 mt-2 space-y-2">
              <li>• Access any personal data we may have about you</li>
              <li>• Request deletion of your data</li>
              <li>• Opt out of analytics and tracking</li>
              <li>• Contact us with privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify users of any material changes by posting the new policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: privacy@imagecompressor.com
            </p>
          </section>

          <div className="border-t pt-6">
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
