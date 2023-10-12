"use client";

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

type ReactQueryProviderProps = {
	children: ReactNode;
};
function ReactQueryProvider({ children }: ReactQueryProviderProps) {
	return (
		// Provide the client to your App
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}

export default ReactQueryProvider;
