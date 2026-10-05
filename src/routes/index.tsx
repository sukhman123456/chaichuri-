import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Heart,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  Phone,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  X,
  Award,
  Flame,
} from "lucide-react";
import { DigitalMenu } from "../components/DigitalMenu";

/* =========================================
   SOCIAL & MESSAGING ACTION CONFIGURATION
   Official channels for Chai & Churi.
   If updating in the future, configure below:
========================================= */
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/chaichuri_gurdaspur/";

// WhatsApp Business Number (derived from registered contact: +91 84375 97727)
// When modifying, use international format without '+' or spaces.
export const WHATSAPP_BUSINESS_NUMBER = "918437597727";

export const WHATSAPP_PREFILLED_MESSAGE = "Hi Chai & Churi! I'd like to know more about your menu.";

export const WHATSAPP_ACTION_URL = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;

const phone = "tel:+918437597727";
const phoneNumberDisplay = "084375 97727";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Churi+House+Golden+Avenue+Colony+Dinanagar+Punjab+143531";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Our Space", href: "#our-space" },
  { label: "Favourites", href: "#featured-rail" },
  { label: "Signature", href: "#signature-artifact" },
  { label: "Ambience", href: "#ambience" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Churi House Dinanagar | Authentic Kadak Chai & Desi Ghee Churi" },
      {
        name: "description",
        content:
          "Welcome to Churi House Dinanagar (Chai & Churi) – Authentic Kadak Kulhad Chai, handcrafted Desi Ghee Churi, artisanal burgers, pizza, shakes and slow-boiled Kaadni Milk.",
      },
      { property: "og:title", content: "Churi House Dinanagar | Traditional Punjabi Flavours & Café" },
      {
        property: "og:description",
        content:
          "Good Food • Good Mood. Authentic Kadak Kulhad Chai and Desi Ghee Churi prepared fresh with love in Dinanagar.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

/* Reusable Word-Splitting Reveal Component */
function WordReveal({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={`word-reveal-group ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-wrap"
          style={{
            animationDelay: `${delayOffset + i * 38}ms`,
          }}
        >
          <span className="word-inner">{word}</span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

/* Floral motif divider */
function FloralOrnament() {
  return (
    <span className="ornament-flourish" aria-hidden="true">
      <svg viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="1" />
        <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="6" r="1.5" fill="currentColor" />
        <circle cx="22" cy="6" r="1.5" fill="currentColor" />
        <line x1="26" y1="6" x2="36" y2="6" stroke="currentColor" strokeWidth="1" />
      </svg>
    </span>
  );
}

/* Elegant SVG Brand Icons */
function InstagramIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.93.55 3.73 1.5 5.27L2 22l4.87-1.46c1.48.87 3.2 1.38 5.13 1.38 5.52 0 10-4.48 10-10S17.524 2 12.004 2zm5.79 14.33c-.24.68-1.4 1.3-1.95 1.38-.5.08-1.14.11-1.84-.11-.42-.13-.96-.31-1.65-.61-2.92-1.26-4.82-4.22-4.97-4.41-.15-.19-1.2-1.59-1.2-3.03 0-1.44.75-2.15 1.02-2.45.27-.3.58-.37.77-.37.2 0 .39 0 .56.01.18.01.42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.33.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.14.14-.3.3-.13.59.17.29.76 1.25 1.63 2.02 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.07.17-.2.74-.86.94-1.15.2-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
    </svg>
  );
}

function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container-wide nav-inner">
          <a href="#home" className="brand-wrap" aria-label="Churi House Dinanagar Home">
            <div className="brand-emblem-wrap">
              <img
                src="/chai-churi-logo.jpg"
                alt="Churi House Dinanagar Logo"
                className="brand-emblem-img"
              />
            </div>
            <div className="brand-text-col">
              <span className="brand-nav-title">Chai &amp; Churi</span>
              <span className="brand-nav-subtitle">Churi House · Dinanagar</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Main Navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              onClick={onOpenMenu}
              className="order-pill-btn"
              type="button"
            >
              <ShoppingBag size={14} /> Order Now
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`mobile-toggle ${mobileOpen ? "is-active" : ""}`}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              type="button"
            >
              <span className="hamburger-icon-wrap">
                {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <nav className="mobile-menu-drawer" aria-label="Mobile Navigation">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <img
              src="/chai-churi-logo.jpg"
              alt="Churi House Logo"
              style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(223, 145, 82, 0.45)" }}
            />
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "#fdfaf5", display: "block" }}>
                Chai &amp; Churi
              </span>
              <span style={{ fontSize: "11px", color: "#df9152", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Churi House Dinanagar
              </span>
            </div>
          </div>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenMenu();
            }}
            className="order-pill-btn"
            style={{ width: "fit-content", marginTop: "8px" }}
          >
            <ShoppingBag size={14} /> Order Now
          </button>
        </nav>
      )}
    </>
  );
}

/* Category & Featured Items data (Stage 3 Horizontal Rail) */
const favouriteItems = [
  {
    id: "01",
    title: "Royal Desi Ghee Churi",
    category: "Signature Craft",
    desc: "Pounded hot tandoori roti, pure golden desi ghee, organic shakkar & roasted dry fruits.",
    price: "₹120",
    image: "/menu/desi-ghee-churi.jpg",
    badge: "House Special",
  },
  {
    id: "02",
    title: "Kadak Masala Kulhad Chai",
    category: "Clay Cup Brew",
    desc: "Slow-simmered aromatic tea with freshly crushed ginger, green cardamom & thick milk.",
    price: "₹40",
    image: "/kulhad-chai.jpg",
    badge: "Bestseller",
  },
  {
    id: "03",
    title: "Signature Iced Cold Coffee",
    category: "Chilled Espresso",
    desc: "Creamy, rich espresso blend with chocolate swirl and chilled velvety milk.",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    badge: "Refreshing",
  },
  {
    id: "04",
    title: "Churi House Special Pizza",
    category: "Artisanal Oven",
    desc: "Golden crust loaded with melted mozzarella, bell peppers, olives & fragrant herbs.",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    badge: "Chef's Choice",
  },
  {
    id: "05",
    title: "Crispy Burgers & Comfort Pasta",
    category: "Café Comforts",
    desc: "Freshly assembled artisanal burgers and savory penne comfort cooked to order.",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    badge: "Made Fresh",
  },
];

/* Authentic Interior Gallery Items (Using the 4 uploaded café photos) */
const interiorGalleryItems = [
  {
    id: 1,
    src: "/interior/interior-hero.webp",
    fallback: "/interior/interior-hero.jpg",
    title: "Heritage Dining Room",
    subtitle: "Handcrafted cane armchairs, woven rattan lamps & textured fireplace chimney",
    tag: "Main Dining",
    size: "featured-large",
  },
  {
    id: 2,
    src: "/interior/interior-space.webp",
    fallback: "/interior/interior-space.jpg",
    title: "White Hearth & Greenery",
    subtitle: "Lush tropical palm, rustic black lanterns & intimate hearthside seating",
    tag: "Our Space",
    size: "tall",
  },
  {
    id: 3,
    src: "/interior/interior-ambience.webp",
    fallback: "/interior/interior-ambience.jpg",
    title: "Earthy Textures & Heritage Art",
    subtitle: "Curated monochrome frames, warm stone textures & cozy mantle glow",
    tag: "Ambience",
    size: "compact",
  },
  {
    id: 4,
    src: "/interior/interior-gallery.webp",
    fallback: "/interior/interior-gallery.jpg",
    title: "Intimate Dining & Ambient Light",
    subtitle: "Polished wood tables, natural cane textures & serene café afternoon light",
    tag: "Café Seating",
    size: "compact",
  },
];

/* Menu items for modal */
const menuCategories = [
  {
    category: "Chai & Churi Specials",
    items: [
      { name: "Royal Desi Ghee Churi", desc: "Traditional crushed hot roti, pure golden desi ghee, organic shakkar & roasted dry fruits", price: "₹120" },
      { name: "Kadak Masala Kulhad Chai", desc: "Fresh clay cup tea brewed with ginger, green cardamom, cloves & thick milk", price: "₹40" },
      { name: "Special Elaichi Chai", desc: "Rich aromatic crushed cardamom tea prepared fresh to order", price: "₹35" },
      { name: "Churi House Special Pizza", desc: "Chef's signature crust loaded with rich cheese, fresh bell peppers, olives & herbs", price: "₹249" },
      { name: "Signature Iced Cold Coffee", desc: "Thick, creamy blend of roasted espresso, rich milk & chocolate swirl", price: "₹129" },
    ],
  },
  {
    category: "Coffee & Drinks",
    items: [
      { name: "Fresh Cappuccino", desc: "Freshly brewed espresso topped with velvety steamed milk foam", price: "₹99" },
      { name: "Cafe Latte", desc: "Smooth espresso poured over creamy steamed milk with delicate art", price: "₹109" },
      { name: "Choco Frappe", desc: "Blended iced coffee with chocolate ganache and whipped cream", price: "₹149" },
      { name: "Refreshing Mint Mojito", desc: "Crushed fresh mint, lime juice, sparkling soda and brown sugar", price: "₹119" },
    ],
  },
  {
    category: "Pizzas & Fast Bites",
    items: [
      { name: "Farmhouse Delight Pizza", desc: "Capsicum, onion, golden corn, and mozzarella cheese", price: "₹219" },
      { name: "Paneer Tikka Pizza", desc: "Marinated spicy paneer chunks, onions, capsicum & tandoori drizzle", price: "₹239" },
      { name: "Crispy Peri-Peri Fries", desc: "Golden potato fingers dusted with signature piquant peri-peri spices", price: "₹99" },
      { name: "Cheesy Garlic Bread", desc: "Oven-toasted baguette slices smothered in garlic herb butter & melted cheese", price: "₹129" },
    ],
  },
  {
    category: "Desserts & Shakes",
    items: [
      { name: "Rich Chocolate Truffle Cake", desc: "Triple layer moist chocolate sponge layered with rich dark chocolate fudge", price: "₹139" },
      { name: "Oreo Overload Shake", desc: "Rich vanilla cream blended with crunchy Oreo cookies and chocolate drizzle", price: "₹149" },
      { name: "Nutella Brownie Sizzler", desc: "Warm gooey walnut brownie served with chocolate sauce", price: "₹169" },
    ],
  },
];

function Index() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [artifactStatus, setArtifactStatus] = useState("SIGNATURE SELECTION · RECIPE NO. 01");
  const [activeChapter, setActiveChapter] = useState(0);

  const touchStartX = useRef<number | null>(null);

  // Stage References for Centralized Scroll Controller
  const heroStageRef = useRef<HTMLElement | null>(null);
  const storyStageRef = useRef<HTMLElement | null>(null);
  const menuStageRef = useRef<HTMLElement | null>(null);
  const menuTrackRef = useRef<HTMLDivElement | null>(null);
  const artifactStageRef = useRef<HTMLElement | null>(null);
  const ambienceStageRef = useRef<HTMLElement | null>(null);

  // Mouse Parallax on Hero Desktop
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 992) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({
      x: Math.round(relX * -14 * 10) / 10,
      y: Math.round(relY * -10 * 10) / 10,
    });
  };

  const handleHeroMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Lightbox Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? interiorGalleryItems.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === interiorGalleryItems.length - 1 ? 0 : prev + 1) : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lightbox Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || lightboxIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === interiorGalleryItems.length - 1 ? 0 : prev + 1) : null
        );
      } else {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? interiorGalleryItems.length - 1 : prev - 1) : null
        );
      }
    }
    touchStartX.current = null;
  };

  // IntersectionObserver for Staggered Cinematic Reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        "[data-reveal]:not(.revealed), .menu-category-card:not(.revealed), .highlight-item:not(.revealed), .gallery-grid-item:not(.revealed)"
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Centralized 60fps Scroll Choreography Engine
  useEffect(() => {
    let ticking = false;
    const cachedStageData: {
      hero?: { top: number; height: number };
      story?: { top: number; height: number };
      menu?: { top: number; height: number; overflow: number };
      artifact?: { top: number; height: number };
      ambience?: { top: number; height: number };
    } = {};

    const measure = () => {
      if (typeof window === "undefined") return;
      const scrollY = window.scrollY || window.pageYOffset;

      if (heroStageRef.current) {
        const r = heroStageRef.current.getBoundingClientRect();
        cachedStageData.hero = { top: r.top + scrollY, height: r.height };
      }
      if (storyStageRef.current) {
        const r = storyStageRef.current.getBoundingClientRect();
        cachedStageData.story = { top: r.top + scrollY, height: r.height };
      }
      if (menuStageRef.current) {
        const r = menuStageRef.current.getBoundingClientRect();
        const track = menuTrackRef.current;
        const overflow = track ? Math.max(0, track.scrollWidth - window.innerWidth + 80) : 0;
        cachedStageData.menu = { top: r.top + scrollY, height: r.height, overflow };
      }
      if (artifactStageRef.current) {
        const r = artifactStageRef.current.getBoundingClientRect();
        cachedStageData.artifact = { top: r.top + scrollY, height: r.height };
      }
      if (ambienceStageRef.current) {
        const r = ambienceStageRef.current.getBoundingClientRect();
        cachedStageData.ambience = { top: r.top + scrollY, height: r.height };
      }
    };

    const getProgress = (cached?: { top: number; height: number }) => {
      if (!cached) return 0;
      const scrollY = window.scrollY || window.pageYOffset;
      const viewH = window.innerHeight;
      const total = cached.height - viewH;
      if (total <= 0) return 0;
      const rel = scrollY - cached.top;
      return Math.max(0, Math.min(1, rel / total));
    };

    let lastStatus = "";
    let lastChapter = -1;

    const updateDownstreamStages = () => {
      const isDesktop = window.innerWidth >= 992;
      const scrollY = window.scrollY || window.pageYOffset;

      // 1. HERO PARALLAX & SMOOTH ZOOM-OUT ON SCROLL
      if (heroStageRef.current && cachedStageData.hero) {
        const heroH = cachedStageData.hero.height || window.innerHeight;
        const heroProgress = Math.min(1, Math.max(0, scrollY / heroH));

        const heroZoom = 1 - heroProgress * 0.08;
        const heroBgY = scrollY * 0.32;
        const heroTextY = -scrollY * 0.28;
        const heroOpacity = Math.max(0, 1 - heroProgress * 1.4);

        heroStageRef.current.style.setProperty("--hero-zoom", `${heroZoom}`);
        heroStageRef.current.style.setProperty("--hero-bg-y", `${heroBgY}px`);
        heroStageRef.current.style.setProperty("--hero-text-y", `${heroTextY}px`);
        heroStageRef.current.style.setProperty("--hero-opacity", `${heroOpacity}`);
      }

      // 2. STORY REVEAL WIPE
      if (storyStageRef.current && cachedStageData.story) {
        const prog = getProgress(cachedStageData.story);
        const wipe = isDesktop ? Math.max(0, Math.min(100, prog * 105)) : 100;
        storyStageRef.current.style.setProperty("--story-wipe", `${wipe}%`);
      }

      // 3. HORIZONTAL MENU RAIL
      if (menuStageRef.current && cachedStageData.menu) {
        const prog = getProgress(cachedStageData.menu);
        if (isDesktop && cachedStageData.menu.overflow > 0) {
          const transX = -prog * cachedStageData.menu.overflow;
          menuStageRef.current.style.setProperty("--menu-x", `${transX}px`);
        } else {
          menuStageRef.current.style.setProperty("--menu-x", `0px`);
        }
        menuStageRef.current.style.setProperty("--menu-progress", `${prog * 100}%`);
      }

      // 4. SIGNATURE ARTIFACT
      if (artifactStageRef.current && cachedStageData.artifact) {
        const prog = getProgress(cachedStageData.artifact);
        const alpha = Math.min(1, prog * 2.2);
        const scale = 0.88 + prog * 0.12;
        const y = (1 - Math.min(1, prog * 1.4)) * 36;

        artifactStageRef.current.style.setProperty("--product-alpha", `${alpha}`);
        artifactStageRef.current.style.setProperty("--product-scale", `${scale}`);
        artifactStageRef.current.style.setProperty("--product-y", `${y}px`);
        artifactStageRef.current.style.setProperty("--product-progress", `${prog * 100}%`);

        const newStatus =
          prog < 0.35
            ? "SIGNATURE SELECTION · RECIPE NO. 01"
            : prog < 0.70
            ? "PREPARED FRESH IN PURE DESI GHEE"
            : "AUTHENTIC PUNJABI HERITAGE TASTE";
        if (newStatus !== lastStatus) {
          lastStatus = newStatus;
          setArtifactStatus(newStatus);
        }
      }

      // 5. ATMOSPHERIC CHAPTERS
      if (ambienceStageRef.current && cachedStageData.ambience) {
        const prog = getProgress(cachedStageData.ambience);
        const newChapter = prog < 0.35 ? 0 : prog < 0.70 ? 1 : 2;
        if (newChapter !== lastChapter) {
          lastChapter = newChapter;
          setActiveChapter(newChapter);
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateDownstreamStages();
          ticking = false;
        });
        ticking = true;
      }
    };

    measure();
    updateDownstreamStages();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      updateDownstreamStages();
    }, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <Header onOpenMenu={() => setMenuModalOpen(true)} />

      <main>
        {/* =========================================
            STAGE 1: CLEAN & PREMIUM HERO SECTION
        ========================================= */}
        <section
          id="home"
          ref={heroStageRef}
          className="stage-hero"
          aria-labelledby="hero-main-title"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          {/* Authentic Warm Dark Café Background Layer */}
          <div className="hero-bg-dark" />

          <div className="hero-inner-container">
            {/* Full-Bleed Background Visual Stage */}
            <div className="hero-visual-stage" aria-hidden="true">
              <div
                className="hero-photo-wrapper hero-camera-rig"
                style={{
                  transform: `translate3d(${mouseOffset.x * 0.25}px, calc(${mouseOffset.y * 0.25}px + var(--hero-bg-y, 0px)), 0) scale(var(--hero-zoom, 1))`,
                }}
              >
                {/* Food photograph covering full background */}
                <img
                  src="/chai-churi-special.jpg"
                  alt="Authentic Kadak Kulhad Chai and Desi Ghee Churi at Churi House Dinanagar"
                  className="hero-food-photo"
                />

                {/* Realistic Warm Steam Rising from Chai */}
                <div className="hero-steam-container">
                  <div className="hero-steam-wisp wisp-1" />
                  <div className="hero-steam-wisp wisp-2" />
                  <div className="hero-steam-wisp wisp-3" />
                  <div className="hero-steam-wisp wisp-4" />
                  <div className="hero-steam-wisp wisp-5" />
                </div>

                {/* Warm Golden Glow around Chai */}
                <div className="chai-warmth-glow" />

                {/* Subtle Ambient Light Sweep */}
                <div className="hero-light-sweep" />

                {/* Top & Bottom Vignettes */}
                <div className="hero-feather-top" />
                <div className="hero-feather-bottom" />
              </div>

              {/* Contrast Scrim for Clear Typography Readability */}
              <div className="hero-cinematic-scrim" />
            </div>

            {/* Main Hero Content (Clean, Beautiful & Immediately Visible) */}
            <div className="hero-main-container">
              <div className="hero-text-block">
                <span className="hero-tagline">
                  A PERFECT PAIR
                </span>

                <h1 id="hero-main-title" className="hero-composite-title">
                  <div className="hero-title-chai-wrap">
                    <span className="hero-title-chai">Chai</span>
                    <svg
                      className="chai-steam-icon"
                      viewBox="0 0 24 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2C14.5 7 9.5 12 12 17C14.5 22 9.5 27 12 32"
                        stroke="#df9152"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 7C19.5 10.5 16.5 14 18 17.5"
                        stroke="#df9152"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.65"
                      />
                    </svg>
                  </div>
                  <div className="hero-title-churi-wrap">
                    <span className="hero-title-churi">Churi</span>
                    <svg
                      className="brush-underline-svg"
                      viewBox="0 0 260 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13C45 5 130 4 257 9C195 15 85 14 3 13Z"
                        fill="#c87a3e"
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                </h1>

                <p className="hero-desc-clean">
                  Traditional Punjabi flavours, freshly made with love. Because some combinations never get old.
                </p>

                <div className="hero-cta-group">
                  <a
                    href="#featured-rail"
                    className="btn-primary-terracotta"
                  >
                    Explore Menu <ArrowRight size={15} />
                  </a>
                  <a href="#visit" className="btn-story-glass">
                    <span className="play-circle-icon">📍</span> Visit Us
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Features Bar: 4 badges */}
            <div className="hero-features-bar">
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Leaf size={19} strokeWidth={1.75} />
                </div>
                <div className="hero-feature-text">
                  <strong>Fresh</strong>
                  <span>Ingredients</span>
                </div>
              </div>

              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Coffee size={19} strokeWidth={1.75} />
                </div>
                <div className="hero-feature-text">
                  <strong>Authentic</strong>
                  <span>Taste</span>
                </div>
              </div>

              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Heart size={19} strokeWidth={1.75} />
                </div>
                <div className="hero-feature-text">
                  <strong>Made</strong>
                  <span>with Love</span>
                </div>
              </div>

              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Sparkles size={19} strokeWidth={1.75} />
                </div>
                <div className="hero-feature-text">
                  <strong>Punjabi</strong>
                  <span>Vibes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            HIGHLIGHTS RIBBON
        ========================================= */}
        <section className="highlights-ribbon" aria-label="Café Highlights">
          <div className="container-content">
            <div className="highlights-grid">
              <div className="highlight-item" data-reveal="card">
                <div className="highlight-icon-circle">
                  <Coffee size={22} strokeWidth={1.8} />
                </div>
                <div className="highlight-content">
                  <h4>Kadak Kulhad Chai</h4>
                  <p>Brewed fresh with ginger &amp; cardamom</p>
                </div>
              </div>

              <div className="highlight-item" data-reveal="card">
                <div className="highlight-icon-circle">
                  <Sparkles size={22} strokeWidth={1.8} />
                </div>
                <div className="highlight-content">
                  <h4>Desi Ghee Churi</h4>
                  <p>Authentic Punjabi Shakkar &amp; Ghee recipe</p>
                </div>
              </div>

              <div className="highlight-item" data-reveal="card">
                <div className="highlight-icon-circle">
                  <UtensilsCrossed size={22} strokeWidth={1.8} />
                </div>
                <div className="highlight-content">
                  <h4>Café Specials</h4>
                  <p>Artisanal burgers, shakes, pizza &amp; pasta</p>
                </div>
              </div>

              <div className="highlight-item" data-reveal="card">
                <div className="highlight-icon-circle">
                  <Heart size={22} strokeWidth={1.8} />
                </div>
                <div className="highlight-content">
                  <h4>Cozy Space</h4>
                  <p>Handcrafted cane seating &amp; warm lights</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            STAGE 2: BRAND / STORY REVEAL (TWO-LAYER INK WIPE)
        ========================================= */}
        <section
          id="our-space"
          ref={storyStageRef}
          className="choreography-stage stage-story"
          aria-labelledby="our-space-heading"
        >
          <div className="stage-sticky story-sticky-inner">
            <div className="container-content">
              <div className="our-space-split-grid">
                {/* LEFT: Large authentic interior image */}
                <div className="our-space-media-col" data-reveal="media">
                  <div className="our-space-frame">
                    <picture>
                      <source srcSet="/interior/interior-space.webp" type="image/webp" />
                      <img
                        src="/interior/interior-space.jpg"
                        alt="Churi House Dinanagar Interior Space with Hearth, Lanterns and Greenery"
                        className="our-space-photo"
                        loading="lazy"
                      />
                    </picture>
                    <div className="space-badge-floating">
                      <span className="space-badge-dot" />
                      <span>Our Space · Dinanagar</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Two-Layer Scroll-Wipe Statement & Content */}
                <div className="our-space-text-col" data-reveal>
                  <div className="section-eyebrow">
                    <span className="eyebrow-line" />
                    <span>ABOUT CHURI HOUSE</span>
                  </div>
                  <h2 id="our-space-heading" className="our-space-title">
                    More Than Just Chai
                  </h2>

                  {/* Two-layer text reveal: base muted, overlay fills upward via clip-path */}
                  <div className="story-statement-wipe-wrap">
                    <p className="story-statement-base" aria-hidden="true">
                      A warm space to slow down, share a conversation and enjoy the timeless comfort of Punjabi flavours.
                    </p>
                    <p className="story-statement-overlay">
                      A warm space to slow down, share a conversation and enjoy the timeless comfort of Punjabi flavours.
                    </p>
                  </div>

                  <p className="our-space-description">
                    At Chai &amp; Churi, we honour the soul of Punjabi hospitality with a modern café aesthetic. From our slow-simmered kulhad brews and freshly pounded desi ghee churi to artisanal shakes and comfort bites, every corner is designed to bring you warmth, nostalgia, and belonging.
                  </p>

                  <div className="space-highlights-list">
                    <div className="space-highlight-row" data-reveal>
                      <div className="space-highlight-bullet">✓</div>
                      <div>
                        <strong>Handcrafted Cane Seating &amp; Hearth</strong>
                        <p>Natural textures, warm pendant lighting, and lush indoor greenery.</p>
                      </div>
                    </div>
                    <div className="space-highlight-row" data-reveal>
                      <div className="space-highlight-bullet">✓</div>
                      <div>
                        <strong>Authentic Traditional Flavours</strong>
                        <p>Pure desi ghee, organic shakkar, and aromatic whole spices.</p>
                      </div>
                    </div>
                  </div>

                  <div className="our-space-action-row">
                    <a href="#featured-rail" className="btn-space-discover">
                      View Favourites <ArrowRight size={15} />
                    </a>
                    <a href="#gallery" className="btn-space-directions">
                      View Gallery <ChevronRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            STAGE 3: HORIZONTAL MENU / PRODUCT RAIL
        ========================================= */}
        <section
          id="featured-rail"
          ref={menuStageRef}
          className="choreography-stage stage-menu-rail"
          aria-labelledby="featured-rail-heading"
        >
          <div className="stage-sticky menu-rail-sticky-inner">
            <div className="container-wide menu-rail-header" data-reveal>
              <div className="menu-rail-header-text">
                <span className="section-eyebrow">
                  <span className="eyebrow-line" />
                  <span>CURATED SELECTION</span>
                </span>
                <h2 id="featured-rail-heading" className="menu-rail-title">
                  Churi House Favourites
                </h2>
              </div>
              {/* Minimal Progress Meter */}
              <div className="menu-rail-meter" aria-hidden="true">
                <span className="meter-label">01</span>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "var(--menu-progress, 0%)" }} />
                </div>
                <span className="meter-label">05</span>
              </div>
            </div>

            {/* Horizontal Track Viewport */}
            <div className="menu-rail-viewport">
              <div
                ref={menuTrackRef}
                className="menu-rail-track"
                style={{
                  transform: "translateX(var(--menu-x, 0px))",
                }}
              >
                {favouriteItems.map((item, idx) => (
                  <article key={item.id} className="menu-rail-card" data-reveal="card">
                    <div className="menu-rail-card-media">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`menu-rail-card-img ${item.imgClass || ""}`}
                        loading="lazy"
                      />
                      <span className="menu-rail-card-badge">{item.badge}</span>
                      <span className="menu-rail-card-index">{item.id}</span>
                    </div>

                    <div className="menu-rail-card-content">
                      <span className="menu-rail-category">{item.category}</span>
                      <h3 className="menu-rail-card-title">{item.title}</h3>
                      <p className="menu-rail-card-desc">{item.desc}</p>

                      <div className="menu-rail-card-footer">
                        <span className="menu-rail-card-price">{item.price}</span>
                        <button
                          type="button"
                          onClick={() => setMenuModalOpen(true)}
                          className="menu-rail-card-btn"
                          aria-label={`Order ${item.title}`}
                        >
                          <ShoppingBag size={13} /> Order Now
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="container-wide menu-rail-footer-hint" data-reveal>
              <span className="rail-scroll-indicator">
                ← Scroll to explore signature dishes →
              </span>
              <a href="#menu" className="rail-view-all-link">
                View Full Digital Menu (25+ Items) <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================
            STAGE 4: SIGNATURE PRODUCT / ARTIFACT MOMENT
        ========================================= */}
        <section
          id="signature-artifact"
          ref={artifactStageRef}
          className="choreography-stage stage-artifact"
          aria-labelledby="artifact-main-title"
        >
          <div className="stage-sticky artifact-sticky-inner">
            <div className="container-content artifact-container">
              {/* Cinematic Artisan Café Recipe Ticket / Card */}
              <div className="artifact-card" data-reveal="card">
                {/* Status Line: changes discretely on phase changes */}
                <div className="artifact-status-banner">
                  <div className="status-live-pulse-dot" />
                  <span className="artifact-status-text">{artifactStatus}</span>
                  <span className="artifact-recipe-badge">SPECIALITY NO. 01</span>
                </div>

                <div className="artifact-grid">
                  {/* Left: Product Visual Presentation */}
                  <div className="artifact-visual-col">
                    <div className="artifact-visual-frame">
                      <img
                        src="/chai-churi-special.jpg"
                        alt="Royal Desi Ghee Churi served with Kadak Kulhad Chai at Churi House"
                        className="artifact-img"
                      />
                      <div className="artifact-visual-overlay">
                        <span className="artifact-heritage-stamp">TRADITIONAL HERITAGE</span>
                        <span className="artifact-taste-tag">Good Food • Good Mood</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Progressive Information Reveal */}
                  <div className="artifact-details-col">
                    <div className="artifact-kicker-row">
                      <span className="artifact-category">CHURI HOUSE ICONIC PAIR</span>
                      <span className="artifact-pure-badge">
                        <Flame size={12} /> 100% PURE DESI GHEE
                      </span>
                    </div>

                    <h2 id="artifact-main-title" className="artifact-title">
                      Royal Desi Ghee Churi &amp; Kadak Kulhad Chai
                    </h2>

                    <p className="artifact-desc">
                      Pounded hot tandoori roti crumbled by hand, drenched in steaming golden desi ghee, tossed with organic shakkar, and roasted almonds &amp; cashews — served alongside our signature clay kulhad chai brewed with freshly crushed ginger and green cardamom.
                    </p>

                    <div className="artifact-ingredients-chips">
                      <span className="artifact-chip">Pure Desi Ghee</span>
                      <span className="artifact-chip">Organic Shakkar</span>
                      <span className="artifact-chip">Roasted Dry Fruits</span>
                      <span className="artifact-chip">Fresh Ginger Brew</span>
                      <span className="artifact-chip">Earthy Clay Kulhad</span>
                    </div>

                    <div className="artifact-footer-row">
                      <div className="artifact-price-box">
                        <span className="price-label">Signature Pair</span>
                        <span className="price-val">₹120</span>
                      </div>
                      <div className="artifact-action-buttons">
                        <button
                          type="button"
                          onClick={() => setMenuModalOpen(true)}
                          className="btn-primary-terracotta"
                        >
                          <ShoppingBag size={15} /> Order This Pair
                        </button>
                        <a href="#menu" className="btn-story-glass">
                          View Full Menu <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            STAGE 5: ATMOSPHERIC / SEASONAL CHAPTER (AMBIENCE)
        ========================================= */}
        <section
          id="ambience"
          ref={ambienceStageRef}
          className="choreography-stage stage-ambience"
          aria-labelledby="ambience-heading"
        >
          <div className="stage-sticky ambience-sticky-inner">
            {/* Subtle Coffee & Steam Contour Line SVG Background */}
            <div className="ambience-contour-bg" aria-hidden="true">
              <svg
                className="ambience-contour-svg"
                viewBox="0 0 1440 900"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M-80,180 C260,80 580,380 940,210 C1240,70 1460,340 1560,260"
                  stroke="rgba(200, 122, 62, 0.12)"
                  strokeWidth="2.2"
                />
                <path
                  d="M-30,420 C320,290 680,590 1080,380 C1380,240 1580,520 1620,440"
                  stroke="rgba(200, 122, 62, 0.08)"
                  strokeWidth="1.8"
                />
                <path
                  d="M0,660 C380,520 760,790 1160,580 C1420,440 1620,690 1660,620"
                  stroke="rgba(200, 122, 62, 0.06)"
                  strokeWidth="1.6"
                />
              </svg>
            </div>

            <div className="container-content">
              <div className="ambience-framework-grid">
                {/* LEFT COLUMN: 3-Chapter Story */}
                <div className="ambience-text-column" data-reveal>
                  <div className="section-eyebrow">
                    <span className="eyebrow-line" />
                    <span>OUR AMBIENCE</span>
                  </div>

                  <h2 id="ambience-heading" className="ambience-main-title">
                    A Space Made for Good Moments
                  </h2>

                  <div className="ambience-chapters-stack">
                    {/* Chapter 1: The Space */}
                    <div
                      className={`ambience-chapter-item ${activeChapter === 0 ? "chapter-active" : "chapter-muted"}`}
                    >
                      <div className="chapter-indicator-row">
                        <span className="chapter-badge">CHAPTER 01</span>
                        <span className="chapter-name">THE SPACE</span>
                      </div>
                      <h3 className="chapter-heading">Handcrafted Cane &amp; Warm Hearth</h3>
                      <p className="chapter-body">
                        Step into a calm haven featuring handcrafted cane armchairs, a rustic chimney hearth, and lush indoor greenery designed for relaxation and unhurried conversations.
                      </p>
                    </div>

                    {/* Chapter 2: The Ambience */}
                    <div
                      className={`ambience-chapter-item ${activeChapter === 1 ? "chapter-active" : "chapter-muted"}`}
                    >
                      <div className="chapter-indicator-row">
                        <span className="chapter-badge">CHAPTER 02</span>
                        <span className="chapter-name">THE AMBIENCE</span>
                      </div>
                      <h3 className="chapter-heading">Lantern Glow &amp; Nostalgic Frames</h3>
                      <p className="chapter-body">
                        Gentle golden illumination casting soft shadows across textured plaster walls, surrounded by authentic black-and-white portraits celebrating Punjab's timeless warmth.
                      </p>
                    </div>

                    {/* Chapter 3: The Taste */}
                    <div
                      className={`ambience-chapter-item ${activeChapter === 2 ? "chapter-active" : "chapter-muted"}`}
                    >
                      <div className="chapter-indicator-row">
                        <span className="chapter-badge">CHAPTER 03</span>
                        <span className="chapter-name">THE TASTE</span>
                      </div>
                      <h3 className="chapter-heading">Fresh Kulhad Brew &amp; Desi Ghee Aroma</h3>
                      <p className="chapter-body">
                        The comforting scent of freshly crushed cardamom, bubbling kulhad chai, and sizzling pure desi ghee churi that makes you feel at home every single time.
                      </p>
                    </div>
                  </div>

                  <div className="ambience-badges-row">
                    <span className="ambience-chip">Cozy Seating Corners</span>
                    <span className="ambience-chip">Freshly Brewed Aromas</span>
                    <span className="ambience-chip">Warm Punjabi Hospitality</span>
                  </div>
                </div>

                {/* RIGHT COLUMN: The High-Resolution Ambience Photo Fully Visible */}
                <div className="ambience-photo-column" data-reveal="media">
                  <div
                    className="ambience-showcase-frame"
                    onClick={() => setLightboxIndex(2)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setLightboxIndex(2);
                    }}
                    aria-label="Click to enlarge ambience photograph"
                  >
                    <picture>
                      <source srcSet="/interior/interior-ambience.webp" type="image/webp" />
                      <img
                        src="/interior/interior-ambience.jpg"
                        alt="Warm Ambience at Chai & Churi with rustic lanterns, black and white photo wall, and textured plaster chimney"
                        className="ambience-showcase-photo"
                        loading="lazy"
                      />
                    </picture>
                    <div className="ambience-photo-badge">
                      <span className="badge-live-pulse" />
                      <span>Click to View Fullscreen ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            DIGITAL MENU SECTION
        ========================================= */}
        <DigitalMenu />

        {/* =========================================
            GALLERY / ALL 4 INTERIOR PHOTOS & LIGHTBOX
        ========================================= */}
        <section id="gallery" className="gallery-section" aria-labelledby="gallery-heading">
          <div className="container-content">
            <div className="gallery-header-row" data-reveal>
              <div className="section-eyebrow" style={{ justifyContent: "center" }}>
                <span className="eyebrow-line" />
                <span>INTERIOR GALLERY</span>
                <span className="eyebrow-line" />
              </div>
              <h2 id="gallery-heading" className="gallery-title">
                Inside Chai &amp; Churi <FloralOrnament />
              </h2>
              <p className="gallery-subheading">
                Step inside our warm Dinanagar sanctuary. Click any photograph to view in high-resolution fullscreen.
              </p>
            </div>

            {/* Responsive Grid: Masonry/Editorial on Desktop, 2-Col on Mobile */}
            <div className="interior-gallery-grid">
              {interiorGalleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-grid-item item-${item.size}`}
                  data-reveal="card"
                  onClick={() => setLightboxIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightboxIndex(index);
                  }}
                  aria-label={`View photo: ${item.title}`}
                >
                  <div className="gallery-img-wrap">
                    <picture>
                      <source srcSet={item.src} type="image/webp" />
                      <img
                        src={item.fallback}
                        alt={item.title}
                        className="gallery-photo"
                        loading="lazy"
                      />
                    </picture>
                    <div className="gallery-item-overlay">
                      <span className="gallery-item-tag">{item.tag}</span>
                      <h3 className="gallery-item-name">{item.title}</h3>
                      <p className="gallery-item-desc">{item.subtitle}</p>
                      <span className="gallery-expand-hint">Click to enlarge ↗</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            VISIT & CATERING BANNER
        ========================================= */}
        <section id="visit" className="visit-cta-banner" aria-labelledby="visit-banner-title">
          <div className="container-content visit-cta-inner" data-reveal>
            <span className="hero-kicker" style={{ textAlign: "center", marginBottom: "8px" }}>
              GOLDEN AVENUE COLONY · DINANAGAR
            </span>
            <h2 id="visit-banner-title">Visit Churi House – Dina Nagar</h2>
            <p>Great chai, comforting desi ghee churi and a welcoming atmosphere made for every chai break.</p>

            <div className="visit-cta-buttons">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel-pill"
              >
                <MapPin size={16} /> Get Directions <ArrowRight size={15} />
              </a>
              <a href="#menu" className="btn-outline-pill">
                Explore Menu
              </a>
              <a href={phone} className="btn-outline-pill">
                <Phone size={16} /> Call {phoneNumberDisplay}
              </a>
            </div>

            <div className="info-cards-strip" data-reveal>
              <div className="info-card-box" data-reveal="card">
                <span>Address</span>
                <strong>Golden Avenue Colony, Dinanagar, Punjab 143531</strong>
              </div>
              <div className="info-card-box" data-reveal="card">
                <span>Phone</span>
                <strong>{phoneNumberDisplay}</strong>
              </div>
              <div className="info-card-box" data-reveal="card">
                <span>Hours</span>
                <strong>Open Every Day until 11:00 PM</strong>
              </div>
              <div className="info-card-box" data-reveal="card">
                <span>Experience</span>
                <strong>Dine-In, Takeaway &amp; Delivery</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer id="contact" className="site-footer-dark">
        <div className="container-content">
          <div className="footer-columns" data-reveal>
            <div className="footer-brand-side">
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <img
                  src="/chai-churi-logo.jpg"
                  alt="Churi House Logo"
                  style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(223, 145, 82, 0.45)", boxShadow: "0 4px 14px rgba(0,0,0,0.5)" }}
                />
                <div>
                  <h3 style={{ margin: 0, fontSize: "20px" }}>CHAI &amp; CHURI</h3>
                  <span style={{ fontSize: "11px", color: "#df9152", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Churi House · Dinanagar
                  </span>
                </div>
              </div>
              <p>
                Authentic Kadak Kulhad Chai and traditional Desi Ghee Churi, prepared fresh with love. A cozy space where good moments happen.
              </p>
            </div>

            <div className="footer-nav-col">
              <h4>Quick Links</h4>
              <ul className="footer-links-list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4>Visit &amp; Inquire</h4>
              <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#a6988b" }}>
                Golden Avenue Colony, Dinanagar, Punjab 143531
                <br />
                <a href={phone} style={{ color: "#df9152", textDecoration: "none", fontWeight: 600 }}>
                  {phoneNumberDisplay}
                </a>
                <br />
                Open Every Day until 11:00 PM
              </p>
            </div>

            <div className="footer-social-col">
              <h4>Connect With Us</h4>
              <p className="footer-social-desc">
                Follow our culinary moments &amp; chat directly with our kitchen.
              </p>
              <div className="footer-social-links">
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link footer-social-ig"
                  aria-label="Follow Chai & Churi on Instagram (opens in a new tab)"
                >
                  <InstagramIcon size={16} />
                  <span>Follow on Instagram</span>
                </a>
                <a
                  href={WHATSAPP_ACTION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link footer-social-wa"
                  aria-label="Chat with Chai & Churi on WhatsApp (opens in a new tab)"
                >
                  <WhatsAppIcon size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-row">
            <span>© {new Date().getFullYear()} Chai &amp; Churi · Churi House Dinanagar. All rights reserved.</span>
            <span style={{ color: "#7a6e64" }}>
              Good Food • Good Mood · Prepared in Pure Desi Ghee
            </span>
          </div>
        </div>
      </footer>

      {/* =========================================
          INTERACTIVE MENU MODAL
      ========================================= */}
      {menuModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setMenuModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-modal-heading"
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/chai-churi-logo.jpg"
                  alt="Chai & Churi Logo"
                  style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <span className="section-tag-gold" style={{ fontSize: "9px" }}>
                    CHAI &amp; CHURI · DINANAGAR
                  </span>
                  <h3 id="menu-modal-heading" style={{ margin: 0 }}>Digital Menu &amp; Specials</h3>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setMenuModalOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div className="menu-category-tabs">
                {menuCategories.map((cat, idx) => (
                  <button
                    key={cat.category}
                    type="button"
                    className={`category-tab-btn ${activeTab === idx ? "active" : ""}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              <div className="menu-items-grid">
                {menuCategories[activeTab].items.map((item) => (
                  <div key={item.name} className="menu-item-row">
                    <div className="menu-item-info">
                      <h5>{item.name}</h5>
                      <p>{item.desc}</p>
                    </div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <span style={{ fontSize: "12px", color: "#6b5e54" }}>
                To place an order or reserve a table:
              </span>
              <a href={phone} className="btn-caramel-pill" style={{ padding: "8px 20px" }}>
                <Phone size={14} /> Call {phoneNumberDisplay}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          FULLSCREEN INTERIOR LIGHTBOX MODAL
      ========================================= */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? prev === 0
                      ? interiorGalleryItems.length - 1
                      : prev - 1
                    : null
                );
              }}
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? prev === interiorGalleryItems.length - 1
                      ? 0
                      : prev + 1
                    : null
                );
              }}
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-image-stage">
              <picture>
                <source srcSet={interiorGalleryItems[lightboxIndex].src} type="image/webp" />
                <img
                  src={interiorGalleryItems[lightboxIndex].fallback}
                  alt={interiorGalleryItems[lightboxIndex].title}
                  className="lightbox-current-image"
                />
              </picture>
            </div>

            <div className="lightbox-caption-bar">
              <div className="lightbox-caption-info">
                <span className="lightbox-counter">
                  {lightboxIndex + 1} of {interiorGalleryItems.length} · {interiorGalleryItems[lightboxIndex].tag}
                </span>
                <h4 className="lightbox-caption-title">
                  {interiorGalleryItems[lightboxIndex].title}
                </h4>
                <p className="lightbox-caption-desc">
                  {interiorGalleryItems[lightboxIndex].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          PREMIUM FLOATING SOCIAL ACTION GROUP
      ========================================= */}
      <aside className="floating-social-group" aria-label="Social and messaging channels">
        <div className="floating-social-item">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-social-btn btn-floating-instagram"
            aria-label="Follow us on Instagram (opens in a new tab)"
          >
            <InstagramIcon size={22} className="social-icon-instagram" />
            <span className="floating-social-tooltip" role="tooltip">
              Follow us on Instagram
            </span>
          </a>
        </div>

        <div className="floating-social-item">
          <a
            href={WHATSAPP_ACTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-social-btn btn-floating-whatsapp"
            aria-label="Chat with us on WhatsApp (opens in a new tab)"
          >
            <WhatsAppIcon size={22} className="social-icon-whatsapp" />
            <span className="floating-social-tooltip" role="tooltip">
              Chat with us on WhatsApp
            </span>
          </a>
        </div>
      </aside>
    </div>
  );
}