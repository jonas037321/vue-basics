// TypeScript
//   ist identisch zu JavaScript, aber erweitert JS
//   um Typsicherheit
// JS: let name = "Aslan"; ... es wird kein Datentyp angegeben
//     name = 19.3;
// TS: let name: string = "Aslan"; ... der Datentyp string wird explizit angegeben
//   Vorteile von TS:
//   - Typsicherheit und alle zu diesem Datentyp verfügbaren Methoden werden in der Entwicklungsumgebung vorgeschlagen

export enum Gender {
  Male = 'male',
  Female = 'female',
  Diverse = 'diverse',
  Unknown = 'unknown',
}


export class User {
  constructor(
    public benutzername: string,
    public geburtsdatum: Date,
    public email: string,
    public kennwort: string,
    public geschlecht: Gender,
  ) {}
}
