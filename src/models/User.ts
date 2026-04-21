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
