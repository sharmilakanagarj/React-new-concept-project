import { useLanguage } from '../Translation/useLanguage';
import { settingTransaction } from '../Translation/SettingTransaction';
import { Card, CardContent, CardHeader, CardTitle } from '../components/lightswind/card';
import { Bell, Eye, Mail, Palette, User,Lock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/lightswind/avatar';
import { Button } from '../components/lightswind/button';
import { Label } from '../components/lightswind/label';
import { Input } from '../components/lightswind/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/lightswind/select';
import { Switch } from '../components/lightswind/switch';
import { Separator } from '../components/lightswind/separator';

function Settings() {
  const { language } = useLanguage();
  const t = settingTransaction[language];
    return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 dark:text-white">{t.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
      </div>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <User className="w-5 h-5" />
            {t.profile}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Photo</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">{t.fullName}</Label>
              <Input id="fullName" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t.phone}</Label>
              <Input id="phone" type="tel" defaultValue="+31 6 1234 5678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">{t.language}</Label>
              <Select value={language}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EN">English</SelectItem>
                  <SelectItem value="NL">Nederlands</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <Bell className="w-5 h-5" />
            {t.notifications}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <Label htmlFor="emailNotif">{t.emailNotifications}</Label>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{t.emailDesc}</p>
            </div>
            <Switch id="emailNotif" defaultChecked />
          </div>
          <Separator className="dark:bg-gray-700" />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <Label htmlFor="pushNotif">{t.pushNotifications}</Label>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{t.pushDesc}</p>
            </div>
            <Switch id="pushNotif" defaultChecked />
          </div>
          <Separator className="dark:bg-gray-700" />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="transactionAlerts">{t.transactionAlerts}</Label>
              <p className="text-gray-500 dark:text-gray-400">{t.transactionDesc}</p>
            </div>
            <Switch id="transactionAlerts" defaultChecked />
          </div>
          <Separator className="dark:bg-gray-700" />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="budgetAlerts">{t.budgetAlerts}</Label>
              <p className="text-gray-500 dark:text-gray-400">{t.budgetDesc}</p>
            </div>
            <Switch id="budgetAlerts" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-white">
              <Lock className="w-5 h-5" />
              {t.security}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="twoFactor">{t.twoFactor}</Label>
                <p className="text-gray-500 dark:text-gray-400">{t.twoFactorDesc}</p>
              </div>
              <Switch id="twoFactor" />
            </div>
            <Separator className="dark:bg-gray-700" />
            <Button variant="outline" className="w-full">
              {t.changePassword}
            </Button>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-white">
              <Eye className="w-5 h-5" />
              {t.accessibility}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="highContrast">{t.highContrast}</Label>
                <p className="text-gray-500 dark:text-gray-400">{t.highContrastDesc}</p>
              </div>
              <Switch id="highContrast" />
            </div>
            <Separator className="dark:bg-gray-700" />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="largeText">{t.largeText}</Label>
                <p className="text-gray-500 dark:text-gray-400">{t.largeTextDesc}</p>
              </div>
              <Switch id="largeText" />
            </div>
            <Separator className="dark:bg-gray-700" />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="screenReader">{t.screenReader}</Label>
                <p className="text-gray-500 dark:text-gray-400">{t.screenReaderDesc}</p>
              </div>
              <Switch id="screenReader" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <Palette className="w-5 h-5" />
            {t.appearance}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="theme">{t.theme}</Label>
              <Select defaultValue="light">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="auto">Auto</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">{t.currency}</Label>
              <Select defaultValue="eur">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateFormat">{t.dateFormat}</Label>
              <Select defaultValue="dd-mm-yyyy">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-end gap-4">
        <Button variant="outline">{t.cancel}</Button>
        <Button>{t.saveChanges}</Button>
      </div>
    </div>
  );
}

export default Settings