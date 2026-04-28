# Features zu unserem Vue.js Projekt

## Feature 1 - 14.04.2026 - Setup und Initialisierung

- Ordner für Komponenten erzeugen
- Projektstruktur kurz erklären
- Bootstrap (css und js) installieren

## Feature 2 - 20.04.2026 - Layout

- oben soll die Navigation sein
- im Hauptbereich soll ein 2spaltiges Layout (Inhalt, Sidebar) vorhanden sein
- unten soll ein footer sein

## Feature 3 - 20.04.2026 - Verbesserungen

- Über Uns und Impressum in den Footer verschieben
- Kontakt View hinzufügen (Link im Footer)

- Teile des Codes erklären

## Feature 4 - 21.04.2026 - Registrierung

- Registrierungsformular (ohne Bootstrap) erzeugen
    -> dient der Erklärung zu Formularen
- stylen mit bootstrap
- Erklärung zu form, ...
- TS-Klasse für User
- Validierungsklasse
- User und Validierungsklasse in der RegistrationView verwenden

## Feature 5 - 21.04.2026 - Backend - Struktur erzeugen lassen

- WebAPI-Projekt
- ORM-Projekt
- Models-Projekt


## Feature 6 - 28.04.2026 - Backend - Strutkur erzeugen lassen

- erzeuge eine Visual Studio Projektmappe (.Net/ C#): Name: backend
 im Ordner backend parallel zum Vue-Projekt (vue - basics)
- erzeuge  ein Asp.Net Core WebApi - Projekt in deiser Projektmappe Name: Api
erzeuge eine Klassenbibliothek (Name: ORM) in dieser Projektmappe
- erzeuge eine Klassenbibliothek (name: Models) in dieser Projektmappe
- binde das Models Projekt in den Projekten Api und ORM ein
- binde das ORM-Projekt im Projekt Api ein
- füge die nuget pakete ef core, ef core tools und pomelo (mysql) dem Orm Projekt hinzu
- füge das Nuget Paket Swagger dem Api Projekt hinzu
- Swagger soll automatisch bei Programmstart der WEBApi im Browser geladen werden
- erzeuge eine DbManager Klasse im ORM Projekt inkl. Verbindungszeichenkette für MySQL (user: root, Password: 244466666)
- erzeuge in Models die Klasse User (Id (int), Username, Email, birthdate, gender (enum: male, female, other), password)
