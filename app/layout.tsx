import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
	//interfont did not work
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<Theme accentColor="violet" grayColor="gray">
					<NavBar />
					<main className="p-5">{children}</main>
					{/* <ThemePanel /> */}
				</Theme>
			</body>
		</html>
	);
}
