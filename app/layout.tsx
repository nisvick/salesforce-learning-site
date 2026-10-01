import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CloudCraft Academy | Learn Salesforce',
  description: 'Practical Salesforce learning for Admins, Developers and aspiring Salesforce professionals. Learn Apex, LWC, SOQL, Flow, Security and Integration.',
  keywords: ['Salesforce tutorial','Salesforce Admin','Apex tutorial','LWC tutorial','Salesforce interview questions','SOQL'],
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
