import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return <h1>📊 Dashboard</h1>;
}

function Agents() {
  return <h1>🤖 Agents IA</h1>;
}

function Analytics() {
  return <h1>📈 Analytics</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <aside style={{ width: 220, background: "#0f172a", color: "white", padding: 20 }}>
          <h2>AI Agents</h2>
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><Link to="/" style={linkStyle}>Dashboard</Link></li>
              <li><Link to="/agents" style={linkStyle}>Agents</Link></li>
              <li><Link to="/analytics" style={linkStyle}>Analytics</Link></li>
            </ul>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: 40 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  display: "block",
  margin: "10px 0",
};
