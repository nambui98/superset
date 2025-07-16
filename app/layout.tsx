import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Superset - Native Liquidity Network for Stablecoins',
    description:
        'A personal custody platform, providing control, security and user experience',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
