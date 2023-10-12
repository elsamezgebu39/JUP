"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProviderProps {
	children: ReactNode;
	session: any | null;
}

function SessionProviders({ children, session }: SessionProviderProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default SessionProviders;
