const navLinks = ["Blog", "Contact"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf6f1]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between text-[#223614]">
          <span className="text-2xl font-semibold tracking-tight sm:text-[32px]">
            Lilac Template
          </span>
          <nav className="flex gap-8 text-base sm:text-[19px]">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:opacity-70">
                {link}
              </a>
            ))}
          </nav>
        </header>

        <section className="mt-16 grid items-center gap-16 lg:mt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg"
              alt="Lilac bouquet"
              className="h-auto w-full max-w-[490px] object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-6 text-[#223614]">
            <h1 className="max-w-md text-[48px] leading-[1.05] sm:text-[70px]">
              Live your life
              <br />
              in full bloom
            </h1>
            <p className="text-base sm:text-[19px]">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-[#223614] px-7 py-3 text-xs uppercase tracking-[0.08em] sm:text-[14px]"
            >
              Connect with me <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
