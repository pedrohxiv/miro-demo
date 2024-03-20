import { createClient } from "@liveblocks/client";
import { createLiveblocksContext, createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
});

type Presence = {};

type Storage = {};

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

type RoomEvent = {};

export type ThreadMetadata = {};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersListener,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
    useThreadSubscription,
    useMarkThreadAsRead,
    useRoomNotificationSettings,
    useUpdateRoomNotificationSettings,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);

export const {
  suspense: {
    LiveblocksProvider,
    useMarkInboxNotificationAsRead,
    useMarkAllInboxNotificationsAsRead,
    useInboxNotifications,
    useUnreadInboxNotificationsCount,
    useUser,
    useRoomInfo,
  },
} = createLiveblocksContext<UserMeta, ThreadMetadata>(client);
