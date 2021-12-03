import { Layout } from "../components/Layout";

export default function Rules() {
  return (
    <main>
      <div className="prose lg:prose-xl">
        <h1>Del 1: Anmerkninger</h1>
        <h3>§ 1.1 - Treningsanmerkninger</h3>
        <p>
          Når en treningsdag ikke blir gjennomført så vil man få en anmerkning
          ("treningsanmerkning").
        </p>
        <h3>§ 1.2 - Unntak fra treningsanmerkning</h3>
        <p>
          Der er kun en type unntak fra treningsanmerkning (se Kapittel 2 -
          sykemelding - § 2.2).
        </p>
        <h3>§ 1.3 - Innhenting av anmerkninger</h3>
        <p>
          Med unntak av §2.2 så er eneste måten å unngå en treningsanmerkning å
          trene den inn i etterkant av anmerkningens oppføring.
        </p>
        <h3>§ 1.4 - Juks ved treningsanmerkning</h3>
        <p>Et hvert forsøk på juks vil bli straffet med to nye anmerkninger.</p>
        <h1> Del 2: Sykemelding</h1>
        <h3>§ 2.1 - Sykemelding</h3>
        <p>
          Man kan søke i chatten om sykemelding om man føler seg guffen og
          dårlig, det blir så avgjort med en avstemning.
        </p>
        <h1> Del 3: Master skriving</h1>
        <h3>§ 3.1 - Mengde</h3>
        <p>
          Fra og med 01.01.2022 vil det bli oppført anmerkning dersom man ikke
          har skrevet minimum 4 sider på sin masteroppgave i løpet av uken.
          Disse anmerkningene kan ikke trenes inn og står til man opphever denne
          regelen.
        </p>
      </div>
    </main>
  );
}
