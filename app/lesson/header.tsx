import { X } from "lucide-react";
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";

type Props = {
  hearts: number;
  percentage: number;
};

export const Header = ({
  hearts,
  percentage,
}: Props) => {
  const { open } = useExitModal();

  return (
    <header className="gap-x-7 px-10 pt-[20px] lg:pt-[50px] max-w-[1140px] items-center justify-between mx-auto flex w-full">
      <X
        onClick={open}
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
      />

      <Progress value={percentage} />

      <div className="text-rose-500 flex items-center font-bold ">
        <Image
          src="/heart.svg"
          height={29}
          width={29}
          alt="Heart"
          className="mr-2"
        />
        {(
          hearts
        )}
      </div>
    </header>
  );
};
