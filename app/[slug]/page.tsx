import ImageCompressor from "@/components/image-compressor";
import { slugs } from "@/lib/slug";
import { Metadata } from "next";

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c: string) => c.toUpperCase());
  return {
    title: `${title} | Best Free Image Compressor And Resizer`,
    description: `Easily ${title.toLowerCase()} using our free image optimizer.`,
  };
}

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c: string) => c.toUpperCase());

  return (
    <main className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto flex items-center justify-center flex-col py-6 md:py-9 px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-lg text-gray-600">
          Easily {title.toLowerCase()} using our free image optimizer.
        </p>
      </div>
      <ImageCompressor />
    </main>
  );
};

export default SlugPage;
