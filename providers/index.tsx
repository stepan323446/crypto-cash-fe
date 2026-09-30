'use client'

import { ReactNode } from "react"
import { ThemeProvider } from "./ThemeProvider"
import { QueryProvider } from "./QueryProvider"
import { NuqsAdapter } from 'nuqs/adapters/next/app'

interface Props {
  children: ReactNode
}

const RootProvider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NuqsAdapter>
        <QueryProvider>
          {children}
        </QueryProvider>
      </NuqsAdapter>
    </ThemeProvider>
  )
}

export default RootProvider;