import { useState, useMemo } from "react";
import {
  Sparkles,
  ShoppingBag,
  Search,
  MessageCircle,
  Phone,
  Flame,
  Check,
  ChevronRight,
  Leaf,
  Coffee,
  Heart,
  ExternalLink
} from "lucide-react";

export interface MenuItem {
  name: string;
  price: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  filterKey: string;
  badge?: string;
  supportingText?: string;
  image: string;
  isSignature?: boolean;
  items: MenuItem[];
}

export const menuCategoriesData: MenuCategory[] = [
  {
    id: "desi-ghee-churi",
    title: "Desi Ghee Churi",
    filterKey: "churi",
    badge: "Goodness Of Desi Ghee & Gur",
    supportingText: "Healthy Food That You Can Eat Daily",
    image: "/menu/desi-ghee-churi.jpg",
    isSignature: true,
    items: [
      { name: "Desi Ghee Churi", price: "₹60", isPopular: true },
      { name: "Dry Fruit Churi (Desi Ghee)", price: "₹99", isPopular: true },
      { name: "Desi Ghee Double Shot Churi", price: "₹99", isPopular: true },
    ],
  },
  {
    id: "kaadni-milk",
    title: "Kaadni Milk",
    filterKey: "milk",
    badge: "Healthy & Delicious Milk",
    supportingText: "Available Only At CHAI & CHURI HOUSE",
    image: "/menu/kaadni-milk.jpg",
    isSignature: true,
    items: [
      { name: "Kaadni Milk", price: "₹99" },
      { name: "Kesar Kaadni Milk", price: "₹109", isPopular: true },
      { name: "Kesar Badam Milk", price: "₹119", isPopular: true },
      { name: "Cream Kaadni Milk", price: "₹119" },
    ],
  },
  {
    id: "sandwich",
    title: "Sandwich",
    filterKey: "sandwich",
    image: "/menu/sandwich.jpg",
    items: [
      { name: "Aloo Toast Sandwich", price: "₹89" },
      { name: "Spicy Cheese Corn Sandwich", price: "₹99", isPopular: true },
      { name: "Bombay Sandwich", price: "₹119" },
      { name: "Fresh Veggie Sandwich", price: "₹149" },
      { name: "Paneer Crunch Sandwich", price: "₹169", isPopular: true },
      { name: "Paneer Chutney Sandwich", price: "₹179" },
      { name: "Spinach Corn Sandwich", price: "₹179" },
      { name: "House Club Sandwich", price: "₹199", isPopular: true },
    ],
  },
  {
    id: "burger",
    title: "Burger",
    filterKey: "burger",
    image: "/menu/burger.jpg",
    items: [
      { name: "Herb Aloo Tikki Burger", price: "₹49" },
      { name: "Herb Aloo Tikki Cheese Burger", price: "₹69" },
      { name: "Herb Achari Aloo Tikki Burger", price: "₹79" },
      { name: "Herb Mexican Chilli & Cheese Burger (With Fries)", price: "₹99", isPopular: true },
      { name: "Herb Maharaja Patty (With Fries)", price: "₹119", isPopular: true },
      { name: "Herb Mexican Paneer Crunch Burger (With Fries)", price: "₹149", isPopular: true },
    ],
  },
  {
    id: "lassi",
    title: "Lassi",
    filterKey: "lassi",
    image: "/menu/lassi.jpg",
    items: [
      { name: "Sweet Lassi", price: "₹99", isPopular: true },
      { name: "Kesar Pista Lassi", price: "₹99", isPopular: true },
      { name: "Puchina Lassi", price: "₹119" },
      { name: "Chocolate Lassi", price: "₹119" },
      { name: "Gulab Lassi", price: "₹129" },
      { name: "Strawberry Lassi", price: "₹139" },
    ],
  },
  {
    id: "mojito",
    title: "Mojito / Ice Tea / Lemonade",
    filterKey: "mojito",
    image: "/menu/mojito.jpg",
    items: [
      { name: "Nimbu Pani", price: "₹89" },
      { name: "Masala Lemonade", price: "₹99" },
      { name: "Lemon Ice Tea", price: "₹119" },
      { name: "Classic Mojito", price: "₹99", isPopular: true },
      { name: "Blue Curracao Mojito", price: "₹119", isPopular: true },
      { name: "Peach Mojito", price: "₹129" },
      { name: "Watermelon Mojito", price: "₹129" },
      { name: "Green Apple Mojito", price: "₹129" },
      { name: "Blueberry Mojito", price: "₹129" },
    ],
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    filterKey: "coffee",
    image: "/menu/hot-coffee.jpg",
    items: [
      { name: "Hot Coffee", price: "₹59" },
      { name: "Americano", price: "₹69" },
      { name: "Cafe Latte", price: "₹79", isPopular: true },
      { name: "Cappuccino", price: "₹79", isPopular: true },
      { name: "Hazelnut Coffee", price: "₹89" },
      { name: "Caramel Coffee", price: "₹89" },
    ],
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    filterKey: "coffee",
    image: "/menu/cold-coffee.jpg",
    items: [
      { name: "Classic Cold Coffee", price: "₹89", isPopular: true },
      { name: "Biscoff Cold Coffee", price: "₹99", isPopular: true },
      { name: "Hazelnut Cold Coffee", price: "₹99" },
      { name: "Caramel Cold Coffee", price: "₹109", isPopular: true },
    ],
  },
  {
    id: "ice-cream-shake",
    title: "Ice Cream Shake",
    filterKey: "shakes",
    image: "/menu/ice-cream-shake.jpg",
    items: [
      { name: "Belgian Chocolate Shake", price: "₹149", isPopular: true },
      { name: "Mix Fruit Shake", price: "₹149" },
      { name: "American Nuts Shake", price: "₹149" },
      { name: "Malai Rabri Shake", price: "₹149", isPopular: true },
    ],
  },
  {
    id: "regular-shakes",
    title: "Regular Shakes",
    filterKey: "shakes",
    image: "/menu/regular-shakes.jpg",
    items: [
      { name: "Vanilla Shake", price: "₹89" },
      { name: "Strawberry Shake", price: "₹89" },
      { name: "Butter Scotch Shake", price: "₹99" },
      { name: "Black Current Shake", price: "₹99" },
      { name: "Bubblegum Shake", price: "₹109" },
      { name: "Kitkat Shake", price: "₹119", isPopular: true },
      { name: "Oreo Shake", price: "₹119", isPopular: true },
      { name: "Brownie Shake", price: "₹119" },
    ],
  },
  {
    id: "ice-cream",
    title: "Ice Cream",
    filterKey: "icecream",
    image: "/menu/ice-cream.jpg",
    items: [
      { name: "Belgian Chocolate", price: "₹89", isPopular: true },
      { name: "Mix Fruit", price: "₹89" },
      { name: "American Nuts", price: "₹89" },
      { name: "Malai Rabri", price: "₹89", isPopular: true },
    ],
  },
  {
    id: "brownie",
    title: "Brownie",
    filterKey: "brownie",
    image: "/menu/brownie.jpg",
    items: [
      { name: "Walnut Brownie", price: "₹89" },
      { name: "Brownie with Ice Cream", price: "₹119", isPopular: true },
      { name: "Sizzling Brownie", price: "₹159", isPopular: true },
    ],
  },
];

const categoryFilters = [
  { key: "all", label: "All Items" },
  { key: "churi", label: "Desi Ghee Churi" },
  { key: "milk", label: "Kaadni Milk" },
  { key: "sandwich", label: "Sandwich" },
  { key: "burger", label: "Burger" },
  { key: "lassi", label: "Lassi" },
  { key: "mojito", label: "Mojito & Drinks" },
  { key: "coffee", label: "Coffee" },
  { key: "shakes", label: "Shakes" },
  { key: "icecream", label: "Ice Cream" },
  { key: "brownie", label: "Brownie" },
];

const categoryChapterLabels: Record<string, string> = {
  "desi-ghee-churi": "CHAPTER 01 • SIGNATURE CRAFT",
  "kaadni-milk": "CHAPTER 02 • SLOW-SIMMERED TRADITION",
  "sandwich": "CHAPTER 03 • ARTISANAL GRILLS",
  "burger": "CHAPTER 04 • SAVOURY BURGERS",
  "lassi": "CHAPTER 05 • TRADITIONAL COOLERS",
  "mojito": "CHAPTER 06 • REFRESHING BREWS",
  "hot-coffee": "CHAPTER 07 • ROASTED ESPRESSO",
  "cold-coffee": "CHAPTER 08 • CHILLED VELVET",
  "ice-cream-shake": "CHAPTER 09 • DESSERT SHAKES",
  "regular-shakes": "CHAPTER 10 • CLASSIC SHAKES",
  "ice-cream": "CHAPTER 11 • HAND-CRAFTED SCOOPS",
  "brownie": "CHAPTER 12 • WARM INDULGENCE",
};

export function DigitalMenu() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    let result = menuCategoriesData;

    if (activeFilter !== "all") {
      result = result.filter((cat) => cat.filterKey === activeFilter);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      result = result
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) =>
            item.name.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.items.length > 0);
    }

    return result;
  }, [activeFilter, searchQuery]);

  const handleCategoryClick = (key: string) => {
    setActiveFilter(key);
    // Smooth scroll down to the grid when switching categories if user is high up
    const gridEl = document.querySelector(".digital-menu-grid");
    if (gridEl) {
      const rect = gridEl.getBoundingClientRect();
      if (rect.top < -50 || rect.top > 400) {
        gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleWhatsAppOrder = (itemName?: string, price?: string) => {
    const phone = "918437597727";
    const text = itemName
      ? `Hello Chai & Churi! I would like to order: ${itemName} (${price}). Please let me know the preparation time.`
      : `Hello Chai & Churi! I would like to place an order from your digital menu. Please share the current availability.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="menu" className="digital-menu-section" aria-labelledby="digital-menu-title">
      <div className="container-content">
        {/* Top Tagline Banner */}
        <div className="menu-top-banner" data-reveal>
          <span className="banner-ghee-tag">
            <Sparkles size={14} className="sparkle-icon" />
            Prepared in Pure Desi Ghee For An Authentic Rich Taste
          </span>
          <div className="brand-tagline-text">
            <span>GOOD FOOD</span>
            <span className="dot-divider">•</span>
            <span>GOOD MOOD</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="digital-menu-header" data-reveal>
          <span className="section-tag-gold">OUR MENU</span>
          <h2 id="digital-menu-title" className="section-h2-serif">
            Traditional Flavours, Freshly Made With Love
          </h2>
          <p className="digital-menu-subtitle">
            Authentic Kadak Kulhad Chai, handmade Desi Ghee Churi, artisanal burgers, shakes &amp; slow-boiled Kaadni Milk.
          </p>
        </div>

        {/* Search & Category Filter Navigation Bar */}
        <div className="menu-nav-sticky-wrapper" data-reveal>
          <div className="menu-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search dishes (e.g., Churi, Kaadni Milk, Sandwich, Lassi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="category-chips-bar" role="tablist" aria-label="Menu categories">
            {categoryFilters.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.key}
                onClick={() => handleCategoryClick(tab.key)}
                className={`category-chip ${activeFilter === tab.key ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid: 2 Columns on Desktop, 1 Column on Mobile */}
        <div className="digital-menu-grid">
          {filteredCategories.map((category, idx) => (
            <article
              key={category.id}
              id={`cat-${category.id}`}
              className={`menu-category-card cat-theme-${category.id} ${category.isSignature ? "signature-card" : ""}`}
              data-reveal="card"
              style={{ "--stagger-delay": `${(idx % 6) * 0.07}s` } as React.CSSProperties}
            >
              {/* Category Card Header */}
              <div className="card-top-header">
                <div className="card-title-group">
                  <div className="category-chapter-eyebrow">
                    <span className="eyebrow-accent-dot" />
                    <span>{categoryChapterLabels[category.id] || "MENU CHAPTER"}</span>
                  </div>
                  <div className="card-heading-row">
                    <h3 className="category-title">{category.title}</h3>
                    {category.isSignature && (
                      <span className="signature-pill">
                        <Flame size={12} /> House Special
                      </span>
                    )}
                  </div>
                  {category.badge && (
                    <div className="card-gold-badge">
                      <span>{category.badge}</span>
                    </div>
                  )}
                  {category.supportingText && (
                    <div className="card-supporting-text">
                      <span>{category.supportingText}</span>
                    </div>
                  )}
                </div>

                {/* Category Food Visual (Curated & Cleaned from original photography) */}
                <div className="category-visual-frame">
                  <img
                    src={category.image}
                    alt={`${category.title} at Chai & Churi`}
                    className="category-food-img"
                    loading="lazy"
                  />
                  <div className="visual-sheen-overlay" />
                </div>
              </div>

              {/* Items List */}
              <div className="category-items-list">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="menu-dish-row">
                    <div className="dish-info">
                      <div className="dish-name-line">
                        <span className="dish-name">{item.name}</span>
                        {item.isPopular && (
                          <span className="must-try-pill">Must Try</span>
                        )}
                      </div>
                    </div>
                    <div className="dish-price-action">
                      <span className="dish-price">{item.price}</span>
                      <button
                        type="button"
                        onClick={() => handleWhatsAppOrder(item.name, item.price)}
                        className="dish-order-btn"
                        title={`Order ${item.name} via WhatsApp`}
                        aria-label={`Order ${item.name}`}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="menu-no-results">
            <p>No dishes found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="btn-caramel-pill"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Global Order / WhatsApp CTA Footer Banner */}
        <div className="menu-action-banner" data-reveal>
          <div className="menu-banner-content">
            <div className="menu-banner-brand">
              <img
                src="/chai-churi-logo.jpg"
                alt="Chai & Churi"
                className="menu-banner-logo"
              />
              <div>
                <h4>Craving Authentic Chai &amp; Desi Ghee Churi?</h4>
                <p>Order fresh takeaway or dine-in directly at Chai &amp; Churi House, Dina Nagar.</p>
              </div>
            </div>
            <div className="menu-banner-buttons">
              <button
                type="button"
                onClick={() => handleWhatsAppOrder()}
                className="btn-whatsapp-order"
              >
                <MessageCircle size={18} /> Order on WhatsApp
              </button>
              <a href="tel:+918437597727" className="btn-call-order">
                <Phone size={16} /> Call to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
