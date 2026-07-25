"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { AuthorMeta } from "@/lib/authors";

interface AuthorDialogProps {
  author: AuthorMeta;
  label: string;
  children: React.ReactNode;
}

export function AuthorDialog({ author, label, children }: AuthorDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer font-medium text-foreground underline decoration-dotted underline-offset-4 transition hover:text-primary">
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-base font-semibold text-primary-foreground"
              aria-hidden="true"
            >
              {author.initials}
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {label}
              </p>
              <DialogTitle>{author.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{author.role}</p>
            </div>
          </div>
        </DialogHeader>
        <DialogDescription className="text-sm leading-relaxed text-foreground/80">
          {author.bio}
        </DialogDescription>
        <div className="flex flex-wrap gap-2">
          {author.expertise.map((item) => (
            <span
              key={item}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
