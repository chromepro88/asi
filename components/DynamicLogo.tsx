"use client";

import Image from "next/image";
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
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check initial system theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    
    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
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

  // Use white logo for dark system theme, black logo for light system theme
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