import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, Landmark } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './lightswind/sheet';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './lightswind/select';
import SidebarContent from './SidebarContent';
import './SidebarLayout.css';
import { useLanguage } from '../Translation/useLanguage';
import { translations} from '../Translation/Translation';
import type { Language } from '../Translation/LanguageContext';

export default function SidebarLayout() {
  const { language, setLanguage, theme } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Desktop */}
        <div className="hidden lg:flex h-screen">
          <aside className="w-64 flex-shrink-0">
            <SidebarContent />
          </aside>
          <main className="flex-1 overflow-auto p-8">
            <Outlet />
          </main>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <header className="sticky top-0 z-50 bg-[#0A2540] text-white border-b border-white/10">
            <div className="flex items-center justify-between p-4">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="text-white hover:bg-white/10 p-2 rounded">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <SidebarContent
                    onNavigate={() => setMobileMenuOpen(false)}
                  />
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-[#14B8A6]" />
                <h1 className="text-white">{t.appTitle}</h1>
              </div>

              <Select value={language} onValueChange={value => setLanguage(value as Language)}>
                <SelectTrigger className="w-16 bg-transparent border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EN">EN</SelectItem>
                  <SelectItem value="NL">NL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </header>
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
