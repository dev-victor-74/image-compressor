import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Download,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  Users,
  Globe,
  Maximize2,
  FileImage,
  Gauge,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Process images in seconds with our optimized compression algorithms",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Secure",
      description:
        "Your images are processed locally and never stored on our servers",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered",
      description:
        "Smart compression that maintains visual quality while reducing file size",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Any Format",
      description:
        "Support for JPEG, PNG, WebP with batch processing capabilities",
    },
  ];

  const stats = [
    { number: "10M+", label: "Images Processed" },
    { number: "500K+", label: "Happy Users" },
    { number: "85%", label: "Average Compression" },
    { number: "99.9%", label: "Uptime" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Web Designer",
      content:
        "This tool has revolutionized my workflow. I can compress hundreds of images in minutes!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "E-commerce Manager",
      content:
        "Our website loads 3x faster after using this compression tool. Amazing results!",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Photographer",
      content:
        "Perfect balance between file size and quality. Exactly what I needed for my portfolio.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="border-b border-violet-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-md overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="ImagePro"
                  width={32}
                  height={32}
                  className="w-7 h-7 "
                />
              </div>
              <span className="text-xl font-bold text-gray-900">ImagePro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Button className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
            <Sparkles className="w-4 h-4 mr-1" />
            New: Batch Processing Available
          </Button>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Compress Images
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Without Losing Quality
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional image compression and resizing tools that reduce file
            sizes by up to 85% while maintaining stunning visual quality.
            Perfect for websites, apps, and digital marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/compress-images">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Compressing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/resize-images">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 hover:bg-gray-50"
              >
                <Maximize2 className="w-5 h-5 mr-2" />
                Resize Images
              </Button>
            </Link>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <Card className="relative border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-500 ml-2">
                        ImagePro.xyz
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <FileImage className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">
                          Original: 2.4 MB
                        </span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2 mb-3">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-full"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700">
                          Compressed: 380 KB (84% saved)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      See the difference
                    </h3>
                    <p className="text-gray-600">
                      Our advanced algorithms compress your images while
                      preserving the quality that matters most.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Gauge className="w-4 h-4" />
                        <span>Fast processing</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ImagePro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for professionals who demand the best compression quality
              and fastest processing speeds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to perfect image compression
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload Images",
                description:
                  "Drag and drop your images or click to select files. Support for JPEG, PNG, and WebP formats.",
                icon: <Download className="w-8 h-8" />,
              },
              {
                step: "2",
                title: "AI Processing",
                description:
                  "Our advanced algorithms analyze and compress your images while maintaining visual quality.",
                icon: <Sparkles className="w-8 h-8" />,
              },
              {
                step: "3",
                title: "Download Results",
                description:
                  "Get your compressed images instantly. Download individually or as a batch ZIP file.",
                icon: <Download className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full text-white text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who trust ImagePro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about image compression and resizing
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do you compress images without losing quality?",
                answer:
                  "We use advanced AI algorithms that smartly remove unnecessary data while preserving important details. Our system combines lossless and optimized lossy compression, allowing up to 85% file size reduction with minimal visible quality loss.",
              },
              {
                question: "What is the best image format for the web?",
                answer:
                  "WebP is usually the best format, offering 25-35% better compression than JPEG with excellent quality. JPEG is great for photographs and wide compatibility, while PNG is best for images with transparency or sharp edges like logos.",
              },
              {
                question: "How much can I compress an image?",
                answer:
                  "Compression depends on image type and content. Photos typically shrink by 60-85%, while graphics reduce by 40-70%, all without noticeable quality loss. Our tool automatically adjusts settings for optimal results.",
              },
              {
                question: "Does compressing images reduce their quality?",
                answer:
                  "Modern compression techniques minimize quality loss. Although some compression is lossy, our AI keeps key visual details intact, making quality differences nearly invisible in most cases.",
              },
              {
                question:
                  "What’s the difference between JPEG and PNG compression?",
                answer:
                  "JPEG uses lossy compression, ideal for photos with gradients, producing smaller files. PNG uses lossless compression, perfect for graphics, text, or images requiring transparency but results in larger file sizes.",
              },
              {
                question: "How can I resize images for social media?",
                answer:
                  "Each platform has recommended sizes: Instagram posts (1080x1080), Facebook covers (820x312), Twitter headers (1500x500), LinkedIn banners (1584x396). Our tool includes presets and maintains aspect ratios to avoid distortion.",
              },
              {
                question: "Can I batch compress multiple images?",
                answer:
                  "Yes! Upload multiple images at once, compress them together, and download either individually or as a ZIP file to save time.",
              },
              {
                question: "Is it safe to upload images for compression?",
                answer:
                  "Yes. We prioritize your privacy. Compression happens client-side when possible, and any server-side processing is secure with immediate deletion of your files. We never store or share your images.",
              },
              {
                question: "What is the maximum file size supported?",
                answer:
                  "You can upload images up to 10MB each. For larger files, pre-resizing or batch compressing smaller images is recommended.",
              },
              {
                question: "How do image optimizations improve website speed?",
                answer:
                  "Optimized images reduce file sizes and load times, improving user experience and SEO. Use compressed images, correct formats like WebP, resize images to display size, lazy load, and serve responsive images.",
              },
              {
                question: "Does image compression affect SEO?",
                answer:
                  "Yes! Faster page loads due to smaller images boost SEO rankings, reduce bounce rates, and improve user engagement.",
              },
              {
                question: "Can I compress images on mobile devices?",
                answer:
                  "Absolutely! Our responsive web tool works on mobile, tablets, and desktops, allowing easy image upload, compression, and download.",
              },
              {
                question:
                  "What’s the difference between lossy and lossless compression?",
                answer:
                  "Lossy compression reduces file size by removing some data, potentially affecting quality slightly. Lossless compression reduces size without any quality loss, preserving all image details.",
              },
              {
                question: "Can I control the compression level?",
                answer:
                  "Yes, our tool lets you adjust compression levels so you can balance file size and image quality according to your needs.",
              },
              {
                question: "Do you support all image formats?",
                answer:
                  "We support common formats like JPEG, PNG, WebP, TIFF, BMP, SVG, and HEIC to ensure broad compatibility.",
              },
              {
                question: "Will compressing images affect their dimensions?",
                answer:
                  "No, compression reduces file size without changing image dimensions unless you choose to resize images manually.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-200 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <h1 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h1>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We are here to help!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Images?
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust ImagePro for their image
            compression needs. Start compressing today and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compress">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Compressing Now
              </Button>
            </Link>
            <Link href="/resize-images">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Maximize2 className="w-5 h-5 mr-2" />
                Try Image Resizer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                  <FileImage className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">ImagePro</span>
              </div>
              <p className="text-gray-400">
                Professional image compression and resizing tools for modern
                workflows.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/compress-images"
                    className="hover:text-white transition-colors"
                  >
                    Image Compressor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resize-imgaes"
                    className="hover:text-white transition-colors"
                  >
                    Image Resizer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/batch-compress-images"
                    className="hover:text-white transition-colors"
                  >
                    Batch Processing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                {/* <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link> */}
                {/* </li> */}
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ImagePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
