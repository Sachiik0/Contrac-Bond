'use client';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  const [showHeader, setShowHeader] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);
  const lastScrollYRef = useRef(0);

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeader(!(scrollY > lastScrollYRef.current && scrollY > 50));
      lastScrollYRef.current = scrollY;
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentSection((prev) => {
          const next = Math.min(prev + 1, sectionRefs.current.length - 1);
          scrollToSection(next);
          return next;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentSection((prev) => {
          const next = Math.max(prev - 1, 0);
          scrollToSection(next);
          return next;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const sections = [
    {
      className: 'bg-bumbleYellow text-black',
      content: (
        <>
          <h1>Contrac-Bond</h1>
          <p>Protect Your Work. Protect Your Worth.</p>
          <button onClick={() => scrollToSection(1)}>Learn More</button>
        </>
      ),
    },
    {
      className: 'bg-bumbleBeige text-black',
      content: (
        <>
          <h2>Hi, I’m Marc</h2>
          <p>I’m a freelance artist, cosplayer, and prototype builder for:</p>
          <ul>
            <li>🎓 College thesis projects</li>
            <li>💡 Personal inventions</li>
            <li>🚀 Startup MVPs</li>
          </ul>
          <p><em>And there’s one thing that scares all freelancers and artists...</em></p>
        </>
      ),
    },
    {
      className: 'bg-bumbleYellow text-black',
      content: (
        <>
          <h2>The Risk</h2>
          <p>“Let’s collab, I’ll pay you after!”<br />“No need for paperwork, I got you.”</p>
          <ul>
            <li>❌ Scope gets vague</li>
            <li>❌ Payment gets delayed</li>
            <li>❌ Work gets stolen</li>
            <li>❌ No legal backup</li>
          </ul>
          <p><em>📊 74% of freelancers face late or no payment — Freelancers Union, 2022</em></p>
        </>
      ),
    },
    {
      className: 'bg-bumbleBeige text-black',
      content: (
        <>
          <h2>Introducing Contrac-Bond</h2>
          <ul>
            <li>📝 Create NDAs, Work, and Collaboration Agreements</li>
            <li>📄 Auto-fill PDF templates with project details</li>
            <li>🤖 Smart AI clause suggestions</li>
            <li>🔐 Store securely, access anytime</li>
            <li>🔄 Share with clients before work begins</li>
          </ul>
          <p><em>No lawyer. No hassle. Just clarity.</em></p>
        </>
      ),
    },
    {
      className: 'bg-bumbleYellow text-black',
      content: (
        <>
          <h2>What’s Next?</h2>
          <ul>
            <li>✅ MVP in development</li>
            <li>✅ Built for freelancers, by a freelancer</li>
            <li>🎯 Ready to help creatives protect their work</li>
          </ul>
        </>
      ),
    },
    {
      className: 'bg-black text-white',
      content: (
        <>
          <h2>Let’s stop handshake deals from ruining great work.</h2>
          <p>
            Contact us:{" "}
            <a href="mailto:contrac-bond@gmail.com" className="underline text-bumbleYellow">
              contrac-bond@gmail.com
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[75px] px-6 flex items-center justify-between transition-transform duration-300 bg-[#FFF6E5] z-50 ${
          showHeader ? '' : '-translate-y-full'
        }`}
      >
        <div className="text-[28px] font-bold text-black font-sans">Contrac-Bond</div>
        <nav className="flex space-x-4">
          <button
            onClick={() =>
              window.open('https://forms.gle/wsBmwRvb3QrraAQu7', '_blank')
            }
            className="px-4 py-2 bg-[#FFDC00] text-black font-semibold rounded-full hover:bg-[#f5c700] transition"
          >
            Early Access
          </button>
          <button
            onClick={() => scrollToSection(sections.length - 1)}
            className="px-4 py-2 bg-[#FFDC00] text-black font-semibold rounded-full hover:bg-[#f5c700] transition"
          >
            Contact us
          </button>
        </nav>
      </header>



      <main className="pt-[75px] h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory">
        {sections.map((section, i) => (
          <section
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            className={`${section.className} snap-start px-6 py-12 flex flex-col justify-center`}
          >
            {section.content}
          </section>
        ))}
      </main>
    </>
  );
}
