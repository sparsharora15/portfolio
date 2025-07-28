import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparsh Arora | Full‑Stack Developer</title>
        <meta name="description" content="Portfolio of Sparsh Arora, full‑stack developer specialized in React, Next.js, Node.js and PostgreSQL." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}