import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaClock } from "react-icons/fa";

const projects = [
  {
    title: "Previous Project",
    subtitle: "Basic Frontend Project",
    description: "A clean, responsive frontend project built with HTML, CSS, and JavaScript. Focused on layout design, interactivity, and modern UI patterns.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    accentBorder: "#ddd6fe",
    githubLink: "https://github.com/Nikita-png",
    liveLink: null, // set your deployed URL here when ready
  },
  {
    title: "Tasty Recipe App",
    subtitle: "React-Based Recipe App",
    description: "A dynamic recipe discovery app built with React. Users can search, browse, and explore recipes with a smooth, modern interface powered by a public API.",
    tags: ["React", "API", "CSS"],
    accent: "#6366f1",
    accentLight: "#eef2ff",
    accentBorder: "#c7d2fe",
    githubLink: "https://github.com/Nikita-png",
    liveLink: "https://tasty-recipe-self.vercel.app",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function LiveButton({ liveLink, accent }) {
  const [showTip, setShowTip] = useState(false);

  if (liveLink) {
    return (
      <motion.a
        href={liveLink}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "11px 24px", borderRadius: "50px", border: "none",
          background: `linear-gradient(135deg,${accent},${accent}cc)`,
          color: "white", fontSize: "14px", fontWeight: 600,
          boxShadow: `0 4px 14px ${accent}40`,
          textDecoration: "none", cursor: "pointer",
        }}
      >
        <FaExternalLinkAlt size={12} />
        View Project
      </motion.a>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <motion.button
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "11px 24px", borderRadius: "50px", border: "none",
          background: "#e5e7eb", color: "#9ca3af",
          fontSize: "14px", fontWeight: 600, cursor: "not-allowed",
        }}
      >
        <FaClock size={12} />
        Coming Soon
      </motion.button>

      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute", bottom: "calc(100% + 10px)", left: "50%",
              transform: "translateX(-50%)",
              background: "#1e1b4b", color: "white",
              fontSize: "12px", fontWeight: 500,
              padding: "7px 14px", borderRadius: "8px",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              zIndex: 10,
            }}
          >
            🚀 Live demo coming soon!
            {/* Arrow */}
            <div style={{
              position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
              width: 0, height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #1e1b4b",
            }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        width: "100%",
        padding: "100px 60px",
        background: "#f8f7ff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>
          What I've built
        </p>
        <h2 style={{ fontSize: "clamp(30px,4vw,44px)", fontWeight: 800, color: "#1e1b4b" }}>
          My{" "}
          <span style={{ background: "linear-gradient(135deg,#6366f1,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Projects
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map(({ title, subtitle, description, tags, accent, accentLight, accentBorder, githubLink, liveLink }) => (
          <motion.div
            key={title}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(124,58,237,0.14)" }}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "40px",
              border: `1.5px solid ${accentBorder}`,
              boxShadow: "0 4px 16px rgba(124,58,237,0.07)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top color bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,${accent},${accent}99)` }} />

            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#1e1b4b", marginBottom: "6px" }}>{title}</h3>
            <p style={{ color: accent, fontSize: "13px", fontWeight: 600, marginBottom: "16px" }}>{subtitle}</p>
            <p style={{ color: "#4c1d95", fontSize: "15px", lineHeight: 1.75, marginBottom: "28px", opacity: 0.75 }}>{description}</p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
              {tags.map((tag) => (
                <span key={tag} style={{
                  padding: "5px 14px", borderRadius: "50px",
                  background: accentLight, color: accent,
                  fontSize: "12px", fontWeight: 600,
                  border: `1px solid ${accentBorder}`,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <LiveButton liveLink={liveLink} accent={accent} />

              <motion.a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, background: accentLight }}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "11px 24px", borderRadius: "50px",
                  border: `1.5px solid ${accentBorder}`,
                  background: "white", color: accent,
                  fontSize: "14px", fontWeight: 600,
                  textDecoration: "none", cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <FaGithub size={15} />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
