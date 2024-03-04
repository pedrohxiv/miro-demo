import Image from "next/image";

import { Button } from "@/components/ui/button";

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
          <Button size="lg">Create board</Button>
        </div>
      )}
    </div>
  );
};
