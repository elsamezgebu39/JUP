"use client";

/**
 * to provide Session provider
 * @owner ABENEZER KEBEDE <abenikeb79@gmail.com>
 */

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
  session: any | null;
}

// HOC(wrap the children component)
function SessionProviders({ children, session }: SessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default SessionProviders;
