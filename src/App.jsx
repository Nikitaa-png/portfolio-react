import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "white", fontFamily: "sans-serif" }}>
      
      {/* HERO SECTION */}
      <div
  style={{
    height: "100vh",
    display: "flex",
    justifyContent: "space-between", // spread left & right
    alignItems: "center",
    padding: "0 80px",
  }}
>
  {/* LEFT SIDE */}
  {/* LEFT SIDE */}
<div style={{ maxWidth: "600px" }}>
  <motion.h1
    initial={{ opacity: 0, y: -60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{ fontSize: "60px", marginBottom: "15px" }}
  >
    Hi, I'm Nikita
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    style={{
      fontSize: "22px",
      color: "#94a3b8",
      marginTop: "30px",
    }}
  >
    Motivated aspiring developer skilled in Python and React, passionate
    about building real-world projects and learning modern backend technologies 🚀
  </motion.p>

  
  <motion.button
    onClick={() => {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    }}
    whileHover={{
      scale: 1.1,
      boxShadow: "0px 0px 20px #38bdf8",
    }}
    whileTap={{ scale: 0.9 }}
    style={{
      padding: "14px 28px",
      fontSize: "16px",
      border: "none",
      backgroundColor: "#38bdf8",
      color: "black",
      borderRadius: "10px",
      cursor: "pointer",
      marginTop: "20px",
    }}
  >
    View My Work
  </motion.button>

  {/* 👈 ICONS BELOW BUTTON */}
  <div
    style={{
      marginTop: "20px",
      display: "flex",
      gap: "20px",
      justifyContent: "center"
    }}
  >
    <motion.a
      href="https://www.linkedin.com/in/nikita-singh-a0698a309"
      target="_blank"
      whileHover={{ scale: 1.2 }}
    >
      <FaLinkedin size={30} color="#0A66C2" />
    </motion.a>

    <motion.a
      href="https://github.com/Nikita-png"
      target="_blank"
      whileHover={{ scale: 1.2 }}
    >
      <FaGithub size={30} color="white" />
    </motion.a>
  </div>
</div>

  {/* RIGHT SIDE PROFILE */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    style={{
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #38bdf8",
      boxShadow: "0px 0px 30px #38bdf8",
    }}
  >
    <img
      src="/ChatGPT Image Mar 29, 2026, 03_22_39 PM.png" // 👈 put your image in public folder
      alt="profile"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </motion.div>
</div>

      {/* SKILLS SECTION */}
    <div style={{ padding: "100px", backgroundColor: "#020617" }}>
  
  <h2 style={{ fontSize: "36px", marginBottom: "40px", textAlign: "center" }}>
    Skills 🚀
  </h2>

  {/* SCROLL CONTAINER */}
  <div
    style={{
      display: "flex",
      gap: "30px",
      overflowX: "auto",
      paddingBottom: "20px",
      scrollBehavior: "smooth",
    }}
  >
    {["HTML", "CSS", "JavaScript", "React", "Python", "UI-UX Designer", "backend with fast api" , "talwind CSS"].map((skill) => (
      
      <motion.div
        key={skill}
        whileHover={{
          scale: 1.1,
          y: -10,
        }}
        style={{
          minWidth: "200px",   // IMPORTANT (forces horizontal scroll)
          padding: "40px 20px",
          fontSize: "20px",
          backgroundColor: "#1e293b",
          borderRadius: "12px",
          textAlign: "center",
          cursor: "pointer",
          flexShrink: 0, // prevents shrinking
        }}
      >
        {skill}
      </motion.div>

    ))}
  </div>
</div>
      {/* PROJECTS SECTION */}
      <div id="projects" style={{ padding: "80px", backgroundColor: "#0f172a", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Projects 💼
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          
          <motion.div
            whileHover={{ y: -10 }}
            style={{
              padding: "20px",
              backgroundColor: "#1e293b",
              borderRadius: "10px",
              width: "220px",
            }}
          >
            <h3>Notes App</h3>
            <p style={{ color: "#94a3b8" }}>A smart notes app</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            style={{
              padding: "20px",
              backgroundColor: "#1e293b",
              borderRadius: "10px",
              width: "220px",
            }}
          >
            <h3>File Manager</h3>
            <p style={{ color: "#94a3b8" }}>Python file system project</p>
          </motion.div>
          

        </div>
      </div>
      {/* CONTACT US SECTION */}
<div
  id="contact"
  style={{
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 20px",
    backgroundColor: "#0f172a", // dark background
    color: "white",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{ fontSize: "40px", marginBottom: "20px" }}
  >
    Contact Me
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    style={{ fontSize: "18px", maxWidth: "600px", textAlign: "center", marginBottom: "40px" }}
  >
    Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you!
  </motion.p>

  <motion.form
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "500px",
    }}
    onSubmit={(e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent."); // temporary placeholder
    }}
  >
    <input
      type="text"
      placeholder="Your Name"
      required
      style={{
        padding: "12px 16px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #94a3b8",
        backgroundColor: "#1e293b",
        color: "white",
      }}
    />

    <input
      type="email"
      placeholder="Your Email"
      required
      style={{
        padding: "12px 16px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #94a3b8",
        backgroundColor: "#1e293b",
        color: "white",
      }}
    />

    <textarea
      placeholder="Your Message"
      required
      rows={6}
      style={{
        padding: "12px 16px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #94a3b8",
        backgroundColor: "#1e293b",
        color: "white",
        resize: "none",
      }}
    />

    <motion.button
      type="submit"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px #38bdf8",
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "14px 28px",
        fontSize: "16px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "#38bdf8",
        color: "black",
        cursor: "pointer",
      }}
    >
      Send Message
    </motion.button>
  </motion.form>
</div>

    </div>
  );
}

export default App;