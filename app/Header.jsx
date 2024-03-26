"use client";
import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link href="/">
						<Image
							src={"/logo.jpg"}
							alt="INNOVATION 3.0 DARE | DREAM | INNOVATE"
							height={1000}
							width={1000}
						/>
					</Link>
				</div>
				<Countdown />
			</div>
		</header>
	);
};

export default Header;
