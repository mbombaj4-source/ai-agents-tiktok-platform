import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  Sparkles,
  TrendingUp,
  Calendar,
  Users,
  LogOut,
  Bot,
  Menu,
  X,
  Video,
} from 'lucide-react';
import { Overview } from '../components/Overview';
import { ContentCreator } from '../components/ContentCreator';
import { Analytics } from '../components/Analytics';
import { ContentCalendar } from '../components/ContentCalendar';
import { SalesMarketing } from '../components/SalesMarketing';
import { TikTokConnect } from '../components/TikTokConnect';

type View = 'overview' | 'content' | 'analytics' | 'calendar' | 'sales' | 'tiktok';

export function Dashboard() {
  const [currentView, setCurrentView] = useState<View>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navigation = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: LayoutDashboard },
    { id: 'tiktok', name: 'Connexion TikTok', icon: Video },
    { id: 'content', name: 'Création Contenu', icon: Sparkles },
    { id: 'analytics', name: 'Analyse & Trends', icon: TrendingUp },
    { id: 'calendar', name: 'Planification', icon: Calendar },
    { id: 'sales', name: 'Ventes & Marketing', icon: Users },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'overview':
        return <Overview />;
      case 'tiktok':
        return <TikTokConnect />;
      case 'content':
        return <ContentCreator />;
      case 'analytics':
        return <Analytics />;
      case 'calendar':
        return <ContentCalendar />;
      case 'sales':
        return <SalesMarketing />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-gray-900">AI Agents</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex h-screen pt-14 lg:pt-0">
        <aside
          className={`${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-gray-200 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-gray-900">AI Agents</h1>
                  <p className="text-xs text-gray-500">Platform</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentView(item.id as View);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="p-4 border-t border-gray-200">
              <div className="mb-3 px-4 py-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Connecté en tant que</p>
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.email}
                </p>
              </div>
              <button
                onClick={signOut}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Déconnexion</span>
              </button>
            </div>
          </div>
        </aside>

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 lg:p-8">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}
