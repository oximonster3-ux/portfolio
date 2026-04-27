import { useEffect } from "react";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    n: "01",
    title: "Editorial Quarterly",
    role: "Art Direction · Print",
    year: "2024",
    img: project1,
  },
  {
    n: "02",
    title: "Atrium",
    role: "Brand Identity · Architecture",
    year: "2024",
    img: project2,
  },
  {
    n: "03",
    title: "Folded Stories",
    role: "Photography · Editorial",
    year: "2023",
    img: project3,
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Estudio — Portfolio editorial";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Portfolio editorial minimalista. Dirección de arte, identidad visual y fotografía."
    );
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-background/70 border-b border-foreground/10">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="display-serif text-xl">Estudio</a>
          <ul className="hidden sm:flex items-center gap-8 eyebrow">
            <li><a href="#work" className="link-underline">Work</a></li>
            <li><a href="#about" className="link-underline">About</a></li>
            <li><a href="#contact" className="link-underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        <p className="eyebrow text-muted-foreground mb-8 fade-in-up">
          Portfolio · Est. 2019
        </p>
        <h1 className="display-serif text-5xl sm:text-7xl md:text-8xl mb-10 fade-in-up">
          Diseño editorial<br />
          para marcas que <em className="italic text-muted-foreground">leen entre líneas.</em>
        </h1>
        <div className="rule mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="eyebrow text-muted-foreground mb-2">Estudio</p>
            <p>Independiente, basado en Madrid. Trabajando globalmente desde 2019.</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-2">Práctica</p>
            <p>Identidad, dirección de arte, libros y editoriales impresas o digitales.</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-2">Disponibilidad</p>
            <p>Aceptando proyectos para Q3 2025.</p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section aria-hidden className="border-y border-foreground/15 py-6 overflow-hidden">
        <div className="flex gap-12 marquee whitespace-nowrap display-serif text-3xl sm:text-4xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>Identidad</span><span className="italic text-muted-foreground">·</span>
              <span>Editorial</span><span className="italic text-muted-foreground">·</span>
              <span>Dirección de arte</span><span className="italic text-muted-foreground">·</span>
              <span>Fotografía</span><span className="italic text-muted-foreground">·</span>
              <span>Tipografía</span><span className="italic text-muted-foreground">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-3xl mx-auto px-6 py-32">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="display-serif text-4xl sm:text-5xl">Trabajos seleccionados</h2>
          <span className="eyebrow text-muted-foreground">2023 — 2024</span>
        </div>

        <ul className="space-y-24">
          {projects.map((p) => (
            <li key={p.n} className="group">
              <div className="overflow-hidden bg-card mb-6">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <div>
                  <p className="eyebrow text-muted-foreground mb-2">{p.n} — {p.year}</p>
                  <h3 className="display-serif text-3xl sm:text-4xl">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground text-right shrink-0">{p.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="border-t border-foreground/15">
        <div className="max-w-3xl mx-auto px-6 py-32 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="overflow-hidden bg-card">
              <img
                src={portrait}
                alt="Retrato del fundador del estudio"
                loading="lazy"
                width={896}
                height={1152}
                className="w-full h-auto block grayscale"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground mb-6">Sobre</p>
            <p className="display-serif text-3xl sm:text-4xl mb-8 leading-tight">
              Creo objetos impresos y digitales con la convicción de que <em className="italic">el silencio también comunica.</em>
            </p>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Llevo más de una década dando forma a libros, identidades y editoriales para
                galerías, casas de moda y publicaciones independientes.
              </p>
              <p>
                Mi trabajo ha sido publicado en It's Nice That, Slanted y Eye Magazine, y ha
                recibido reconocimiento en los TDC Awards y la Bienal Iberoamericana de Diseño.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-foreground/15">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <p className="eyebrow text-muted-foreground mb-8">Conversemos</p>
          <h2 className="display-serif text-5xl sm:text-7xl mb-10">
            ¿Tienes una idea<br />
            <em className="italic text-muted-foreground">que merezca papel?</em>
          </h2>
          <a
            href="mailto:hola@estudio.com"
            className="display-serif text-2xl sm:text-3xl link-underline"
          >
            hola@estudio.com
          </a>
          <div className="rule mt-20 mb-8" />
          <ul className="flex justify-center gap-8 eyebrow text-muted-foreground">
            <li><a href="#" className="link-underline">Instagram</a></li>
            <li><a href="#" className="link-underline">Are.na</a></li>
            <li><a href="#" className="link-underline">LinkedIn</a></li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-foreground/15">
        <div className="max-w-3xl mx-auto px-6 py-8 flex justify-between eyebrow text-muted-foreground">
          <span>© 2025 Estudio</span>
          <span>Madrid · ESP</span>
        </div>
      </footer>
    </main>
  );
};

export default Index;
