import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="mx-auto max-w-sm">
        <div className="flex justify-evenly">
          <div className="border-green-400 p-2 border-b-2">
            <Link href="/">Tidsplan</Link>
          </div>
          <div className="border-green-400 p-2 border-b-2">
            <Link href="/rules">Regler</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
