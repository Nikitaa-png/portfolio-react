import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(248,247,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(139,92,246,0.1)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,92,246,0.12)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "18px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <motion.span
          whileHover={{ scale: 1.04 }}
          onClick={() => scrollTo("#home")}
          style={{
            fontSize: "22px", fontWeight: 800, cursor: "pointer",
            background: "linear-gradient(135deg,#7c3aed,#6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}
        >
          Portfolio
        </motion.span>

        {/* Desktop */}
        <ul style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none" }}
          className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <motion.button
                onClick={() => scrollTo(link.href)}
                whileHover={{ y: -1 }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#4c1d95", fontSize: "15px", fontWeight: 500,
                  position: "relative", padding: "4px 0",
                }}
                className="group"
              >
                {link.label}
                <span style={{
                  position: "absolute", bottom: 0, left: 0, height: "2px", width: 0,
                  background: "linear-gradient(90deg,#7c3aed,#6366f1)",
                  borderRadius: "2px", transition: "width 0.3s ease",
                }}
                  className="group-hover:w-full"
                />
              </motion.button>
            </li>
          ))}
          <li>
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(124,58,237,0.35)" }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "10px 24px", borderRadius: "50px", border: "none", cursor: "pointer",
                background: "linear-gradient(135deg,#7c3aed,#6366f1)",
                color: "white", fontSize: "14px", fontWeight: 600,
                boxShadow: "0 4px 14px rgba(124,58,237,0.25)",
              }}
            >
              Hire Me
            </motion.button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#7c3aed" }}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(248,247,255,0.97)",
              borderTop: "1px solid rgba(139,92,246,0.15)",
            }}
            className="md:hidden"
          >
            <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "28px 0", listStyle: "none" }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#4c1d95", fontSize: "17px", fontWeight: 500 }}>
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => scrollTo("#contact")}
                  style={{
                    padding: "10px 28px", borderRadius: "50px", border: "none", cursor: "pointer",
                    background: "linear-gradient(135deg,#7c3aed,#6366f1)", color: "white", fontWeight: 600,
                  }}>
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
