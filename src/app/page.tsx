"use client";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Braces,
  ChevronDown,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Menu,
  MoonStar,
  Rocket,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Twitter,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = ["About", "Services", "Skills", "Projects", "Journey"];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Stores Built", value: "45+" },
  { label: "Apps Developed", value: "12+" },
  { label: "Client Satisfaction", value: "98%" },
];

const expertise = [
  "Shopify Development",
  "Shopify App Development",
  "Shopify APIs",
  "Liquid",
  "Shopify Plus",
  "Headless Commerce",
  "Hydrogen",
  "Performance Optimization",
  "CRO Optimization",
  "Ecommerce Automation",
];

const skills = [
  "Shopify",
  "Liquid",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Polaris",
  "Firebase",
  "MongoDB",
  "Tailwind CSS",
  "TypeScript",
  "REST APIs",
  "Vercel",
  "GitHub",
];

const services = [
  {
    title: "Shopify Store Development",
    icon: Store,
    text: "Conversion-ready storefronts with fast product discovery, premium UX, and resilient theme architecture.",
  },
  {
    title: "Shopify App Development",
    icon: Boxes,
    text: "Embedded Shopify apps, custom admin tools, private workflows, webhooks, billing, and Polaris interfaces.",
  },
  {
    title: "Theme Customization",
    icon: WandSparkles,
    text: "Liquid sections, metafields, schema-driven components, landing pages, and brand-specific design systems.",
  },
  {
    title: "Shopify Plus Solutions",
    icon: Rocket,
    text: "High-scale commerce builds with automation, checkout extensions, B2B flows, and operational polish.",
  },
  {
    title: "Headless Commerce",
    icon: Cpu,
    text: "Hydrogen, Next.js, Storefront API, and fast frontends for brands that need complete creative control.",
  },
  {
    title: "API Integrations",
    icon: Braces,
    text: "ERP, CRM, fulfillment, analytics, payments, marketing, and custom middleware integrations.",
  },
  {
    title: "Performance Optimization",
    icon: Zap,
    text: "Core Web Vitals, theme audits, asset strategy, app cleanup, and measurable speed improvements.",
  },
  {
    title: "Ecommerce Automation",
    icon: Code2,
    text: "Automated inventory, order routing, reporting, product sync, and no-fuss backend workflows.",
  },
];

const projects = [
  {
    title: "Aurora Fashion Plus",
    category: "Stores",
    stack: ["Shopify Plus", "Liquid", "CRO"],
    text: "A premium fashion storefront with advanced filtering, editorial PDPs, and performance-focused theme sections.",
    span: "lg:col-span-2",
  },
  {
    title: "MerchantFlow App",
    category: "Apps",
    stack: ["Polaris", "GraphQL", "Node.js"],
    text: "Embedded operations app for bulk product workflows, webhook automation, and merchant reporting.",
    span: "",
  },
  {
    title: "Hydrogen Beauty Lab",
    category: "Headless",
    stack: ["Hydrogen", "Storefront API", "Vercel"],
    text: "Headless commerce experience with blazing page transitions and campaign-ready content blocks.",
    span: "",
  },
  {
    title: "OpsSync Automation",
    category: "Automation",
    stack: ["REST APIs", "Firebase", "Shopify Flow"],
    text: "Inventory, fulfillment, and customer tagging automation connecting Shopify with internal business systems.",
    span: "lg:col-span-2",
  },
];

const journey = [
  "Delivered custom Shopify stores for growth-focused ecommerce founders.",
  "Collaborated with agencies on complex Shopify Plus and migration projects.",
  "Built custom Shopify apps, dashboards, webhooks, and SaaS-style admin tools.",
  "Supported international clients with automation, integrations, and performance upgrades.",
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "DTC Founder",
    text: "Ram turned our Shopify store into a polished selling machine. The speed, structure, and UX improvements were obvious immediately.",
  },
  {
    name: "Mia Reynolds",
    role: "Agency Partner",
    text: "Reliable, sharp, and product-minded. He understands both Shopify architecture and what a brand needs commercially.",
  },
  {
    name: "Noah Shah",
    role: "Operations Lead",
    text: "The custom app Ram built removed hours of manual workflow every week and gave the team a cleaner operating system.",
  },
  {
    name: "Elena Carter",
    role: "Ecommerce Manager",
    text: "Excellent Liquid, API, and performance work. The final result felt premium without becoming hard to maintain.",
  },
];

function MagneticCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(149,191,71,.18), transparent 42%)`;

  return (
    <motion.div
      className={cn("group relative overflow-hidden rounded-[2rem] glass", className)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
      whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <motion.div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background }} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 140, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 28 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 14);
      mouseY.set(event.clientY - 14);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden size-7 rounded-full border border-primary/70 mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
    />
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.08]" />
      <motion.div
        className="absolute left-[10%] top-[12%] size-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[18%] size-80 rounded-full bg-cyan/15 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, 90, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {Array.from({ length: 28 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute size-1 rounded-full bg-white/35"
          style={{ left: `${(index * 37) % 100}%`, top: `${(index * 19) % 100}%` }}
          animate={{ opacity: [0.15, 0.85, 0.15], y: [0, -22, 0] }}
          transition={{ duration: 4 + (index % 5), repeat: Infinity, delay: index * 0.16 }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-50 mx-auto w-[min(1120px,calc(100%-24px))] rounded-full border border-white/12 bg-deep/55 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <nav className="flex items-center justify-between">
        <a className="flex items-center gap-3 rounded-full px-2" href="#home">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-black text-deep">
            RP
          </span>
          <span className="font-display text-sm font-bold tracking-wide text-white">
            Ram Parmar
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm text-white/68 transition hover:bg-white/[0.08] hover:text-white"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            aria-label="Toggle navigation"
            className="md:hidden"
            size="icon"
            type="button"
            variant="outline"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>
      {open ? (
        <motion.div
          className="grid gap-1 px-2 pb-2 pt-3 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          {navItems.map((item) => (
            <a
              className="rounded-2xl px-4 py-3 text-sm text-white/76 hover:bg-white/10"
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      ) : null}
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.03fr_.97fr]">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Badge className="mb-6 gap-2 border-primary/25 bg-primary/10 text-primary">
            <Sparkles className="size-3.5" />
            Shopify Developer & App Builder
          </Badge>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.95] text-white md:text-7xl lg:text-8xl">
            Building Scalable{" "}
            <span className="gradient-text">Shopify Stores</span> & Powerful Shopify Apps
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            I craft high-converting Shopify experiences, custom apps, automation systems,
            and modern ecommerce solutions for growing brands.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#skills">
                Explore Skills <ChevronDown className="size-4" />
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index }}
                key={stat.label}
              >
                <div className="font-display text-3xl font-black text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/56">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto h-[620px] w-full max-w-[580px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-primary/35 via-cyan/20 to-transparent blur-3xl" />
          <MagneticCard className="absolute left-4 top-8 w-[78%] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">Commerce OS</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">Revenue Console</h3>
              </div>
              <ShoppingBag className="size-9 rounded-2xl bg-primary/15 p-2 text-primary" />
            </div>
            <div className="mt-8 h-44 rounded-[1.5rem] border border-white/10 bg-deep/70 p-4">
              <div className="flex h-full items-end gap-2">
                {[42, 74, 58, 92, 68, 104, 84].map((height, index) => (
                  <motion.div
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-primary to-cyan"
                    initial={{ height: 12 }}
                    animate={{ height }}
                    transition={{ delay: index * 0.12, duration: 0.7 }}
                    key={height}
                  />
                ))}
              </div>
            </div>
          </MagneticCard>
          <motion.div
            className="absolute bottom-16 right-0 w-[72%] rounded-[2rem] border border-white/12 bg-white/[0.07] p-5 backdrop-blur-2xl"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="size-16 rounded-3xl bg-gradient-to-br from-primary via-cyan to-white p-[2px]">
                <div className="flex size-full items-center justify-center rounded-[1.35rem] bg-deep font-display text-xl font-black text-white">
                  RP
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Ram Parmar</h3>
                <p className="text-sm text-white/56">Shopify App Developer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Liquid", "GraphQL", "Polaris", "Hydrogen"].map((item) => (
                <div className="rounded-2xl bg-white/[0.06] px-3 py-2 text-sm text-white/78" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="absolute right-10 top-0 rounded-3xl border border-primary/30 bg-primary/10 p-4 text-primary backdrop-blur-xl"
            animate={{ rotate: [0, 6, 0], y: [0, 18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <BarChart3 className="size-7" />
            <p className="mt-2 text-sm font-bold">+37% CRO lift</p>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 rounded-3xl border border-cyan/30 bg-cyan/10 p-4 text-cyan backdrop-blur-xl"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <BadgeCheck className="size-7" />
            <p className="mt-2 text-sm font-bold">App approved</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <Badge className="mb-4 border-primary/25 bg-primary/10 text-primary">{eyebrow}</Badge>
      <h2 className="font-display text-4xl font-black leading-tight text-white md:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <motion.div
          className="relative min-h-[520px] rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-cyan/20" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="rounded-[2rem] bg-deep/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">Profile Signal</p>
              <h3 className="mt-4 font-display text-5xl font-black text-white">Shopify systems that sell and scale.</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Shopify", "Liquid", "React", "GraphQL", "Polaris", "APIs"].map((item) => (
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white"
                  whileHover={{ scale: 1.04 }}
                  key={item}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <div>
          <SectionTitle
            eyebrow="About Ram"
            title="A commerce engineer for brands that care about polish."
            text="Ram Parmar blends storefront craft, Shopify platform depth, and app-development thinking to build ecommerce systems that feel elegant on the surface and dependable underneath."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {expertise.map((item, index) => (
              <motion.div
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-white/76 backdrop-blur-xl"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.035 }}
                viewport={{ once: true }}
                key={item}
              >
                <span className="mr-3 text-primary">0{(index % 9) + 1}</span>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Services"
          title="Premium Shopify execution across the full stack."
          text="From storefronts and themes to apps, APIs, headless builds, and automation, every service is designed around speed, conversion, and maintainability."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MagneticCard className="p-6" key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                >
                  <Icon className="mb-7 size-11 rounded-2xl bg-primary/12 p-2.5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/58">{service.text}</p>
                </motion.div>
              </MagneticCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const doubled = [...skills, ...skills];
  return (
    <section id="skills" className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Tech Stack"
          title="A modern Shopify toolkit with SaaS-level engineering."
          text="Ram works across theme development, full-stack JavaScript, APIs, databases, deployment, and commerce-specific UI systems."
        />
        <div className="relative mx-auto mb-12 flex aspect-square max-w-[520px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
          <div className="absolute size-[74%] rounded-full border border-primary/20" />
          <div className="absolute size-[48%] rounded-full border border-cyan/20" />
          <div className="flex size-32 items-center justify-center rounded-full bg-primary text-center font-display text-xl font-black text-deep shadow-glow">
            Shopify Core
          </div>
          <motion.div className="absolute inset-0 animate-orbit">
            {skills.slice(0, 8).map((skill, index) => (
              <div
                className="absolute rounded-full border border-white/12 bg-deep/85 px-3 py-2 text-xs font-semibold text-white shadow-cyan"
                key={skill}
                style={{
                  left: `${50 + 42 * Math.cos((index / 8) * Math.PI * 2)}%`,
                  top: `${50 + 42 * Math.sin((index / 8) * Math.PI * 2)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="marquee relative -mx-6 overflow-hidden border-y border-white/10 py-5">
          <div className="marquee-track flex w-max animate-marquee gap-4">
            {doubled.map((skill, index) => (
              <span
                className="rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white/82 backdrop-blur-xl"
                key={`${skill}-${index}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );
  const filters = ["All", "Stores", "Apps", "Headless", "Automation"];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Bento-style commerce work built to look alive."
          text="A curated view of Shopify stores, apps, ecommerce automation, and headless experiences designed for high-ticket brands."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <Button
              className={cn(filter === item && "bg-primary text-deep hover:bg-primary")}
              key={item}
              size="sm"
              type="button"
              variant={filter === item ? "default" : "outline"}
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid auto-rows-[360px] gap-4 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.article
              layout
              className={cn("group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl", project.span)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              key={project.title}
            >
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-cyan/14 opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className="absolute right-6 top-6 h-40 w-52 rounded-[1.5rem] border border-white/12 bg-deep/80 p-3 shadow-2xl transition duration-500 group-hover:-translate-y-3 group-hover:rotate-2">
                  <div className="mb-3 flex gap-1.5">
                    <span className="size-2 rounded-full bg-primary" />
                    <span className="size-2 rounded-full bg-cyan" />
                    <span className="size-2 rounded-full bg-white/40" />
                  </div>
                  <div className="space-y-2">
                    <span className="block h-3 w-24 rounded-full bg-white/20" />
                    <span className="block h-16 rounded-2xl bg-gradient-to-br from-primary/45 to-cyan/25" />
                    <span className="block h-3 w-32 rounded-full bg-white/14" />
                  </div>
                </div>
                <div className="relative z-10">
                  <Badge className="mb-4">{project.category}</Badge>
                  <h3 className="max-w-xl font-display text-3xl font-black text-white md:text-4xl">{project.title}</h3>
                </div>
                <div className="relative z-10 max-w-2xl">
                  <p className="mb-5 text-sm leading-6 text-white/62">{project.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Journey"
          title="From freelance builds to international ecommerce systems."
          text="A focused timeline of Shopify delivery, agency collaboration, app thinking, integrations, and scalable commerce architecture."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-cyan to-transparent md:left-1/2" />
          {journey.map((item, index) => (
            <motion.div
              className={cn("relative mb-5 md:w-1/2", index % 2 ? "md:ml-auto md:pl-10" : "md:pr-10")}
              initial={{ opacity: 0, x: index % 2 ? 35 : -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              key={item}
            >
              <span className="absolute left-1 top-7 z-10 size-7 rounded-full border border-primary/60 bg-deep shadow-glow md:left-auto md:right-[-14px]" />
              <div className="ml-12 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl md:ml-0">
                <p className="mb-2 font-display text-2xl font-black text-primary">0{index + 1}</p>
                <p className="text-white/72">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="overflow-hidden px-6 py-24">
      <SectionTitle
        eyebrow="Testimonials"
        title="The kind of execution clients remember."
        text="Glass-smooth collaboration, practical engineering, and Shopify solutions that keep working after launch."
      />
      <div className="marquee -mx-6 overflow-hidden py-4">
        <div className="marquee-track flex w-max animate-marquee gap-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="w-[360px] rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl" key={`${item.name}-${index}`}>
              <div className="mb-4 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star className="size-4 fill-current" key={starIndex} />
                ))}
              </div>
              <p className="min-h-24 text-sm leading-6 text-white/66">{item.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan font-bold text-deep">
                  {item.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-white/48">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/12 bg-white/[0.055] p-8 text-center backdrop-blur-2xl md:p-16">
        <MoonStar className="mx-auto mb-8 size-14 rounded-2xl bg-primary/12 p-3 text-primary" />
        <h2 className="mx-auto max-w-4xl font-display text-5xl font-black leading-tight text-white md:text-7xl">
          Let&apos;s Build the <span className="gradient-text">Future of Ecommerce</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A premium Shopify presence deserves more than a theme. It needs speed, systems,
          automation, and a customer journey that feels intentional from the first click.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { label: "GitHub", icon: Github },
            { label: "LinkedIn", icon: Linkedin },
            { label: "Twitter/X", icon: Twitter },
            { label: "Upwork", icon: ExternalLink },
            { label: "Behance", icon: Sparkles },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <Button asChild key={social.label} variant="outline">
                <a aria-label={social.label} href="#">
                  <Icon className="size-4" />
                  {social.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-primary to-cyan" style={{ scaleX }} />;
}

function LoadingIntro() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-deep"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <motion.div
        className="font-display text-3xl font-black text-white"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Ram Parmar<span className="text-primary">.</span>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="noise relative min-h-screen overflow-hidden">
      <LoadingIntro />
      <ScrollProgress />
      <CursorGlow />
      <BackgroundFX />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Journey />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
