
export type Language = 'EN' | 'NL' ; 

export interface SettingTransaction {

        title: string;
      subtitle: string;
      profile: string;
      fullName:string;
      email: string;
      phone: string;
      language: string;
      notifications: string;
      emailNotifications: string;
      emailDesc: string;
      pushNotifications: string;
      pushDesc: string;
      transactionAlerts:string;
      transactionDesc: string;
      budgetAlerts: string;
      budgetDesc: string;
      security: string;
      twoFactor: string;
      twoFactorDesc: string;
      changePassword: string;
      accessibility: string;
      highContrast:string;
      highContrastDesc: string;
      largeText: string;
      largeTextDesc: string;
      screenReader: string;
      screenReaderDesc: string;
      appearance:string;
      theme: string;
      currency: string;
      dateFormat: string;
      saveChanges: string;
      cancel: string;
    }

export const settingTransaction: Record<Language, SettingTransaction> = {
        EN: {
      title: 'Settings',
      subtitle: 'Manage your account and preferences',
      profile: 'Profile Settings',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      language: 'Language',
      notifications: 'Notification Settings',
      emailNotifications: 'Email Notifications',
      emailDesc: 'Receive email updates about your account',
      pushNotifications: 'Push Notifications',
      pushDesc: 'Receive push notifications on your device',
      transactionAlerts: 'Transaction Alerts',
      transactionDesc: 'Get notified for transactions above €100',
      budgetAlerts: 'Budget Alerts',
      budgetDesc: 'Receive alerts when nearing budget limits',
      security: 'Security',
      twoFactor: 'Two-Factor Authentication',
      twoFactorDesc: 'Add an extra layer of security',
      changePassword: 'Change Password',
      accessibility: 'Accessibility',
      highContrast: 'High Contrast Mode',
      highContrastDesc: 'Increase contrast for better visibility',
      largeText: 'Large Text',
      largeTextDesc: 'Increase text size across the app',
      screenReader: 'Screen Reader Support',
      screenReaderDesc: 'Optimize for screen readers',
      appearance: 'Appearance',
      theme: 'Theme',
      currency: 'Currency',
      dateFormat: 'Date Format',
      saveChanges: 'Save Changes',
      cancel: 'Cancel',
    },
     NL: {
      title: 'Instellingen',
      subtitle: 'Beheer uw account en voorkeuren',
      profile: 'Profielinstellingen',
      fullName: 'Volledige Naam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      language: 'Taal',
      notifications: 'Meldingsinstellingen',
      emailNotifications: 'E-mailmeldingen',
      emailDesc: 'Ontvang e-mailupdates over uw account',
      pushNotifications: 'Pushmeldingen',
      pushDesc: 'Ontvang pushmeldingen op uw apparaat',
      transactionAlerts: 'Transactiewaarschuwingen',
      transactionDesc: 'Ontvang meldingen voor transacties boven €100',
      budgetAlerts: 'Budgetwaarschuwingen',
      budgetDesc: 'Ontvang waarschuwingen bij naderen van budgetlimieten',
      security: 'Beveiliging',
      twoFactor: 'Twee-Factor Authenticatie',
      twoFactorDesc: 'Voeg een extra beveiligingslaag toe',
      changePassword: 'Wachtwoord Wijzigen',
      accessibility: 'Toegankelijkheid',
      highContrast: 'Hoog Contrast Modus',
      highContrastDesc: 'Verhoog contrast voor betere zichtbaarheid',
      largeText: 'Grote Tekst',
      largeTextDesc: 'Vergroot tekstgrootte in de app',
      screenReader: 'Schermlezer Ondersteuning',
      screenReaderDesc: 'Optimaliseer voor schermlezers',
      appearance: 'Uiterlijk',
      theme: 'Thema',
      currency: 'Valuta',
      dateFormat: 'Datumformaat',
      saveChanges: 'Wijzigingen Opslaan',
      cancel: 'Annuleren',
    }
}