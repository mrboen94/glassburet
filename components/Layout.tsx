import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex m-auto pt-2">
            <div className="flex-shrink-0 flex items-center">
              <Image
                className="h-14 w-auto"
                src="/gb.svg"
                alt="glassburet"
                layout="intrinsic"
                height={60}
                width={60}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full">
          {children}
        </div>
      </main>
    </div>
  );
};
