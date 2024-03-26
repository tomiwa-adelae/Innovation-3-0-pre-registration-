import { Montserrat } from "next/font/google";
import "../css/style.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Pre-register | Innovation 3.0",
	description:
		"An NGO whose aim is to educate young minds globally on issues ranging from leadership to current issues facing the world through holistic approach",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
