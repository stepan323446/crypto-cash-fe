'use client'

import { ReactNode } from "react"
import { ThemeProvider } from "./ThemeProvider"

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
      {children}
    </ThemeProvider>
  )
}

export default RootProvider;