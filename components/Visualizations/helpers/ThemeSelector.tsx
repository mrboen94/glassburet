import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Theme } from "../../../pages/unrated";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const themes = [
  { scheme: "nivo" },
  { scheme: "hello" },
  { scheme: "category10" },
  { scheme: "accent" },
  { scheme: "dark2" },
  { scheme: "paired" },
  { scheme: "pastel1" },
  { scheme: "pastel2" },
  { scheme: "set1" },
  { scheme: "set2" },
  { scheme: "set" },
];

export default function ThemeSelector({
  setCurrentTheme,
  themes,
}: {
  setCurrentTheme: Function;
  themes: Theme;
}) {
  return (
    <Menu as="div" className="relative z-50 inline-block w-full py-4 text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 hover:bg-gray-50">
          Color theme
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.values(themes).map((theme, idx) => (
              <Menu.Item key={idx}>
                {({ active }) => (
                  <a
                    onClick={(_) => setCurrentTheme(idx)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {Object.values(theme)}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
