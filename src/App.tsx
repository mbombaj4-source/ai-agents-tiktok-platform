import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Tableau de bord</h1>
      <p>Bienvenue sur la plateforme IA TikTok.</p>

      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <Card title="Agents actifs" value="4" />
        <Card title="Tâches complétées" value="17" />
        <Card title="En cours" value="0" />
      </div>
    </>
  );
}

function TikTok() {
  return <h1>🎬 Connexion TikTok</h1>;
}

function Agents() {
  return <h1>🤖 Agents IA</h1>;
}

function Analytics() {
  return <h1>📊 Analytics</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: 220,
            background: "#0f172a",
            color: "white",
            padding: 20,
          }}
        >
          <h2>🤖 AI Agents</h2>
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <MenuLink to="/">Dashboard</MenuLink>
              <MenuLink to="/tiktok">TikTok</MenuLink>
              <MenuLink to="/agents">Agents</MenuLink>
              <MenuLink to="/analytics">Analytics</MenuLink>
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <main style={{ flex: 1, padding: 40, background: "#f8fafc" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tiktok" element={<TikTok />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function MenuLink({ to, children }: { to: string; children: string }) {
  return (
    <li style={{ margin: "10px 0" }}>
      <Link to={to} style={{ color: "white", textDecoration: "none" }}>
        {children}
      </Link>
    </li>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 8,
        minWidth: 200,
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      <strong>{title}</strong>
      <p>{value}</p>
    </div>
  );
}
;
