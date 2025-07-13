import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Best Free Image Compressor And Resizer",
  description:
    "Get in touch with us for support or feedback about our image compression tools.",
};

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Support
                </h3>
                <p className="text-gray-600">
                  Need help with our image compression tools? We're here to
                  help!
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Feedback
                </h3>
                <p className="text-gray-600">
                  We'd love to hear your suggestions for improving our tools.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Bug Reports
                </h3>
                <p className="text-gray-600">
                  Found an issue? Please let us know so we can fix it quickly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">support@imagecompressor.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600">
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Is this service really free?
              </h3>
              <p className="text-gray-600">
                Yes! Our image compression tools are completely free to use with
                no hidden costs or limitations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                What image formats do you support?
              </h3>
              <p className="text-gray-600">
                We support JPEG, PNG, and WebP formats for both compression and
                resizing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Are my images safe?
              </h3>
              <p className="text-gray-600">
                Absolutely! Your images are processed locally in your browser
                and are never uploaded to our servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
