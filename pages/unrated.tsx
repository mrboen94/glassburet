import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";

// TODO: Move albums to another file
const unrated = [
  {
    name: "The Weeknd",
    title: "DAWN FM",
    role: "Dance-pop/Synth-pop",
    imageUrl: "dawn_fm.png",
    url: "theWeeknd-DAWN-FM",
  },
];

export default function Unrated() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {unrated.map((album) => (
        <Link href={`unrated/${album.url}`} key={album.title}>
          <li className="col-span-1 cursor-pointer flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                src={album.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {album.name}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{album.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {album.role}
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
