export default function Rules() {
  return (
    <div className="prose prose-sm lg:prose-lg xl:prose-7xl">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-lg font-medium text-gray-900">
            Del 1: Anmerkninger
          </span>
        </div>
      </div>
      <h3>§ 1.1 - Typer anmerkninger</h3>
      <ul>
        <li>
          🕙 Tidsanmerkning - Ved å komme på skolen etter klokken 10:00 på
          Tirsdag og Torsdag (gjelder ikke gyldig fravær som kan dokumenteres,
          at man sitter på MMIV, HVL, o.l.).
        </li>
        <li>
          💪 Treningsanmerkning - Utebli fra trening Mandag, Onsdag og Fredag
        </li>
        <li>☕ Søleanmerkning - Ved søling av farget væske i trappeoppgang.</li>
      </ul>
      <p>
        <b>Ved unntak les § 3.1</b>
      </p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-lg font-medium text-gray-900">
            Del 2: Trening
          </span>
        </div>
      </div>
      <h3>§ 2.1 - Unntak fra treningsanmerkning</h3>
      <p>
        Der er kun én type unntak fra treningsanmerkning (se Del 3 - sykemelding
        - § 2.2).
      </p>
      <h3>§ 2.2 - Innhenting av anmerkninger</h3>
      <p>
        Med unntak av §2.1 så er eneste måten å unngå en treningsanmerkning å
        trene den inn i etterkant av anmerkningens oppføring.
      </p>
      <h3>§ 2.3 - Juks ved treningsanmerkning</h3>
      <p>Et hvert forsøk på juks vil bli straffet med to nye anmerkninger.</p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-lg font-medium text-gray-900">
            Del 3: Sykemelding
          </span>
        </div>
      </div>
      <h3>§ 3.1 - Sykemelding</h3>
      <p>
        Man kan søke i chatten om sykemelding om man føler seg guffen og dårlig,
        det blir så avgjort med en avstemning.
      </p>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-white text-lg font-medium text-gray-900">
            Del 4: Master skriving (TBD)
          </span>
        </div>
      </div>
      <h3>§ 4.1 - Mengde</h3>
      <p>
        Fra og med 01.01.2022 vil det bli oppført anmerkning dersom man ikke har
        skrevet minimum 4 sider på sin masteroppgave i løpet av uken, hver uke.
        Disse anmerkningene kan ikke trenes inn og står til man opphever denne
        regelen.
      </p>
    </div>
  );
}
