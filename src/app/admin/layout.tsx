import { Navigation } from "./_components/navigation";
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<ClerkProvider>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
					<div className="bg-muted h-screen flex gap-6">
						<Navigation />
						{children}
					</div>
				</SignedIn>
			</ClerkProvider>
		</div>
	);
}
