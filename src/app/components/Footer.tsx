// app/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-gray-600 relative z-10">
        <div className="relative h-8 w-40">
          <Image
            src="/ecolibrium-logo-black.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} ECOTRICITY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
