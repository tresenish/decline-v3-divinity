import React, { createContext, useContext, useMemo, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ColorTheme, ContentTheme } from '../themes/types';
import { themeConfig } from '../themes';

// Theme context interface
interface ThemeContextValue {
  colors: ColorTheme;
  content: ContentTheme;
  isDSTheme: boolean;
}

// Create the context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Theme Provider props
interface ThemeProviderProps {
  children: ReactNode;
}

// Theme Provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Set document title dynamically
  useEffect(() => {
    document.title = `${themeConfig.content.siteTitle} | ${themeConfig.content.brandName}`;
  }, []);

  // Context value
  const contextValue: ThemeContextValue = useMemo(
    () => ({
      colors: themeConfig.colors,
      content: themeConfig.content,
      isDSTheme: true,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={themeConfig.colors}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Main hook to access the full theme context
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Convenience hook for colors only
export const useColors = (): ColorTheme => {
  const { colors } = useTheme();
  return colors;
};

// Convenience hook for content only
export const useContent = (): ContentTheme => {
  const { content } = useTheme();
  return content;
};

// Convenience hook for company info (from theme content)
export const useCompanyInfo = () => {
  const { content } = useTheme();
  return {
    brandName: content.brandName,
    companyName: content.companyName,
    emailSupport: content.emailSupport,
    phoneNumber: content.phoneNumber,
    phoneDisplay: content.phoneDisplay,
    companyAddress: content.companyAddress,
  };
};

// Convenience hook for API config (from theme content)
export const useApiConfig = () => {
  const { content } = useTheme();
  return {
    apiUrl: content.apiUrl,
    apiKey: content.apiKey,
  };
};

// Convenience hook for theme category check
export const useIsDSTheme = (): boolean => {
  const { isDSTheme } = useTheme();
  return isDSTheme;
};

// Export context for advanced use cases
export { ThemeContext };
