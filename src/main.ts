import './style.css'
import { familyMembers } from './config'

type Age = {
  years: number
  months: number
  days: number
}

function calculateAge(birthDate: Date, currentDate: Date): Age {
  let years = currentDate.getFullYear() - birthDate.getFullYear()
  let months = currentDate.getMonth() - birthDate.getMonth()
  let days = currentDate.getDate() - birthDate.getDate()

  if (days < 0) {
    months -= 1
    const daysInPreviousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate()
    days += daysInPreviousMonth
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years, months, days }
}

function renderAges() {
  const today = new Date()
  const listItems = familyMembers
    .map((member) => {
      const birthDate = new Date(`${member.birthDate}T00:00:00`)
      const age = calculateAge(birthDate, today)

      return `
        <li class="card">
          <h2>${member.name}</h2>
          <p class="category">${member.category}</p>
          <p class="birth-date">Né(e) le ${birthDate.toLocaleDateString('fr-FR')}</p>
          <p class="age">${age.years} an(s), ${age.months} mois, ${age.days} jour(s)</p>
        </li>
      `
    })
    .join('')

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main class="container">
      <h1>Âge de la famille</h1>
      <p class="subtitle">Mise à jour en direct</p>
      <ul class="cards">${listItems}</ul>
    </main>
  `
}

renderAges()
setInterval(renderAges, 60_000)
