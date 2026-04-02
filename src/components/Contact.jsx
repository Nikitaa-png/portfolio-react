import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  const inputStyle = {
    padding: "13px 16px", borderRadius: "12px",
    background: "#f8f7ff", border: "1.5px solid #ddd6fe",
    color: "#1e1b4b", fontSize: "14px", outline: "none", width: "100%",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        padding: "100px 60px",
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          Let's connect
        </p>
        <h2 style={{ fontSize: "clamp(30px,4vw,44px)", fontWeight: 800, color: "#1e1b4b", marginBottom: "14px" }}>
          Get In{" "}
          <span style={{ background: "linear-gradient(135deg,#7c3aed,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Touch
          </span>
        </h2>
        <p style={{ color: "#4c1d95", fontSize: "16px", maxWidth: "460px", margin: "0 auto", opacity: 0.7, lineHeight: 1.7 }}>
          Have a project in mind or just want to say hi? Fill out the form and I'll get back to you.
        </p>
      </motion.div>

      {/* Layout */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        alignItems: "start",
      }}>
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          {[
            { icon: FaEnvelope, label: "Email", value: "nikita@example.com" },
            { icon: FaMapMarkerAlt, label: "Location", value: "India" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: "14px",
              padding: "18px 20px", borderRadius: "16px",
              background: "#f8f7ff", border: "1.5px solid #ddd6fe",
            }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "12px",
                background: "linear-gradient(135deg,#7c3aed,#6366f1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={17} color="white" />
              </div>
              <div>
                <p style={{ color: "#a78bfa", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px" }}>{label}</p>
                <p style={{ color: "#1e1b4b", fontWeight: 600, fontSize: "14px" }}>{value}</p>
              </div>
            </div>
          ))}

          <div style={{
            padding: "20px", borderRadius: "16px",
            background: "linear-gradient(135deg,#f5f3ff,#eef2ff)",
            border: "1.5px solid #ddd6fe",
          }}>
            <p style={{ color: "#4c1d95", fontSize: "14px", lineHeight: 1.75 }}>
              Open to freelance opportunities and full-time roles. Let's build something great together.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          onSubmit={handleSubmit}
          style={{
            display: "flex", flexDirection: "column", gap: "20px",
            padding: "40px", borderRadius: "24px",
            background: "#f8f7ff", border: "1.5px solid #ddd6fe",
            boxShadow: "0 4px 24px rgba(124,58,237,0.07)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { type: "text",  placeholder: "Your name",    label: "Name" },
              { type: "email", placeholder: "your@email.com", label: "Email" },
            ].map(({ type, placeholder, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <label style={{ color: "#7c3aed", fontSize: "13px", fontWeight: 600 }}>{label}</label>
                <input type={type} placeholder={placeholder} required style={inputStyle} />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <label style={{ color: "#7c3aed", fontSize: "13px", fontWeight: 600 }}>Message</label>
            <textarea
              placeholder="Tell me about your project..."
              required rows={5}
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(124,58,237,0.35)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              padding: "14px", borderRadius: "12px", border: "none",
              background: "linear-gradient(135deg,#7c3aed,#6366f1)",
              color: "white", fontWeight: 700, fontSize: "15px", cursor: "pointer",
              boxShadow: "0 4px 18px rgba(124,58,237,0.3)",
            }}
          >
            {submitted ? "Message Sent ✓" : <><FaPaperPlane size={14} /> Send Message</>}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
