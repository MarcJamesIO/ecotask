import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Image from "next/image";
interface Resource {
  id: string;
  name: string;
  format?: string;
  description?: string;
  url: string;
}

interface Dataset {
  title: string;
  notes?: string;
  resources: Resource[];
}

async function getNesoData(): Promise<Dataset> {
  const res = await fetch(
    "https://api.neso.energy/api/3/action/package_show?id=embedded-wind-and-solar-forecasts",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch dataset");
  const data = await res.json();
  return {
    title: data.result.title,
    notes: data.result.notes,
    resources: data.result.resources,
  } as Dataset;
}

function stripHtml(html: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

export default async function Page() {
  let dataset: Dataset;
  try {
    dataset = await getNesoData();
  } catch {
    return (
      <main className="p-8 bg-white text-black">
        <h1 className="text-2xl font-bold">Couldn’t load the dataset.</h1>
      </main>
    );
  }

  return (
    <main className="font-sans bg-white text-black">
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <header className="absolute top-0 left-0 w-full px-8 py-4 z-20">
          <div className="relative h-10 w-60">
            <Image
              src="/svg-image-8.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </header>
        <div className="relative z-10 px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{dataset.title}</h1>
          {dataset.notes && (
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              {stripHtml(dataset.notes)}
            </p>
          )}
          <a
            href="#resources"
            className="inline-block px-12 py-4 mt-4 text-xs text-black rounded-full border-2 border-transparent hover:border-white"
            style={{ backgroundColor: "#B6F334", cursor: "pointer" }}
          >
            View Resources
          </a>
        </div>
        <div className="absolute bottom-0 h-8 w-full translate-y-[16px]">
          <Image
            src="/svg-image-3.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      <Resources resources={dataset.resources} />

      <Footer />
    </main>
  );
}
