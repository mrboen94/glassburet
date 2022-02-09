import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { FilterIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { People } from "../pages/unrated";
import { HexColorPicker } from "react-colorful";

const filters = [
  {
    id: "name",
    name: "Navn",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterMenu({
  people,
  onChange,
  children,
}: {
  people: People;
  onChange: Function;
  children: React.ReactNode;
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("");

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Navn</h3>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {Object.entries(people).map(([name, values]) => (
                                <div key={name} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${name}-${section.id}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    defaultChecked={values.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-blue-200 focus:ring-blue-300"
                                    onChange={(e) =>
                                      onChange({
                                        ...people,
                                        ...{
                                          [name]: {
                                            checked: e.target.checked,
                                            color: "",
                                          },
                                        },
                                      })
                                    }
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${section.id}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Album
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {Object.entries(people).map(([name, values]) => (
                              <div key={name} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${name}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  defaultChecked={values.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-blue-300 focus:ring-blue-400"
                                  onChange={(e) =>
                                    onChange({
                                      ...people,
                                      ...{
                                        [name]: {
                                          checked: e.target.checked,
                                          color: values.color,
                                        },
                                      },
                                    })
                                  }
                                />
                                <HexColorPicker
                                  className="w-14 h-8 py-14 px-6"
                                  color={values.color ? values.color : ""}
                                  onChange={(e) =>
                                    onChange({
                                      ...people,
                                      ...{
                                        [name]: {
                                          checked: values.checked,
                                          color: e,
                                        },
                                      },
                                    })
                                  }
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${section.id}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
