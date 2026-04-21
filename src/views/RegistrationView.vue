<script setup lang="ts">
const pageTitle = 'Registrierung'
</script>

<template>





  <section>
    <h1 class="h3 mb-3">{{ pageTitle }}</h1>
    <p class="mb-0">Registrierung</p>
  </section>


      <!-- mit Mag. Vogt-->
     <!-- 

    form... kennzeichnet das Formular
    label ... Beschriftung für das Eingabefeld
       for von label muss mit id von input übereinstimmen, damit die Beschriftung korrekt zugeordnet wird
    input ... Eingabefeld
       wichtig: type immer angeben (z.B. text, email, password), damit die Eingabe entsprechend validiert und dargestellt wird
    name = "username" ... entspricht dem Variablennamen, der später im Backend verarbeitet wird, wenn das Formular abgeschickt wird
    
    type = "radio" ... es muss der name bei allen Radio-Buttons gleich sein, damit sie als Gruppe erkannt werden und nur eine Auswahl möglich ist

    -->
    <form>
        <label for="username"> Benutzername</label>
        <input type="text" id="username" name="username" placeholder="Ihr Benutzername"/> <br />
        <label for="password"> Passwort</label>
        <input type="password" id="password" name="password" placeholder="Ihr Passwort"/><br />
        <label for="birthdate"> Geburtsdatum</label>
        <input type="date" id="birthdate" name="birthdate" /><br />
        <label for="gender"> Geschlecht </label><br />
        <input type="radio" id="gender" name="gender" value="male" /> Männlich <br />
        <input type="radio" id="gender" name="gender" value="female" /> Weiblich <br />
        <input type="radio" id="gender" name="gender" value="other"/> Divers <br /> 

        <label for="department"> Abteilung: </label>
        <select id="department" name="department">
            <option value="sales">Vertrieb</option>
            <option value="marketing">Marketing</option>
            <option value="development">Entwicklung</option>
        </select><br />
        <label for="pictures"> Profilbild: </label>
        <input type="file" id="pictures" name="pictures" accept="image/* "/><br />
        <label for="description"> Beschreibung: </label><br />
        <textarea id="description" name="description" rows="4" cols="50" placeholder="Ihre Beschreibung"></textarea><br />

        <input type="submit" value="Registrieren" />
        <input type="reset" value="Zurücksetzen" />



    </form>
</template>