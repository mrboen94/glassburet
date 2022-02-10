import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Sidebar />
      <main className="flex-1 md:flex">
        <div className="w-full md:w-10/12">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-10 pt-12">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};
