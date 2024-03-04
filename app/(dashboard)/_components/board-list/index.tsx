"use client";

import { EmptyBanner } from "./empty-banner";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data.length && query.search) {
    return (
      <EmptyBanner
        src="/empty-search.svg"
        title="No results found!"
        subtitle="Try searching for something else"
      />
    );
  }

  if (!data.length && query.favorites) {
    return (
      <EmptyBanner
        src="/empty-favorites.svg"
        title="No favorite boards!"
        subtitle="Try favoriting a board"
      />
    );
  }

  if (!data.length) {
    return (
      <EmptyBanner
        src="/note.svg"
        title="Create your first board"
        subtitle="Start by creating a board for your organization"
        isEmptyBoards
      />
    );
  }

  return null;
};
