"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface DynamicLogoProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export default function DynamicLogo({ 
  width = 48, 
  height = 48, 
  className = "", 
  alt = "AI Super Logo" 
}: DynamicLogoProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return black logo as default during SSR to avoid layout shift
    return (
      <Image 
        src="/logo_black.png" 
        alt={alt} 
        width={width} 
        height={height} 
        className={className}
        priority
      />
    );
  }

  // Determine the current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  // Use white logo for dark theme, black logo for light theme
  const logoSrc = isDark ? "/logo_white.png" : "/logo_black.png";

  return (
    <Image 
      src={logoSrc} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
      priority
    />
  );
}