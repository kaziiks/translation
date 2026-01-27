import React from "react";
// Atsevišķa komponente tabulas rindai
const TranslationRow = ({ english, latvian }) => (
  <tr>
    <td>{english}</td>
    <td>{latvian}</td>
  </tr>
);

// Galvenā Translations komponente
const Translations = () => {
  const gherkinTerms = [
    { id: 1, en: "Feature", lv: "Funkcionālā iezīme" },
    { id: 2, en: "Scenario", lv: "Scenārijs" },
    { id: 3, en: "Given", lv: "Kad" },
    { id: 4, en: "When", lv: "Ja" },
    { id: 5, en: "Then", lv: "Tad" },
    { id: 6, en: "And", lv: "Un" },
    { id: 7, en: "Or", lv: "Vai" },
    { id: 8, en: "But", lv: "Bet" },
    { id: 9, en: "Background", lv: "Konteksts" },
    { id: 10, en: "Scenario Outline", lv: "Scenārijs pēc parauga" },
    { id: 11, en: "Rule", lv: "Noteikums" },
    { id: 12, en: "Examples", lv: "Piemēri" },
    { id: 13, en: "User Story", lv: "Lietotājstāsts" },
    { id: 14, en: "#", lv: "Komentārs" },
  ];

  return (
    <section className="table-container">
      <h2>Gherkin termini</h2>

      <table className="gherkin-table">
        <thead>
          <tr>
            <th>Angļu valodā</th>
            <th>Latviešu valodā</th>
          </tr>
        </thead>
        <tbody>
          {gherkinTerms.map(term => (
            <TranslationRow
              key={term.id}
              english={term.en}
              latvian={term.lv}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Translations;
