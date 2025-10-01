"use client"

import type React from "react"
import { createContext, useContext, useMemo, useState } from "react"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react" // ✅ Kembali ke import dari sini
import { createShadcnTheme } from "./createShadcnTheme"
import PropTypes from "prop-types"

const ColorModeContext = createContext({
  mode: "light" as "light" | "dark",
  toggleColorMode: () => { },
})

export const useColorMode = () => useContext(ColorModeContext)

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light")

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((m) => (m === "light" ? "dark" : "light")),
    }),
    [mode],
  )

  const theme = useMemo(() => createShadcnTheme(mode), [mode])

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ColorModeContext.Provider value={value}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </ColorModeContext.Provider>
    </>
  )
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}