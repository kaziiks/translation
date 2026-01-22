import React from 'react';

// Atsevišķa komponente tabulas rindai
const TranslationRow = ({ english, latvian }) => (
  <tr>
    <td style={cellStyle}>{english}</td>
    <td style={cellStyle}>{latvian}</td>
  </tr>
);

// Galvenā Translations komponente
const Translations = () => {
  const gherkinTerms = [
    { id: 1, en: "Feature", lv: "Funkcionalitāte" },
    { id: 2, en: "Scenario", lv: "Scenārijs" },
    { id: 3, en: "Given", lv: "Kad" },
    { id: 4, en: "When", lv: "Ja" },
    { id: 5, en: "Then", lv: "Tad" },
    { id: 6, en: "And", lv: "Un" },
    { id: 7, en: "But", lv: "Bet" },
    { id: 8, en: "Background", lv: "Konteksts" },
    { id: 9, en: "Scenario Outline", lv: "Scenārija paraugs" },
    { id: 10, en: "Examples", lv: "Piemēri" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gherkin termini</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={headerStyle}>Angļu valodā</th>
            <th style={headerStyle}>Latviešu valodā</th>
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
    </div>
  );
};

// Vienkārši stili uzskatāmībai
const headerStyle = { border: '1px solid #ddd', padding: '12px', textAlign: 'left' };
const cellStyle = { border: '1px solid #ddd', padding: '8px' };

export default Translations;