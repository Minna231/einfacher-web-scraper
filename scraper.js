// Datei: scraper.js

const axios = require('axios');
const cheerio = require('cheerio');

// Die Ziel-URL (Wir nehmen die deutsche Wikipedia-Seite über Node.js)
const zielURL = 'https://de.wikipedia.org/wiki/Node.js';

// Funktion zum Abrufen und Parsen der Daten
async function scrapeDaten() {
    console.log(`Starte den Web Scraper für: ${zielURL}`);

    try {
        // 1. HTTP GET-Anfrage senden (mit Axios)
        const antwort = await axios.get(zielURL);
        
        // 2. HTML-Inhalt in Cheerio laden
        const $ = cheerio.load(antwort.data);
        
        // --- Daten extrahieren (mit CSS-Selektoren) ---
        
        // Den Haupttitel (<h1>) der Seite holen
        const hauptTitel = $('#firstHeading').text();
        
        // Den ersten Absatz (P-Tag) nach dem Haupttitel holen
        // (Dies ist oft die kurze Zusammenfassung in Wikipedia)
        const zusammenfassung = $('p').first().text();
        
        // --- Ergebnisse ausgeben ---
        console.log('\n--- Abgerufene Informationen ---');
        console.log(`Titel der Seite: ${hauptTitel}`);
        console.log(`Erste Zusammenfassung: ${zusammenfassung.substring(0, 200)}...`); // Kürzen, falls zu lang
        console.log('✅ Scraping erfolgreich abgeschlossen.');

    } catch (fehler) {
        console.error('❌ Fehler beim Scrapen der Webseite:', fehler.message);
    }
}

// Scraper starten
scrapeDaten();
