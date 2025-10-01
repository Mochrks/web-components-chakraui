import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

/**
 * Creates a Chakra UI theme configured to resemble shadcn/ui
 */
export function createShadcnTheme(mode: "light" | "dark" = "light") {
  const config: ThemeConfig = {
    initialColorMode: mode,
    useSystemColorMode: false,
  }

  const colors = {
    // Primary colors - sesuai dengan MUI theme
    primary: {
      50: mode === "light" ? "#f8fafc" : "#0f172a",
      100: mode === "light" ? "#f1f5f9" : "#1e293b",
      200: mode === "light" ? "#e2e8f0" : "#334155",
      300: mode === "light" ? "#cbd5e1" : "#475569",
      400: mode === "light" ? "#94a3b8" : "#64748b",
      500: mode === "light" ? "#64748b" : "#94a3b8",
      600: mode === "light" ? "#475569" : "#cbd5e1",
      700: mode === "light" ? "#334155" : "#e2e8f0",
      800: mode === "light" ? "#1e293b" : "#f1f5f9",
      900: mode === "light" ? "#0f172a" : "#f8fafc",
    },
    // Semantic colors - diperbaiki untuk dark mode
    brand: {
      primary: mode === "light" ? "#0F172A" : "#E5E7EB",
      secondary: mode === "light" ? "#F1F5F9" : "#111827",
      background: mode === "light" ? "#FFFFFF" : "#0B1220",
      foreground: mode === "light" ? "#0F172A" : "#E5E7EB",
      muted: mode === "light" ? "#F1F5F9" : "#1E293B",
      mutedForeground: mode === "light" ? "#64748B" : "#94A3B8",
      border: mode === "light" ? "#E2E8F0" : "#1F2937",
      input: mode === "light" ? "#E2E8F0" : "#1F2937",
      ring: mode === "light" ? "#0F172A" : "#E5E7EB",
      accent: mode === "light" ? "#F1F5F9" : "#111827",
      accentForeground: mode === "light" ? "#0F172A" : "#E5E7EB",
    },
    // Status colors
    status: {
      error: mode === "light" ? "#EF4444" : "#F87171",
      warning: mode === "light" ? "#F59E0B" : "#FBBF24",
      success: mode === "light" ? "#16A34A" : "#34D399",
      info: mode === "light" ? "#3B82F6" : "#60A5FA",
    },
    // Alert colors - tambahkan di sini
    alert: {
      info: {
        bg: mode === "light" ? "#DBEAFE" : "#1E3A8A",
        border: mode === "light" ? "#93C5FD" : "#1E40AF",
        icon: mode === "light" ? "#3B82F6" : "#60A5FA"
      },
      success: {
        bg: mode === "light" ? "#DCFCE7" : "#14532D",
        border: mode === "light" ? "#86EFAC" : "#15803D",
        icon: mode === "light" ? "#16A34A" : "#34D399"
      },
      warning: {
        bg: mode === "light" ? "#FEF3C7" : "#78350F",
        border: mode === "light" ? "#FCD34D" : "#D97706",
        icon: mode === "light" ? "#F59E0B" : "#FBBF24"
      },
      error: {
        bg: mode === "light" ? "#FEE2E2" : "#7F1D1D",
        border: mode === "light" ? "#FCA5A5" : "#DC2626",
        icon: mode === "light" ? "#EF4444" : "#F87171"
      }
    }
  }

  return extendTheme({
    config,
    colors: {
      ...colors,
      // Backward compatibility dengan nama warna sebelumnya
      primary: colors.brand.primary,
      secondary: colors.brand.secondary,
      background: colors.brand.background,
      foreground: colors.brand.foreground,
      muted: colors.brand.muted,
      mutedForeground: colors.brand.mutedForeground,
      border: colors.brand.border,
      input: colors.brand.input,
      ring: colors.brand.ring,
      accent: colors.brand.accent,
      accentForeground: colors.brand.accentForeground,
    },
    semanticTokens: {
      colors: {
        // Body styles
        "chakra-body-bg": { 
          _light: colors.brand.background, 
          _dark: colors.brand.background 
        },
        "chakra-body-text": { 
          _light: colors.brand.foreground, 
          _dark: colors.brand.foreground 
        },
        "chakra-border-color": { 
          _light: colors.brand.border, 
          _dark: colors.brand.border 
        },
        "chakra-placeholder-color": { 
          _light: colors.brand.mutedForeground, 
          _dark: colors.brand.mutedForeground 
        },
        
        // Semantic colors untuk komponen
        "bg-primary": { _light: colors.brand.background, _dark: colors.brand.background },
        "bg-secondary": { _light: colors.brand.muted, _dark: colors.brand.muted },
        "text-primary": { _light: colors.brand.foreground, _dark: colors.brand.foreground },
        "text-secondary": { 
          _light: colors.status.info, 
          _dark: colors.brand.mutedForeground 
        },
        "border-primary": { _light: colors.brand.border, _dark: colors.brand.border },
      },
    },
    fonts: {
      heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
      body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
      mono: `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`,
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    radii: {
      none: "0",
      sm: "0.375rem",
      base: "0.5rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.5rem",
      full: "9999px",
    },
    shadows: {
      sm: mode === "light" 
        ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" 
        : "0 1px 0 rgba(255, 255, 255, 0.04)",
      base: mode === "light"
        ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        : "0 1px 0 rgba(255, 255, 255, 0.04)",
      md: mode === "light"
        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        : "0 4px 6px -1px rgba(0, 0, 0, 0.4)",
      lg: mode === "light"
        ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.4)",
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "600",
          borderRadius: "md",
          transition: "all 0.2s",
          _focusVisible: {
            outline: "2px solid",
            outlineColor: "ring",
            outlineOffset: "2px",
          },
        },
        variants: {
          solid: {
            bg: "primary",
            color: mode === "light" ? "white" : "background",
            _hover: {
              bg: mode === "light" ? "#1E293B" : "#D1D5DB",
              _disabled: {
                bg: "primary",
              },
            },
            _active: {
              bg: mode === "light" ? "#334155" : "#9CA3AF",
            },
          },
          outline: {
            borderWidth: "1px",
            borderColor: "border",
            color: "foreground",
            bg: "transparent",
            _hover: {
              bg: "accent",
              borderColor: mode === "light" ? "#CBD5E1" : "#374151",
              _disabled: {
                bg: "transparent",
              },
            },
            _active: {
              bg: mode === "light" ? "#E2E8F0" : "#374151",
            },
          },
          ghost: {
            color: "foreground",
            bg: "transparent",
            _hover: {
              bg: "accent",
              _disabled: {
                bg: "transparent",
              },
            },
            _active: {
              bg: mode === "light" ? "#E2E8F0" : "#374151",
            },
          },
          link: {
            color: "primary",
            textDecoration: "underline",
            _hover: {
              opacity: 0.8,
            },
          },
          soft: {
            bg: "secondary",
            color: "foreground",
            border: "1px solid",
            borderColor: "border",
            _hover: {
              bg: mode === "light" ? "#E2E8F0" : "#1F2937",
              _disabled: {
                bg: "secondary",
              },
            },
            _active: {
              bg: mode === "light" ? "#CBD5E1" : "#374151",
            },
          },
        },
        defaultProps: {
          variant: "solid",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              bg: "background",
              borderColor: "border",
              color: "foreground",
              _hover: {
                borderColor: mode === "light" ? "#CBD5E1" : "#374151",
              },
              _focus: {
                borderColor: "primary",
                boxShadow: `0 0 0 1px ${mode === "light" ? "#0F172A" : "#E5E7EB"}`,
              },
              _placeholder: {
                color: "mutedForeground",
              },
            },
          },
        },
        defaultProps: {
          variant: "outline",
        },
      },
      Select: {
        variants: {
          outline: {
            field: {
              bg: "background",
              borderColor: "border",
              color: "foreground",
              _hover: {
                borderColor: mode === "light" ? "#CBD5E1" : "#374151",
              },
              _focus: {
                borderColor: "primary",
                boxShadow: `0 0 0 1px ${mode === "light" ? "#0F172A" : "#E5E7EB"}`,
              },
            },
            icon: {
              color: "mutedForeground",
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            bg: "background",
            borderColor: "border",
            color: "foreground",
            _hover: {
              borderColor: mode === "light" ? "#CBD5E1" : "#374151",
            },
            _focus: {
              borderColor: "primary",
              boxShadow: `0 0 0 1px ${mode === "light" ? "#0F172A" : "#E5E7EB"}`,
            },
            _placeholder: {
              color: "mutedForeground",
            },
          },
        },
      },
      Card: {
        baseStyle: {
          container: {
            bg: "background",
            borderRadius: "lg",
            border: "1px solid",
            borderColor: "border",
            boxShadow: "sm",
          },
        },
      },
      Alert: {
        baseStyle: {
          container: {
            borderRadius: "md",
            border: "1px solid",
            alignItems: "flex-start",
          },
          icon: {
            boxSize: "20px",
            mt: "2px",
          },
          title: {
            fontSize: "sm",
            fontWeight: "semibold",
            lineHeight: "1.25",
            mb: 1,
          },
          description: {
            fontSize: "sm",
            lineHeight: "1.25",
          },
        },
        variants: {
          subtle: (props: { colorScheme: string }) => {
            const { colorScheme } = props;
            const statusMap: Record<string, string> = {
              info: "info",
              success: "success", 
              warning: "warning",
              error: "error"
            };
            
            const status = statusMap[colorScheme] || colorScheme;
            
            return {
              container: {
                bg: `alert.${status}.bg`,
                borderColor: `alert.${status}.border`,
              },
              icon: {
                color: `alert.${status}.icon`,
              },
            };
          },
        },
        defaultProps: {
          variant: "subtle",
        },
      },
      Badge: {
        baseStyle: {
          borderRadius: "md",
          px: 2,
          py: 0.5,
          fontSize: "xs",
          fontWeight: "600",
          border: "1px solid",
          borderColor: "border",
        },
      },
      Tabs: {
        variants: {
          line: {
            tab: {
              borderBottom: "2px solid",
              borderColor: "transparent",
              color: "mutedForeground",
              _hover: {
                color: "foreground",
                borderColor: mode === "light" ? "#E2E8F0" : "#374151",
              },
              _selected: {
                color: "foreground",
                borderColor: "primary",
              },
            },
          },
        },
      },
      Menu: {
        baseStyle: {
          list: {
            bg: "background",
            borderColor: "border",
            borderWidth: "1px",
            borderRadius: "md",
            boxShadow: "lg",
            py: 1,
          },
          item: {
            bg: "transparent",
            color: "foreground",
            _hover: {
              bg: "accent",
            },
            _focus: {
              bg: "accent",
            },
          },
        },
      },
      Popover: {
        baseStyle: {
          content: {
            bg: "background",
            borderColor: "border",
            borderWidth: "1px",
            borderRadius: "md",
            boxShadow: "lg",
          },
        },
      },
      Drawer: {
        baseStyle: {
          dialog: {
            bg: "background",
          },
          header: {
            borderBottomWidth: "1px",
            borderColor: "border",
          },
          footer: {
            borderTopWidth: "1px",
            borderColor: "border",
          },
        },
      },
      Modal: {
        baseStyle: {
          dialog: {
            bg: "background",
            borderRadius: "lg",
            border: "1px solid",
            borderColor: "border",
          },
          header: {
            borderBottomWidth: "1px",
            borderColor: "border",
          },
          footer: {
            borderTopWidth: "1px",
            borderColor: "border",
          },
        },
      },
      Accordion: {
        baseStyle: {
          container: {
            borderColor: "border",
          },
          button: {
            _hover: {
              bg: "accent",
            },
          },
        },
      },
      Divider: {
        baseStyle: {
          borderColor: "border",
        },
      },
    },
  })
}