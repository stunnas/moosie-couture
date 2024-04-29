import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-h-min py-1 px-4 flex items-center justify-between fixed border-b border-current rounded bg-white/60 backdrop-blur-md shadow-lg z-50">
      <Link className="flex items-center justify-center" href="#">
        <Image
          src="/main/MoosieCouture.webp"
          alt="Moosie Couture"
          width={200}
          height={200}
          className="h-12 w-12"
        />
        <span className="sr-only">Moosie Couture</span>
      </Link>
      <nav className="ml-auto flex space-x-4 sm:space-x-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Shop
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Testimonials
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
