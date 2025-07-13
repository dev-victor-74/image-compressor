import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Best Free Image Compressor And Resizer",
  description: "Learn about our free image compression and resizing tools.",
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Our Image Tools
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide free, powerful image compression and resizing tools
              that help you optimize your images for web use, reduce file sizes,
              and improve loading times. Our tools support JPEG, PNG, and WebP
              formats, ensuring compatibility across all platforms and devices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Our Tools?
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>100% free to use with no hidden costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>No registration or account required</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Your images are processed locally and never uploaded to our
                  servers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Advanced compression algorithms for optimal file size
                  reduction
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support for multiple image formats</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We believe that powerful image optimization tools should be
              accessible to everyone. Whether you're a web developer, content
              creator, or just someone who wants to optimize their photos, our
              tools are designed to be simple, effective, and completely free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Technology
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our tools are built using modern web technologies and leverage
              industry-standard compression algorithms to ensure the best
              possible results while maintaining image quality. We use Tinify's
              powerful API for reliable and efficient image compression.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
