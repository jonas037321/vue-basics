import { Gender } from './User'

export class RegistrationRequest {
  constructor(
    public benutzername: string,
    public email: string,
    public geburtsdatum: string,
    public geschlecht: Gender,
    public kennwort: string,
  ) {}
}
