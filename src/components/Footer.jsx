import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      padding: "32px 60px",
      background: "#f5f3ff",
      borderTop: "1px solid #ddd6fe",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
      }}>
        <span style={{ color: "#7c3aed", fontSize: "14px", opacity: 0.7 }}>
          © 2026 Nikita. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "14px" }}>
          {[
            { href: "https://www.linkedin.com/in/nikita-singh-a0698a309", icon: FaLinkedin },
            { href: "https://github.com/Nikita-png", icon: FaGithub },
          ].map(({ href, icon: Icon }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "36px", height: "36px", borderRadius: "10px",
                background: "white", border: "1px solid #ddd6fe",
                color: "#7c3aed", transition: "all 0.2s",
              }}>
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
