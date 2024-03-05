"use client";

import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

interface EmptyBannerProps {
  src: string;
  title: string;
  subtitle: string;
  isEmptyBoards?: boolean;
}

export const EmptyBanner = ({
  src,
  title,
  subtitle,
  isEmptyBoards = false,
}: EmptyBannerProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) {
      return;
    }

    mutate({
      title: "Untitled",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={src}
        height={isEmptyBoards ? 110 : 140}
        width={isEmptyBoards ? 110 : 140}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">{title}</h2>
      <p className="text-muted-foreground text-sm mt-2">{subtitle}</p>
      {isEmptyBoards && (
        <div className="mt-6">
          <Button onClick={onClick} disabled={pending} size="lg">
            Create board
          </Button>
        </div>
      )}
    </div>
  );
};
