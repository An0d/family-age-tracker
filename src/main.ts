import './style.css'
import { familyMembers, type FamilyMember } from './config'

type Age = {
  years: number
  months: number
  days: number
}

function calculateAgeInWeeks(birthDate: Date, currentDate: Date): number {
  const millisecondsPerDay = 24 * 60 * 60 * 1000
  const daysSinceBirth = Math.floor(
    (currentDate.getTime() - birthDate.getTime()) / millisecondsPerDay,
  )

  return Math.floor(daysSinceBirth / 7)
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
  const categoryOrder: FamilyMember['category'][] = ['Adulte', 'Enfant', 'Chien']
  const categoryLabels: Record<FamilyMember['category'], string> = {
    Adulte: 'Adultes',
    Enfant: 'Enfants',
    Chien: 'Chiens',
  }

  const sections = categoryOrder
    .map((category) => {
      const listItems = familyMembers
        .filter((member) => member.category === category)
        .sort((a, b) => {
          const deceasedOrder = Number(Boolean(a.deathDate)) - Number(Boolean(b.deathDate))

          if (deceasedOrder !== 0) {
            return deceasedOrder
          }

          return a.name.localeCompare(b.name, 'fr-FR')
        })
        .map((member) => {
          const birthDate = new Date(`${member.birthDate}T00:00:00`)
          const deathDate = member.deathDate
            ? new Date(`${member.deathDate}T00:00:00`)
            : null
          const referenceDate = deathDate ?? today
          const age = calculateAge(birthDate, referenceDate)
          const ageInWeeks = calculateAgeInWeeks(birthDate, referenceDate)
          const deceasedMarker = deathDate
            ? '<span class="deceased-cross" title="Décédé" aria-label="Décédé">&dagger;</span>'
            : ''
          const deathDateLine = deathDate
            ? `<p class="death-date">Décédé(e) le ${deathDate.toLocaleDateString('fr-FR')}</p>`
            : ''
          const dogWeeksLine =
            member.category === 'Chien'
              ? `<p class="age">${ageInWeeks} semaine(s)</p>`
              : ''

          return `
            <li class="card ${deathDate ? 'is-deceased' : ''}">
              <h2>${member.name} ${deceasedMarker}</h2>
              <p class="category">${member.category}</p>
              <p class="birth-date">Né(e) le ${birthDate.toLocaleDateString('fr-FR')}</p>
              ${deathDateLine}
              ${dogWeeksLine}
              <p class="age">${age.years} an(s), ${age.months} mois, ${age.days} jour(s)</p>
            </li>
          `
        })
        .join('')

      return `
        <section class="category-section">
          <h2 class="section-title">${categoryLabels[category]}</h2>
          <ul class="cards">${listItems}</ul>
        </section>
      `
    })
    .join('')

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main class="container">
      <h1>Âge de la famille</h1>
      <p class="subtitle">Mise à jour en direct</p>
      <div class="category-groups">${sections}</div>
    </main>
  `
}

renderAges()
setInterval(renderAges, 60_000)
