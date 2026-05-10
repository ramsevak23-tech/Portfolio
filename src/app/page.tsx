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

type ProjectCategory = "Stores" | "Apps" | "Headless" | "Automation";

type Project = {
  title: string;
  category: ProjectCategory;
  platform: string;
  liveUrl: string;
  stack: string[];
  accent: string;
  imageUrl?: string;
};

const projects: Project[] = [
  {
    title: "Aurora Fashion Plus",
    category: "Stores",
    platform: "Shopify Plus",
    liveUrl: "#",
    stack: ["Liquid", "CRO", "Metafields"],
    accent: "from-[#95BF47] via-[#4DEBFF] to-[#E8FFB7]",
  },
  {
    title: "MerchantFlow App",
    category: "Apps",
    platform: "Shopify Embedded App",
    liveUrl: "#",
    stack: ["Polaris", "GraphQL", "Node.js"],
    accent: "from-[#4DEBFF] via-[#95BF47] to-[#DFFFA1]",
  },
  {
    title: "Hydrogen Beauty Lab",
    category: "Headless",
    platform: "Shopify Hydrogen",
    liveUrl: "#",
    stack: ["Hydrogen", "Storefront API", "Vercel"],
    accent: "from-[#A7F3D0] via-[#4DEBFF] to-[#95BF47]",
  },
  {
    title: "OpsSync Automation",
    category: "Automation",
    platform: "Shopify Flow + APIs",
    liveUrl: "#",
    stack: ["REST APIs", "Firebase", "Webhooks"],
    accent: "from-[#95BF47] via-[#E8FFB7] to-[#4DEBFF]",
  },
  {
    title: "Luxe Home Decor",
    category: "Stores",
    platform: "Shopify 2.0",
    liveUrl: "#",
    stack: ["Liquid", "Sections", "Search"],
    accent: "from-[#FDE68A] via-[#95BF47] to-[#4DEBFF]",
  },
  {
    title: "Subscription Pantry",
    category: "Stores",
    platform: "Shopify Storefront",
    liveUrl: "#",
    stack: ["Recharge", "Liquid", "CRO"],
    accent: "from-[#95BF47] via-[#86EFAC] to-[#4DEBFF]",
  },
  {
    title: "BulkEdit Pro",
    category: "Apps",
    platform: "Shopify Custom App",
    liveUrl: "#",
    stack: ["GraphQL", "Polaris", "MongoDB"],
    accent: "from-[#4DEBFF] via-[#93C5FD] to-[#95BF47]",
  },
  {
    title: "B2B Wholesale Portal",
    category: "Stores",
    platform: "Shopify Plus B2B",
    liveUrl: "#",
    stack: ["B2B", "Liquid", "Markets"],
    accent: "from-[#95BF47] via-[#C4FF6B] to-[#67E8F9]",
  },
  {
    title: "Product Sync Engine",
    category: "Automation",
    platform: "Shopify Admin API",
    liveUrl: "#",
    stack: ["Node.js", "GraphQL", "Cron"],
    accent: "from-[#67E8F9] via-[#95BF47] to-[#F0FDFA]",
  },
  {
    title: "Athleisure Launch Store",
    category: "Stores",
    platform: "Shopify Theme",
    liveUrl: "#",
    stack: ["Liquid", "Tailwind", "PDP"],
    accent: "from-[#95BF47] via-[#ECFCCB] to-[#22D3EE]",
  },
  {
    title: "Checkout Extension Suite",
    category: "Apps",
    platform: "Shopify Plus App",
    liveUrl: "#",
    stack: ["Checkout UI", "GraphQL", "React"],
    accent: "from-[#4DEBFF] via-[#95BF47] to-[#FFFFFF]",
  },
  {
    title: "Skincare Headless",
    category: "Headless",
    platform: "Next.js Commerce",
    liveUrl: "#",
    stack: ["Next.js", "Storefront API", "CMS"],
    accent: "from-[#BBF7D0] via-[#4DEBFF] to-[#95BF47]",
  },
  {
    title: "Order Routing Hub",
    category: "Automation",
    platform: "Shopify Webhooks",
    liveUrl: "#",
    stack: ["Webhooks", "Firebase", "Rules"],
    accent: "from-[#95BF47] via-[#4DEBFF] to-[#BAE6FD]",
  },
  {
    title: "Luxury Jewelry Store",
    category: "Stores",
    platform: "Shopify Plus",
    liveUrl: "#",
    stack: ["Liquid", "3D Media", "CRO"],
    accent: "from-[#F7FEE7] via-[#95BF47] to-[#4DEBFF]",
  },
  {
    title: "Returns Manager",
    category: "Apps",
    platform: "Shopify Admin App",
    liveUrl: "#",
    stack: ["Polaris", "Node.js", "REST"],
    accent: "from-[#4DEBFF] via-[#A7F3D0] to-[#95BF47]",
  },
  {
    title: "Global Markets Build",
    category: "Stores",
    platform: "Shopify Markets",
    liveUrl: "#",
    stack: ["Markets", "Multi-currency", "SEO"],
    accent: "from-[#95BF47] via-[#DCFCE7] to-[#67E8F9]",
  },
  {
    title: "Inventory Forecasting",
    category: "Automation",
    platform: "Shopify + Firebase",
    liveUrl: "#",
    stack: ["Firebase", "Analytics", "API"],
    accent: "from-[#22D3EE] via-[#95BF47] to-[#ECFCCB]",
  },
  {
    title: "Premium Coffee Store",
    category: "Stores",
    platform: "Shopify 2.0",
    liveUrl: "#",
    stack: ["Liquid", "Subscriptions", "Speed"],
    accent: "from-[#95BF47] via-[#FDE68A] to-[#4DEBFF]",
  },
  {
    title: "Loyalty Widget App",
    category: "Apps",
    platform: "Shopify App Embed",
    liveUrl: "#",
    stack: ["App Blocks", "React", "GraphQL"],
    accent: "from-[#4DEBFF] via-[#95BF47] to-[#F0FDFA]",
  },
  {
    title: "Furniture Headless",
    category: "Headless",
    platform: "Hydrogen + Oxygen",
    liveUrl: "#",
    stack: ["Hydrogen", "GraphQL", "Metaobjects"],
    accent: "from-[#95BF47] via-[#67E8F9] to-[#DBEAFE]",
  },
  {
    title: "Fulfillment Control Room",
    category: "Automation",
    platform: "Custom Shopify App",
    liveUrl: "#",
    stack: ["Node.js", "Admin API", "Queues"],
    accent: "from-[#C4FF6B] via-[#95BF47] to-[#4DEBFF]",
  },
  {
    title: "Beauty Brand Migration",
    category: "Stores",
    platform: "WooCommerce to Shopify",
    liveUrl: "#",
    stack: ["Migration", "SEO", "Liquid"],
    accent: "from-[#95BF47] via-[#D9F99D] to-[#67E8F9]",
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

function ProjectAutoPreview({ project }: { project: Project }) {
  return (
    <div className="project-preview-shell relative h-72 overflow-hidden rounded-[1.45rem] border border-white/10 bg-deep/80">
      <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between rounded-full border border-white/10 bg-deep/65 px-4 py-2 backdrop-blur-xl">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="size-2.5 rounded-full bg-[#ffd166]" />
          <span className="size-2.5 rounded-full bg-primary" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
          Live Preview
        </span>
      </div>
      {project.imageUrl ? (
        <div
          aria-label={`${project.title} website preview`}
          className="project-scroll-canvas absolute inset-x-0 top-0 h-[500%] bg-cover bg-top"
          role="img"
          style={{ backgroundImage: `url(${project.imageUrl})`, backgroundSize: "100% 100%" }}
        />
      ) : (
        <div className="project-scroll-canvas absolute inset-x-0 top-0 h-[500%]">
        <div className={cn("h-[18%] bg-gradient-to-br", project.accent)}>
          <div className="flex h-full flex-col justify-end p-7">
            <div className="mb-5 h-2 w-28 rounded-full bg-deep/30" />
            <div className="max-w-[72%] rounded-[1.5rem] bg-deep/25 p-5 backdrop-blur-md">
              <div className="mb-3 h-4 w-24 rounded-full bg-white/55" />
              <div className="h-8 w-full rounded-full bg-white/80" />
              <div className="mt-3 h-3 w-2/3 rounded-full bg-white/45" />
            </div>
          </div>
        </div>
        <div className="grid h-[22%] grid-cols-2 gap-4 bg-[#0f172a] p-6">
          <div className="rounded-[1.25rem] bg-white/[0.08] p-4">
            <div className="mb-4 h-3 w-20 rounded-full bg-primary/70" />
            <div className="h-28 rounded-[1rem] bg-gradient-to-br from-white/20 to-white/5" />
          </div>
          <div className="rounded-[1.25rem] bg-white/[0.08] p-4">
            <div className="mb-4 h-3 w-24 rounded-full bg-cyan/70" />
            <div className="h-28 rounded-[1rem] bg-gradient-to-br from-primary/30 to-cyan/15" />
          </div>
        </div>
        <div className="h-[20%] bg-[#111827] p-6">
          <div className="grid h-full grid-cols-3 gap-3">
            {project.stack.map((item) => (
              <div className="rounded-[1rem] bg-white/[0.07] p-3" key={item}>
                <div className="mb-3 h-20 rounded-xl bg-gradient-to-br from-primary/30 to-cyan/20" />
                <div className="h-2 rounded-full bg-white/35" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-white/18" />
              </div>
            ))}
          </div>
        </div>
        <div className={cn("h-[20%] bg-gradient-to-tr p-7", project.accent)}>
          <div className="grid h-full grid-cols-[1.15fr_.85fr] gap-4">
            <div className="rounded-[1.5rem] bg-deep/25 p-5 backdrop-blur-md">
              <div className="mb-4 h-4 w-28 rounded-full bg-white/60" />
              <div className="space-y-2">
                <div className="h-3 rounded-full bg-white/70" />
                <div className="h-3 w-5/6 rounded-full bg-white/45" />
                <div className="h-3 w-2/3 rounded-full bg-white/35" />
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-deep/35 p-5">
              <div className="h-full rounded-[1rem] border border-white/20" />
            </div>
          </div>
        </div>
        <div className="h-[20%] bg-[#07111f] p-7">
          <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6">
            <div>
              <div className="h-4 w-24 rounded-full bg-primary/70" />
              <div className="mt-5 h-10 w-3/4 rounded-full bg-white/20" />
            </div>
            <div className="flex gap-3">
              <div className="h-11 w-28 rounded-full bg-primary" />
              <div className="h-11 w-28 rounded-full border border-white/20" />
            </div>
          </div>
        </div>
      </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-deep to-transparent" />
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );
  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const filters = ["All", "Stores", "Apps", "Headless", "Automation"];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="A live portfolio wall for serious Shopify work."
          text="Browse Shopify stores, apps, automation systems, and headless builds with animated full-page previews that scroll from top to bottom in a continuous loop."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <Button
              className={cn(filter === item && "bg-primary text-deep hover:bg-primary")}
              key={item}
              size="sm"
              type="button"
              variant={filter === item ? "default" : "outline"}
              onClick={() => {
                setFilter(item);
                setVisibleCount(6);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              layout
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.035 }}
              key={project.title}
            >
              <ProjectAutoPreview project={project} />
              <div className="p-5">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge>{project.category}</Badge>
                  <Badge className="border-primary/20 bg-primary/10 text-primary">
                    {project.platform}
                  </Badge>
                </div>
                <h3 className="font-display text-2xl font-black leading-tight text-white">
                  {project.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/58" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <Button asChild className="mt-6 w-full" variant="outline">
                  <a href={project.liveUrl} rel="noreferrer" target="_blank">
                    Visit Live Project <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-10 flex justify-center">
          {hasMore ? (
            <Button
              size="lg"
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + 6, filtered.length))}
            >
              Load More Projects
              <span className="rounded-full bg-deep/20 px-2 py-0.5 text-xs">
                {filtered.length - visibleCount} left
              </span>
            </Button>
          ) : (
            <Badge className="border-primary/25 bg-primary/10 px-5 py-3 text-primary">
              Showing all {filtered.length} projects
            </Badge>
          )}
        </div>
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
