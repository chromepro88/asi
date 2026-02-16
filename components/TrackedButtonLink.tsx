"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";

type ButtonProps = ComponentProps<typeof Button>;

type TrackedButtonLinkProps = {
  href: string;
  eventName: string;
  children: ReactNode;
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
};

export function TrackedButtonLink({
  href,
  eventName,
  children,
  className,
  size,
  variant,
}: TrackedButtonLinkProps) {
  return (
    <Button asChild className={className} size={size} variant={variant}>
      <Link
        href={href}
        onClick={() => {
          track(eventName, { href, location: eventName });
        }}
      >
        {children}
      </Link>
    </Button>
  );
}
