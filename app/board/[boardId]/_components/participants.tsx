"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOthers, useSelf } from "@/liveblocks.config";

import { UserAvatar } from "./user-avatar";

const MAX_SHOW_OTHERS = 2;

export const Participants = () => {
  const others = useOthers();
  const self = useSelf();

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {others.slice(0, MAX_SHOW_OTHERS).map((other) => (
          <UserAvatar
            key={other.connectionId}
            src={other.info?.picture}
            name={other.info?.name}
            fallback={other.info?.name?.[0] || "A"}
            borderColor={connectionIdToColor(other.connectionId)}
          />
        ))}
        {self && (
          <UserAvatar
            src={self.info?.picture}
            name={`${self.info?.name} (You)`}
            fallback={self.info?.name?.[0]}
            borderColor={connectionIdToColor(self.connectionId)}
          />
        )}
        {others.length > MAX_SHOW_OTHERS && (
          <UserAvatar
            name={`${others.length - MAX_SHOW_OTHERS} more`}
            fallback={`+${others.length - MAX_SHOW_OTHERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};
