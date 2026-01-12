import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Récupérer la session actuelle
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    // 2. Écouter les changements de connexion
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  // ❌ PAS CONNECTÉ
  if (!user) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Connexion</h1>
        <button
          onClick={() =>
            supabase.auth.signInWithOAuth({
              provider: "github",
            })
          }
        >
          Login with GitHub
        </button>
      </div>
    );
  }

  // ✅ CONNECTÉ
  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Connecté en tant que :</p>
      <strong>{user.email}</strong>

      <br /><br />

      <button onClick={() => supabase.auth.signOut()}>
        Se déconnecter
      </button>
    </div>
  );
}
