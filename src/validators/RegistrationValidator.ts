export class RegistrationValidator {
    // prüfe, ob string nicht leer ist und eine Mindestlänge von 3 hat
    static isStringOk(str: string): boolean {
        return str.trim().length >= 3
    }

   // 12 == '12' // true, da beide Werte zu Zahl konvertiert werden
   // 12 === '12' // false, da unterschiedliche Typen


    static isEmailOk(email: string): boolean {
        // einfache Email-Validierung mit regulärem Ausdruck
        if(email === undefined || email.trim() === '') {
            return false
        }
        // einfache email validierung mit regulärem Ausdruck
        // reguläre ausdrücke werden für mustererkennung in strings verwendet
        // ^ bedeutet Anfang des Strings, $ bedeutet Ende des Strings
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
}

