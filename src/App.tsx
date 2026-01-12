export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>🤖 AI Agents</h2>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          <li>📊 Dashboard</li>
          <li>🎬 TikTok</li>
          <li>🧠 Agents</li>
          <li>📈 Analytics</li>
        </ul>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "40px", background: "#f8fafc" }}>
        <h1>Tableau de bord</h1>
        <p>Bienvenue sur la plateforme IA TikTok.</p>

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>Agents actifs: 4</div>
          <div style={cardStyle}>Tâches complétées: 17</div>
          <div style={cardStyle}>En cours: 0</div>
        </div>
      </main>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};
