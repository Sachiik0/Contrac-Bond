export default function PitchPage() {
  return (
    <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* Slide 1: Hero */}
      <section
        className="h-screen w-full snap-start flex flex-col justify-center items-start px-24 text-left"
        style={{ background: "linear-gradient(to top right, var(--primary-hover), var(--primary))" }}
      >
        <h1 className="text-7xl font-black tracking-tight">Contrac-Bond</h1>
        <p className="text-2xl mt-4 font-medium">Protect Your Work. Protect Your Worth.</p>
        <button className="mt-8 px-6 py-3 bg-[var(--accent)] text-white font-bold rounded-full shadow hover:bg-blue-400 transition">
          Learn More
        </button>
      </section>

      {/* Slide 2: Introduction */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-start px-24 space-y-6 bg-[var(--card-bg)]">
        <h2 className="text-4xl font-bold">Hi, I’m Marc</h2>
        <p className="text-xl">I’m a freelance artist, cosplayer, and prototype builder for:</p>
        <ul className="text-lg list-none space-y-1">
          <li>🎓 College thesis projects</li>
          <li>💡 Personal inventions</li>
          <li>🚀 Startup MVPs</li>
        </ul>
        <p className="text-xl italic mt-6">And there’s one thing that scares all freelancers and artists...</p>
      </section>

      {/* Slide 3: The Risk */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-start px-24 space-y-6 bg-[#fef3c7]">
        <h2 className="text-4xl font-bold">The Risk</h2>
        <div className="space-y-2">
          <p className="text-lg">“Let’s collab, I’ll pay you after!”</p>
          <p className="text-lg">“No need for paperwork, I got you.”</p>
        </div>
        <ul className="list-disc list-inside text-lg">
          <li>❌ Scope gets vague</li>
          <li>❌ Payment gets delayed</li>
          <li>❌ Work gets stolen</li>
          <li>❌ No legal backup</li>
        </ul>
        <p className="text-sm italic text-gray-600">📊 74% of freelancers face late or no payment — Freelancers Union, 2022</p>
      </section>

      {/* Slide 4: The Solution */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-start px-24 space-y-6 bg-[var(--card-border)]">
        <h2 className="text-4xl font-bold">Introducing Contrac-Bond</h2>
        <ul className="list-disc list-inside text-lg">
          <li>📝 Create NDAs, Work, and Collaboration Agreements</li>
          <li>📄 Auto-fill PDF templates with project details</li>
          <li>🤖 Smart AI clause suggestions</li>
          <li>🔐 Store securely, access anytime</li>
          <li>🔄 Share with clients before work begins</li>
        </ul>
        <p className="text-xl italic">No lawyer. No hassle. Just clarity.</p>
      </section>

      {/* Slide 5: What’s Next */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-start px-24 space-y-6 bg-[var(--success)] text-white">
        <h2 className="text-4xl font-bold">What’s Next?</h2>
        <ul className="list-disc list-inside text-lg">
          <li>✅ MVP in development</li>
          <li>✅ Built for freelancers, by a freelancer</li>
          <li>🎯 Ready to help creatives protect their work</li>
        </ul>
      </section>

      {/* Slide 6: Call to Action */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-start px-24 space-y-4 bg-black text-white">
        <h2 className="text-3xl font-bold">Let’s stop handshake deals from ruining great work.</h2>
        <p className="text-lg">
          Contact us: <a href="mailto:contrac-bond@gmail.com" className="underline text-[var(--primary)]">contrac-bond@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
