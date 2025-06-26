import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500">
      {/* Header */}
      <header className="p-8">
        <h1 className="text-4xl font-thin text-purple-800 opacity-80 tracking-wide">
          tai ray
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-center px-8 py-16 gap-16 max-w-7xl mx-auto">
        {/* Hero Image */}
        <div className="flex-shrink-0">
          <div className="w-80 h-96 lg:w-96 lg:h-[480px] overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/tai-hero.png"
              alt="Tai Ray"
              width={400}
              height={500}
              className="w-full h-full object-cover grayscale"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left space-y-8">
          {/* Large Title */}
          <div className="space-y-4">
            <h2 className="text-8xl lg:text-9xl font-black text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text drop-shadow-lg tracking-tight">
              TAI
            </h2>
            <p className="text-2xl text-purple-800 font-light tracking-widest uppercase">
              (NEW ALBUM COMING SOON)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-8">
            <a 
              href="https://www.youtube.com/@tairaymusic"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full lg:w-80 py-4 px-8 border-2 border-purple-800 text-purple-800 bg-transparent rounded-full text-lg font-medium uppercase tracking-widest hover:bg-purple-800 hover:text-white transition-all duration-300 text-center decoration-none"
            >
              Listen
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61556688602391"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full lg:w-80 py-4 px-8 border-2 border-purple-800 text-purple-800 bg-transparent rounded-full text-lg font-medium uppercase tracking-widest hover:bg-purple-800 hover:text-white transition-all duration-300 text-center decoration-none"
            >
              Follow
            </a>
          </div>
        </div>
      </main>

      {/* Newsletter Signup */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-lg text-purple-800 uppercase tracking-widest mb-8">
            Sign up for updates from Tai
          </h4>
          
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="EMAIL"
                className="flex-1 py-4 px-6 bg-transparent border-b-2 border-purple-800 text-purple-800 placeholder-purple-700 focus:outline-none focus:border-purple-600 uppercase tracking-wider text-center"
              />
              <input
                type="text"
                placeholder="POSTAL CODE"
                className="flex-1 py-4 px-6 bg-transparent border-b-2 border-purple-800 text-purple-800 placeholder-purple-700 focus:outline-none focus:border-purple-600 uppercase tracking-wider text-center"
              />
            </div>
            
            <button
              type="submit"
              className="py-4 px-12 border-2 border-purple-800 text-purple-800 bg-transparent rounded-full text-lg font-medium uppercase tracking-widest hover:bg-purple-800 hover:text-white transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
