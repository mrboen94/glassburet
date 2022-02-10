import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { FilterIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { People } from "../pages/unrated";
import { HexColorPicker } from "react-colorful";

const filters = [
  {
    id: "name",
    name: "Filter og farger",
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

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex lg:hidden"
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
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
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
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
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
                                    className="h-4 w-4 rounded border-gray-300 text-blue-200 focus:ring-blue-300"
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

        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-0 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Album
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
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
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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
                          <div className="grid w-max grid-cols-3 xl:grid-cols-4">
                            {Object.entries(people).map(([name, values]) => (
                              <div
                                key={name}
                                className="mx-2 my-2 flex h-max flex-col items-center rounded-lg shadow-lg hover:shadow-md"
                              >
                                <div>
                                  <p className="text-center text-lg">{name}</p>
                                  <input
                                    id={`filter-${section.id}-${name}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    defaultChecked={values.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-blue-300 focus:ring-blue-400"
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
                                  <label
                                    htmlFor={`filter-${section.id}-${section.id}`}
                                    className="text-md ml-3 text-gray-600"
                                  >
                                    Dotted
                                  </label>
                                </div>
                                <HexColorPicker
                                  className="h-8 w-14 py-14 px-6"
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
