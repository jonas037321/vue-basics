<script setup lang="ts">

// hier wird eine Komponente von Vue importiert
import { ref } from 'vue'
// hier importieren wir die User KLasse und das Gender Enum aus unserem Modell
import { Gender, User } from '@/models/User'

const pageTitle = 'Registrierung'

// hier werden Variablen definiert
// ref() ist eine Funktion von Vue, die es uns ermöglicht, reaktive Daten zu erstellen. 
// Das bedeutet, dass wenn sich der Wert dieser Variablen ändert, die Benutzeroberfläche automatisch aktualisiert wird, um die neuen Werte anzuzeigen.

const benutzername = ref('')
const geburtsdatum = ref('')
const email = ref('')
const kennwort = ref('')
const geschlecht = ref<Gender>(Gender.Unknown)

const createdUser = ref<User | null>(null)

const handleSubmit = () => {

  // Validierung der Eingabedaten

  // an die API senden

  // Rückmeldung an den Benutzer
  createdUser.value = new User(
    benutzername.value,
    new Date(geburtsdatum.value),
    email.value,
    kennwort.value,
    geschlecht.value,
  )
}

</script>

<template>
  <!--
  in form:
    @submit.prevent="handleSubmit" ... prevent bedeutet, dass das Standardverhalten
       (Formular wird abgeschickt und Seite neu geladen) verhindert wird, damit wir stattdessen
       mit JavaScript die Daten verarbeiten können

       handleSubmit ist die Funktion, die aufgerufen wird, wenn das Formular abgeschickt wird.


  
  
    v-model="...": ... bindet den Wert des Eingabefelds an die entsprechende Variable (z.B. benutzername, geburtsdatum, etc.)
        Dadurch wird die Variable automatisch aktualisiert, wenn der Benutzer etwas eingibt.
  -->
  <section>
    <h1 class="h3 mb-3">{{ pageTitle }}</h1>

    <form class="d-grid gap-3" @submit.prevent="handleSubmit">
      <input v-model="benutzername" class="form-control" type="text" placeholder="Benutzername" />
      <input v-model="geburtsdatum" class="form-control" type="date" />
      <input v-model="email" class="form-control" type="email" placeholder="E-Mail" />
      <input v-model="kennwort" class="form-control" type="password" placeholder="Kennwort" />

      <select v-model="geschlecht" class="form-select">
        <option :value="Gender.Unknown">Geschlecht</option>
        <option :value="Gender.Male">Männlich</option>
        <option :value="Gender.Female">Weiblich</option>
        <option :value="Gender.Diverse">Divers</option>
      </select>

      <button class="btn btn-primary" type="submit">Registrieren</button>
    </form>

    <p v-if="createdUser" class="mt-3 mb-0">Benutzer angelegt.</p>

    <!--
    <section>
      <h1 class="h3 mb-3">Registrierung</h1>
      <p class="mb-0">Registrierung</p>
    </section>

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
    -->
  </section>
</template>