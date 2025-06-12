export default function PitchPage() {
  return (
    <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white font-sans">
      {/* Slide 1: Title */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6">
        <h1 className="text-5xl font-bold">Contrac-Bond</h1>
        <p className="text-xl mt-4">Protect Your Work. Protect Your Worth.</p>
      </section>

      {/* Slide 2: Introduction & Problem */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-4">
        <h2 className="text-3xl font-semibold">Introduction & Problem Statement</h2>
        <p>Hi, I’m Marc. I’m a freelance artist, cosplayer, and prototype builder for college thesis students, startups, and personal projects.</p>
        <p>But there’s one big problem: many collaborations start without contracts.</p>
        <ul className="list-disc text-left list-inside">
          <li>Scope creep</li>
          <li>Ghosting on payment</li>
          <li>No legal protection</li>
          <li>Lack of Non-Disclosure Agreements (NDAs) leads to stolen ideas</li>
          <li>No Development Agreements (DAs) causes confusion in project ownership</li>
        </ul>
        <p className="text-sm text-gray-400">📊 74% of freelancers have dealt with late or non-payment at least once — Freelancers Union, 2022</p>
      </section>

      {/* Slide 3: Solution & How It Works */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-4">
        <h2 className="text-3xl font-semibold">Proposed Solution & How It Works</h2>
        <p><strong>Contrac-Bond</strong> is an online contract builder for freelancers and artists.</p>
        <ul className="list-disc text-left list-inside">
          <li>Create contracts from templates (NDA, DA, Work Agreements)</li>
          <li>Auto-fill fields into PDF</li>
          <li>Store and retrieve via Supabase</li>
          <li>Share with clients before starting work</li>
        </ul>
        <p className="text-sm text-gray-400">📌 Only 28% of freelancers use formal contracts — Payoneer Global Freelancer Report, 2023</p>
      </section>

      {/* Slide 4: Market & Value */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-4">
        <h2 className="text-3xl font-semibold">Target Market & Value</h2>
        <ul className="list-disc text-left list-inside">
          <li>Freelancers (designers, artists, devs)</li>
          <li>Cosplayers, prop makers</li>
          <li>Students with commissioned school work</li>
          <li>Small agency owners</li>
          <li>Clients needing NDAs for collabs</li>
          <li>Teams using DAs (Development Agreements)</li>
        </ul>
        <p>🌍 1.57B freelancers globally — Statista, 2024</p>
        <p>📈 Creative freelancers are 2x more likely to face non-payment — Upwork Study, 2023</p>
        <p>Contrac-Bond prevents scope violations, secures IP through NDA/DA, and simplifies contract workflows.</p>
      </section>

      {/* Slide 5: Work Plan */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center px-6 text-center space-y-4">
        <h2 className="text-3xl font-semibold">Work Plan</h2>
        <ul className="list-disc text-left list-inside">
          <li>Frontend: Next.js</li>
          <li>Backend: Supabase (Auth, DB, Storage)</li>
          <li>PDF Handling: pdf-lib or pdf-fill-form</li>
          <li>Styling: Tailwind CSS</li>
        </ul>
        <p><strong>Milestones:</strong></p>
        <ul className="list-disc text-left list-inside">
          <li>UI Builder → ✅</li>
          <li>Supabase setup → ✅</li>
          <li>PDF integration → 🔄</li>
          <li>Sharing & storing contracts → 🔄</li>
          <li>E-signature support → 🔜</li>
        </ul>
      </section>
    </main>
  );
}
