"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";

type ButtonProps = ComponentProps<typeof Button>;
type LinkProps = ComponentProps<typeof Link>;

type TrackedButtonLinkProps = {
  eventName: string;
  children: ReactNode;
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
} & Pick<LinkProps, "href" | "target" | "rel" | "prefetch">;

export function TrackedButtonLink({
  href,
  eventName,
  children,
  className,
  size,
  variant,
  target,
  rel,
  prefetch,
}: TrackedButtonLinkProps) {
  return (
    <Button asChild className={className} size={size} variant={variant}>
      <Link
        href={href}
        target={target}
        rel={rel}
        prefetch={prefetch}
        onClick={() => {
          track(eventName, { href, location: eventName });
        }}
      >
        {children}
      </Link>
    </Button>
  );
}
