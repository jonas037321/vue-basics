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

        // hier: ein relativ einfacher Email-Reg-Ausdruck


        // einfache email validierung mit regulärem Ausdruck
        // reguläre ausdrücke werden für mustererkennung in strings verwendet
        // ^ bedeutet Anfang des Strings, es darf also nichts vor der Email stehen
        // $ bedeutet Ende des Strings, es darf also nichts nach der Email stehen
        // [] definiert eine Menge von Zeichen, von denen eines vorkommen muss
        // \s steht für whitespace, also Leerzeichen, Tabulator oder Zeilenumbruch
        // ^innerhalb von [] bedeutet Negation, also es darf kein whitespace vorkommen
        // [^\s@]+ bedeutet also, dass mindestens ein Zeichen vorkommen muss, das kein whitespace und kein @ ist
        // + nach dem [] bedeutet, dass die vorherige Menge von Zeichen mindestens einmal vorkommen muss
        // * nach dem  [] bedeutet, dass die vorherige Menge von Zeichen beliebig oft vorkommen darf, also auch gar nicht
        // ? nach dem  [] bedeutet, dass die vorherige Menge von Zeichen optional ist, also entweder einmal oder gar nicht vorkommen darf
        // @ in unserem Bsp. muss an dieser Stelle ein @ vorkommen
        // . ... bedeutet, ein beliebiges Zeichen an dieser Stelle, da der
        // Punkt in regulären Ausdrücken eine besondere Bedeutung hat, muss er mit einem Backslash \ maskiert werden, damit er als normaler Punkt interpretiert wird

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Passwort Validierung - allgemein
    // Mindestlänge, Anzahl der Groß- und Kleinbuchstaben, Zahlen, Sonderzeichen, Liste der Sonderzeichen, Anzahl der Ziffern
    static isPasswordOk(
        password: string,
        passwordConfirmation: string,
        minLength: number = 8,
        minUpperCase: number = 1,
        minLowerCase: number = 1,
        minDigits: number = 1,
        minSpecialChars: number = 1,
        specialChars: string = '!@#$%^&*()_+[]{}|;:,.<>?'
    ): boolean {
        if(password !== passwordConfirmation) {
            return false

        }
        if(password.length < minLength) {
            return false
        }
        const upperCaseCount = (password.match(/[A-ZÄÖÜ]/g) || []).length  // /g steht für global, also alle Vorkommen im String, nicht nur das erste --> [] 
        if(upperCaseCount < minUpperCase) {
            return false
        }
        const lowerCaseCount = (password.match(/[a-z]/g) || []).length
        if(lowerCaseCount < minLowerCase) {
            return false
        }
        const digitCount = (password.match(/\d/g) || []).length
        if(digitCount < minDigits) {
            return false
        }
        const specialCharCount = (password.match(new RegExp(`[${specialChars.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&')}]`, 'g')) || []).length
        if(specialCharCount < minSpecialChars) {
            return false
        }
        // Birthday Validierung - allgemein
        const isOkBirthdate = (birthdate: string): boolean => {
            const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/
            if(!birthdateRegex.test(birthdate)) {
                return false
            }
            const parts = birthdate.split('-')
            if(parts.length !== 3) {
                return false
            }
            const year = Number(parts[0])
            const month = Number(parts[1])
            const day = Number(parts[2])
            if(Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
                return false
            }
            const birthdateObj = new Date(year, month - 1, day)
            if(isNaN(birthdateObj.getTime())) {
                return false
            }
                const today = new Date()
                const age = today.getFullYear() - birthdateObj.getFullYear()
                const monthDiff = today.getMonth() - birthdateObj.getMonth()
                const dayDiff = today.getDate() - birthdateObj.getDate()
                if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                    return age - 1 >= 18
                }
                return age >= 18
        }
        
        return true
    }

}

