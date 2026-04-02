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

        {/* Right — profile image with animations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Outer container — extra space for orbiting elements */}
          <div style={{ position: "relative", width: "380px", height: "380px" }}>

            {/* Outermost pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: "-20px", borderRadius: "50%",
                border: "2px solid rgba(124,58,237,0.25)",
                pointerEvents: "none",
              }}
            />

            {/* Second pulsing ring — offset timing */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 1, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: "-6px", borderRadius: "50%",
                border: "1.5px solid rgba(99,102,241,0.3)",
                pointerEvents: "none",
              }}
            />

            {/* Spinning gradient ring */}
            <div className="spin-slow" style={{
              position: "absolute", inset: "20px", borderRadius: "50%",
              background: "conic-gradient(from 0deg,#7c3aed,#6366f1,#a78bfa,#c4b5fd,#7c3aed)",
              padding: "3px",
            }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#ede9fe" }} />
            </div>

            {/* Profile image — floating */}
            <div className="float-animation glow-pulse" style={{
              position: "absolute", inset: "26px", borderRadius: "50%", overflow: "hidden",
              boxShadow: "0 8px 40px rgba(124,58,237,0.2)",
            }}>
              <img
                src="/ChatGPT Image Mar 29, 2026, 03_22_39 PM.png"
                alt="Nikita"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Orbiting dot 1 — top right */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
              style={{ position: "absolute", inset: "10px", borderRadius: "50%", pointerEvents: "none" }}
            >
              <div style={{
                position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)",
                width: "14px", height: "14px", borderRadius: "50%",
                background: "linear-gradient(135deg,#7c3aed,#a78bfa)",
                boxShadow: "0 0 14px rgba(124,58,237,0.7)",
              }} />
            </motion.div>

            {/* Orbiting dot 2 — bottom left, opposite direction */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ position: "absolute", inset: "0px", borderRadius: "50%", pointerEvents: "none" }}
            >
              <div style={{
                position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)",
                width: "10px", height: "10px", borderRadius: "50%",
                background: "linear-gradient(135deg,#6366f1,#c4b5fd)",
                boxShadow: "0 0 10px rgba(99,102,241,0.7)",
              }} />
            </motion.div>

            {/* Orbiting dot 3 — small, fast */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              style={{ position: "absolute", inset: "30px", borderRadius: "50%", pointerEvents: "none" }}
            >
              <div style={{
                position: "absolute", top: "50%", right: "-4px", transform: "translateY(-50%)",
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#a78bfa",
                boxShadow: "0 0 8px rgba(167,139,250,0.8)",
              }} />
            </motion.div>

            {/* Floating badge — "React Dev" */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: "absolute", top: "18px", left: "-20px",
                background: "white",
                border: "1.5px solid #ddd6fe",
                borderRadius: "50px",
                padding: "8px 16px",
                display: "flex", alignItems: "center", gap: "8px",
                boxShadow: "0 8px 24px rgba(124,58,237,0.15)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "16px" }}>⚛️</span>
              <span style={{ color: "#7c3aed", fontWeight: 700, fontSize: "13px" }}>React Dev</span>
            </motion.div>

            {/* Floating badge — "Open to Work" */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: "absolute", bottom: "28px", right: "-24px",
                background: "white",
                border: "1.5px solid #ddd6fe",
                borderRadius: "50px",
                padding: "8px 16px",
                display: "flex", alignItems: "center", gap: "8px",
                boxShadow: "0 8px 24px rgba(99,102,241,0.15)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "16px" }}>🚀</span>
              <span style={{ color: "#6366f1", fontWeight: 700, fontSize: "13px" }}>Open to Work</span>
            </motion.div>

            {/* Floating badge — experience */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: "absolute", bottom: "60px", left: "-28px",
                background: "linear-gradient(135deg,#7c3aed,#6366f1)",
                borderRadius: "50px",
                padding: "8px 16px",
                display: "flex", alignItems: "center", gap: "8px",
                boxShadow: "0 8px 20px rgba(124,58,237,0.35)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "14px" }}>💻</span>
              <span style={{ color: "white", fontWeight: 700, fontSize: "12px" }}>Frontend Dev</span>
            </motion.div>

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
