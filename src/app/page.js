import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          College Discovery
        </h1>

        <div className="space-x-6">
          <Link
            href="/"
            className="cursor-pointer hover:text-gray-200"
          >
            Home
          </Link>

          <Link
            href="/colleges"
            className="cursor-pointer hover:text-gray-200"
          >
            Colleges
          </Link>

          <Link
            href="/compare"
            className="cursor-pointer hover:text-gray-200"
          >
            Compare
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-10 py-16 gap-10">

        <div className="max-w-xl">

          <h1 className="text-5xl font-bold text-blue-700">
            Find Your Dream College
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Compare colleges, check fees, explore courses
            and find the best college for your future.
          </p>

          <div className="flex gap-4 mt-8">

            <Link href="/colleges">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                Search Colleges
              </button>
            </Link>

            <Link href="/compare">
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 cursor-pointer">
                Compare Colleges
              </button>
            </Link>

          </div>

        </div>

        <Image
          src="/images/college.jpg"
          alt="College"
          width={500}
          height={350}
          className="rounded-xl shadow-xl"
        />

      </section>

    </div>
  );
}