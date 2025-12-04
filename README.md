# 🕸️ Einfacher Web Scraper (Node.js & Cheerio)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Cheerio](https://img.shields.io/badge/HTML_Parsing-Cheerio-FFD700)
![Typ](https://img.shields.io/badge/Typ-Web_Scraping-red)

## Projektübersicht
Dieses Projekt demonstriert einen grundlegenden **Web Scraper**, der in Node.js erstellt wurde. Es verwendet **Axios** für die HTTP-Anfrage und **Cheerio** zur effizienten Analyse des HTML-Inhalts (*Parsing*) mithilfe von CSS-Selektoren. Das Ziel ist es, den Haupttitel und die erste Zusammenfassung einer Wikipedia-Seite abzurufen.

## 🛠️ Verwendete Technologien
* **Node.js**: Die Runtime-Umgebung.
* **Axios**: Ein versprechenbasierter HTTP-Client für das Senden von GET-Anfragen.
* **Cheerio**: Eine schnelle, flexible und schlanke Implementierung von Kern-jQuery-Funktionen für den Server, ideal für das Parsen von HTML.

## 🔑 Hauptfunktionalitäten
* Senden einer GET-Anfrage an eine beliebige URL.
* Extrahieren von spezifischen HTML-Elementen (wie `<h1>` und `<p>`) basierend auf ihren Selektoren.
* Stabile Fehlerbehandlung für fehlgeschlagene HTTP-Anfragen.

## ⚙️ Installation
Folgen Sie diesen Schritten, um das Projekt lokal einzurichten:

1.  **Repository klonen und Ordner wechseln:**
    ```bash
    git clone [Ihre-Repo-URL]
    cd [Ihr-Projektname]
    ```

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

## ▶️ Ausführung
Führen Sie den Scraper direkt aus:

```bash
node scraper.js
```
Wenn Sie mehr erfahren möchten, besuchen Sie https://outdoorshop-bw.de/
