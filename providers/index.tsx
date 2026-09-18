'use client'

import { ReactNode } from "react"
import { ThemeProvider } from "./ThemeProvider"
import { QueryProvider } from "./QueryProvider"

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
      <QueryProvider>
        {children}
      </QueryProvider>
    </ThemeProvider>
  )
}

export default RootProvider;