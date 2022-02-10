function IngenAnmerkning() {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
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
    <span className="inline-flex items-center break-all rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
      {treningsAnmerkning}
    </span>
  );
}

export function HeisAnmerkning({ number }: { number: number }) {
  if (number === 0) return <IngenAnmerkning />;
  var heisAnmerkning = "🏃";
  for (let i = 0; i < number; i++) {
    heisAnmerkning = heisAnmerkning + "🏃";
  }
  return (
    <span className="inline-flex items-center break-all rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
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
    <span className="inline-flex items-center break-all rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800">
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
    <span className="inline-flex items-center break-all rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
      <p className="break-all">{tidsAnmerkning}</p>
    </span>
  );
}
