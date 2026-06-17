import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg,#f8f7ff 0%,#ede9fe 50%,#e0e7ff 100%)",
      }}
    >
      {/* Soft background blobs */}
      <div style={{ position: "absolute", top: "10%", left: "-80px", width: "500px", height: "500px", background: "radial-gradient(ellipse,rgba(167,139,250,0.25),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "-80px", width: "450px", height: "450px", background: "radial-gradient(ellipse,rgba(99,102,241,0.2),transparent 70%)", pointerEvents: "none" }} />

      <div style={{
        width: "100%", maxWidth: "1280px", margin: "0 auto",
        padding: "120px 60px 80px",
        display: "flex", flexDirection: "row", alignItems: "center",
        justifyContent: "space-between", gap: "60px",
      }}
        className="flex-col-reverse md:flex-row"
      >
        {/* Left */}
        <div style={{ flex: 1 }}>
          <motion.p {...fadeUp(0)} style={{ color: "#7c3aed", fontWeight: 600, fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "16px" }}>
            Welcome to my portfolio
          </motion.p>

          <motion.h1 {...fadeUp(0.1)} style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: 800, lineHeight: 1.1, color: "#1e1b4b", marginBottom: "16px" }}>
            Hi, I'm{" "}
            <span style={{ background: "linear-gradient(135deg,#7c3aed,#6366f1,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Nikita
            </span>
          </motion.h1>

          <motion.h2 {...fadeUp(0.2)} style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 600, color: "#6366f1", marginBottom: "24px" }}>
            Frontend Developer
          </motion.h2>

          <motion.p {...fadeUp(0.3)} style={{ fontSize: "17px", color: "#4c1d95", lineHeight: 1.8, maxWidth: "520px", marginBottom: "40px", opacity: 0.8 }}>
            I am a passionate React Developer who loves building modern and user-friendly web applications.
            I am currently focusing on improving my backend skills and aim to build more real-world, impactful projects.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.4)} style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
            <motion.button
              onClick={() => scrollTo("#projects")}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(99,102,241,0.3)" }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "13px 30px", borderRadius: "50px", cursor: "pointer",
                border: "2px solid #6366f1", background: "transparent",
                color: "#6366f1", fontSize: "15px", fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              View Projects
            </motion.button>

            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "13px 30px", borderRadius: "50px", cursor: "pointer",
                border: "none",
                background: "linear-gradient(135deg,#7c3aed,#6366f1)",
                color: "white", fontSize: "15px", fontWeight: 600,
                boxShadow: "0 4px 18px rgba(124,58,237,0.3)",
              }}
            >
              ✨ Hire Me
            </motion.button>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              height: "1px", marginBottom: "28px",
              background: "linear-gradient(90deg,rgba(124,58,237,0.4),rgba(99,102,241,0.3),transparent)",
              transformOrigin: "left",
            }}
          />

          {/* Social */}
          <motion.div {...fadeUp(0.6)} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "#7c3aed", fontSize: "13px", fontWeight: 500, opacity: 0.7 }}>Find me on</span>
            {[
              { href: "https://www.linkedin.com/in/nikita-singh-a0698a309", icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://github.com/Nikita-png", icon: FaGithub, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: "white", border: "1px solid rgba(124,58,237,0.2)",
                  color: "#7c3aed", boxShadow: "0 2px 10px rgba(124,58,237,0.1)",
                  transition: "all 0.2s",
                }}
              >
                <Icon size={19} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — profile image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div style={{ position: "relative", width: "300px", height: "300px" }}>
            {/* Pulsing ring 1 — outermost */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.55, 0.25] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: "-28px", borderRadius: "50%",
                border: "2px solid rgba(99,102,241,0.5)",
                pointerEvents: "none",
              }}
            />
            {/* Pulsing ring 2 — middle, offset timing */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.45, 0.2] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.8, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: "-14px", borderRadius: "50%",
                border: "1.5px solid rgba(124,58,237,0.4)",
                pointerEvents: "none",
              }}
            />
            {/* Spinning gradient ring */}
            <div className="spin-slow" style={{
              position: "absolute", inset: "-6px", borderRadius: "50%",
              background: "conic-gradient(from 0deg,#7c3aed,#6366f1,#60a5fa,#a78bfa,#7c3aed)",
              padding: "3px",
            }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#ede9fe" }} />
            </div>
            {/* Profile image — floating only */}
            <div style={{
              position: "absolute", inset: "4px", borderRadius: "50%", overflow: "hidden",
            }}>
              <img
                src="/ChatGPT Image Mar 29, 2026, 03_22_39 PM.png"
                alt="Nikita"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
      >
        <span style={{ color: "#a78bfa", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{ width: "2px", height: "32px", background: "linear-gradient(to bottom,#7c3aed,transparent)", borderRadius: "2px" }}
        />
      </motion.div>
    </section>
  );
}
