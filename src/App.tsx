import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Page({ title }: { title: string }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Page title="Dashboard" />} />
        <Route path="/tiktok" element={<Page title="Connexion TikTok" />} />
        <Route path="/agents" element={<Page title="Agents IA" />} />
        <Route path="/analytics" element={<Page title="Analytics" />} />
      </Routes>
    </BrowserRouter>
  );
}
