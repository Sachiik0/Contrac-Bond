export default function PitchPage() {
  return (
    <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-[#f8fafc] text-[#1f2937] font-sans">
      {/* Slide 1: Title */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Contrac-Bond</h1>
        <p className="text-2xl mt-4 font-medium">Protect Your Work. Protect Your Worth.</p>
      </section>

      {/* Slide 2: Introduction & Problem */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-6">
        <h2 className="text-4xl font-bold">Introduction & Problem</h2>
        <p className="max-w-2xl">Hi, I’m Marc. I’m a freelance artist, cosplayer, and prototype builder for thesis students, startups, and personal projects.</p>
        <p className="max-w-2xl">But there’s one big problem: many collaborations start without contracts.</p>
        <ul className="list-disc text-left list-inside text-lg max-w-xl">
          <li>Scope creep</li>
          <li>Ghosting on payment</li>
          <li>No legal protection</li>
          <li>Stolen ideas due to lack of NDAs</li>
          <li>Unclear project ownership without DAs</li>
        </ul>
        <p className="text-sm text-gray-500 italic">📊 74% of freelancers have dealt with late or non-payment — Freelancers Union, 2022</p>
      </section>

      {/* Slide 3: Solution & How It Works */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-6 bg-white text-black">
        <h2 className="text-4xl font-bold">Solution & How It Works</h2>
        <p className="max-w-2xl text-lg"><strong>Contrac-Bond</strong> is a contract builder designed for freelancers and creatives.</p>
        <ul className="list-disc text-left list-inside max-w-xl text-lg">
          <li>Choose contract type: NDA, DA, Work Agreement, etc.</li>
          <li>Fill out client and project details in a simple form</li>
          <li>AI-assisted suggestions for other agreements</li>
          <li>Auto-generate PDF contracts</li>
          <li>Share for client review and e-signature</li>
        </ul>
        <p className="text-sm text-gray-500 italic">📌 Only 28% of freelancers use formal contracts — Payoneer Report, 2023</p>
      </section>

      {/* Slide 4: Target Market & Value */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-6">
        <h2 className="text-4xl font-bold">Target Market & Value</h2>
        <ul className="list-disc text-left list-inside max-w-xl text-lg">
          <li>Freelancers (designers, artists, developers)</li>
          <li>Cosplayers and makers</li>
          <li>Students with commissioned work</li>
          <li>Startups and small teams</li>
          <li>Clients needing NDAs</li>
        </ul>
        <p className="text-lg">🌍 1.57B freelancers globally — Statista, 2024</p>
        <p className="text-lg">📈 Creative freelancers are 2x more likely to face non-payment — Upwork, 2023</p>
        <p className="max-w-xl text-lg">Contrac-Bond prevents scope violations, secures IP, and simplifies agreements — building trust and professionalism in the freelance world.</p>
      </section>

      {/* Slide 5: Work Plan */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-6 bg-[#eef2ff] text-black">
        <h2 className="text-4xl font-bold">Work Plan & Tech Stack</h2>
        <ul className="list-disc text-left list-inside max-w-xl text-lg">
          <li><strong>Frontend:</strong> Next.js</li>
          <li><strong>Backend:</strong> Supabase (Auth, DB, Storage)</li>
          <li><strong>PDF Handling:</strong> pdf-lib</li>
          <li><strong>Styling:</strong> Tailwind CSS</li>
        </ul>
        <p className="font-semibold">Development Milestones:</p>
        <ul className="list-disc text-left list-inside max-w-xl text-lg">
          <li>UI Builder → ✅</li>
          <li>Supabase setup → ✅</li>
          <li>PDF integration → 🔄</li>
          <li>Contract sharing & storage → 🔄</li>
          <li>E-signature support → 🔜</li>
        </ul>
      </section>
    </main>
  );
}