import "./globals.css";

import Bottombar from "@/components/shared/Bottombar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextGen Assignment",
	description: "NextGen Assignment",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				
				<Topbar />
				<div className=' bg-white text-gray-800  min-h-screen flex flex-col justify-between'>
					{children}
				</div>
				<Toaster position='bottom-right' reverseOrder={false} />
				<Bottombar companyName='NextGen' />
			</body>
		</html>
	);
}
