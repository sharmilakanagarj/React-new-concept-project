import { NavLink } from 'react-router-dom';
import { Landmark, Moon, Sun, Globe } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './lightswind/select';
import { Button } from './lightswind/button';
import { SidebarData } from './SidebarData';
import { useLanguage } from '../Translation/useLanguage';
import { translations, type Language } from '../Translation/Translation';


interface SidebarContentProps {
  onNavigate?: () => void;
}

export default function SidebarContent({
  onNavigate,
}: SidebarContentProps) {
  const { language, setLanguage, theme, toggleTheme } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex flex-col h-full bg-[#0A2540] text-white">
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <Landmark className="w-8 h-8 text-[#14B8A6]" />
        <h1 className="text-white">{t.appTitle}</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {SidebarData.map(({ key, icon: Icon, path }) => (
          <NavLink
            key={key}
            to={path}
            onClick={onNavigate}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{t[key]}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <Button
          onClick={toggleTheme}
          variant="ghost"
          className="w-full flex items-center gap-2 justify-start px-4 text-white/70 hover:bg-white/5 hover:text-white"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </Button>

        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-white/70" />
          <Select value={language} onValueChange={value => setLanguage(value as Language)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EN">English</SelectItem>
              <SelectItem value="NL">Netherlands</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
