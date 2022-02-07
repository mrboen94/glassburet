function IngenAnmerkning() {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      Ingen anmerkninger!
    </span>
  );
}

export function TreningsAnmerkning({ number }: { number: number }) {
  if (number === 0) return <IngenAnmerkning />;
  var treningsAnmerkning = "";
  for (let i = 0; i < number; i++) {
    treningsAnmerkning = treningsAnmerkning + "💪";
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
      {treningsAnmerkning}
    </span>
  );
}

export function HeisAnmerkning({ number }: { number: number }) {
  if (number === 0) return <IngenAnmerkning />;
  var heisAnmerkning = "";
  for (let i = 0; i < number; i++) {
    heisAnmerkning = heisAnmerkning + "🛗";
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      {heisAnmerkning}
    </span>
  );
}

export function SoeleAnmerkning({ number }: { number: number }) {
  if (number === 0) return <IngenAnmerkning />;
  var soeleAnmerkning = "";
  for (let i = 0; i < number; i++) {
    soeleAnmerkning = soeleAnmerkning + "☕";
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
      {soeleAnmerkning}
    </span>
  );
}

export function TidsAnmerkning({ number }: { number: number }) {
  if (number === 0) return <IngenAnmerkning />;
  var tidsAnmerkning = "";
  for (let i = 0; i < number; i++) {
    tidsAnmerkning = tidsAnmerkning + "🕒";
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
      {tidsAnmerkning}
    </span>
  );
}
