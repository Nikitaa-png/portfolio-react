import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

const skills = [
  { name: "HTML",       icon: FaHtml5,   bg: "#fff4f0", iconColor: "#e44d26", border: "#fcd5c5" },
  { name: "CSS",        icon: FaCss3Alt, bg: "#f0f6ff", iconColor: "#2965f1", border: "#bfdbfe" },
  { name: "JavaScript", icon: FaJs,      bg: "#fffbeb", iconColor: "#f0b429", border: "#fde68a" },
  { name: "React",      icon: FaReact,   bg: "#f0fdff", iconColor: "#00b4d8", border: "#a5f3fc" },
  { name: "GitHub",     icon: FaGithub,  bg: "#f5f3ff", iconColor: "#4c1d95", border: "#ddd6fe" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        width: "100%",
        padding: "100px 60px",
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft top/bottom accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg,#7c3aed,#6366f1,#a78bfa)" }} />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <p style={{ color: "#7c3aed", fontWeight: 600, fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>
          What I work with
        </p>
        <h2 style={{ fontSize: "clamp(30px,4vw,44px)", fontWeight: 800, color: "#1e1b4b" }}>
          My{" "}
          <span style={{ background: "linear-gradient(135deg,#7c3aed,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Skills
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "28px",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {skills.map(({ name, icon: Icon, bg, iconColor, border }) => (
          <motion.div
            key={name}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(124,58,237,0.15)" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              padding: "44px 24px",
              borderRadius: "20px",
              background: bg,
              border: `1.5px solid ${border}`,
              cursor: "pointer",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              boxShadow: "0 2px 12px rgba(124,58,237,0.06)",
            }}
          >
            <div style={{
              width: "68px", height: "68px", borderRadius: "18px",
              background: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 4px 16px ${border}`,
            }}>
              <Icon size={34} color={iconColor} />
            </div>
            <span style={{ color: "#1e1b4b", fontWeight: 700, fontSize: "15px" }}>
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
