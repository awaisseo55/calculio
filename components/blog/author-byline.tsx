import { CalendarDays, Clock, ShieldCheck, User } from "lucide-react";
import { formatDate } from "@/lib/format";
import { AuthorDialog } from "@/components/blog/author-dialog";
import type { AuthorMeta } from "@/lib/authors";

interface AuthorBylineProps {
  author: AuthorMeta;
  reviewer: AuthorMeta;
  publishDate: string;
  updatedDate: string;
  readingTime: number;
}

export function AuthorByline({
  author,
  reviewer,
  publishDate,
  updatedDate,
  readingTime,
}: AuthorBylineProps) {
  const published = formatDate(new Date(publishDate));
  const updated = formatDate(new Date(updatedDate));

  return (
    <div className="flex flex-col gap-3 border-b border-border/60 pb-6">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <User className="size-4" aria-hidden="true" />
          Written by{" "}
          <AuthorDialog author={author} label="Written by">
            {author.name}
          </AuthorDialog>
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4" aria-hidden="true" />
          Reviewed by{" "}
          <AuthorDialog author={reviewer} label="Reviewed by">
            {reviewer.name}
          </AuthorDialog>
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarDays className="size-4" aria-hidden="true" />
          Published {published}
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
          Updated {updated}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4" aria-hidden="true" />
          {readingTime} min read
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {author.role}. Reviewed for accuracy by {reviewer.name}, {reviewer.role}.
      </p>
    </div>
  );
}
