import { Montserrat } from "next/font/google";
import "../css/style.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Pre-register | Innovation 3.0",
	description:
		"Cornerstone International Foundation is a non-profit organization with the sole aim of educating young minds all over the world on issues ranging from leadership to current issues facing the world through holistic approach and international career.",
	keywords:
		"innovation, conference, Innovation 3.0, Ajayi Crowther University, ACU, ACUSA, Student, John Ogunjide, Tomiwa Adelae, cornerstone foundation, cornerstone, foundation",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
