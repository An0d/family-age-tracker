export type FamilyMember = {
  name: string
  category: 'Adulte' | 'Enfant' | 'Chien'
  birthDate: string
  deathDate?: string
}

export const familyMembers: FamilyMember[] = [
  {
    name: 'Papy',
    category: 'Adulte',
    birthDate: '1951-06-11',
  },
  {
    name: 'Mamie',
    category: 'Adulte',
    birthDate: '1961-02-04',
  },
  {
    name: 'Papa',
    category: 'Adulte',
    birthDate: '1985-06-04',
  },
  {
    name: 'Maman',
    category: 'Adulte',
    birthDate: '1985-01-25',
  },
  {
    name: 'Bambi',
    category: 'Enfant',
    birthDate: '2015-10-26',
  },
  {
    name: 'Ranma',
    category: 'Enfant',
    birthDate: '2018-08-09',
  },
  {
    name: 'Maze',
    category: 'Chien',
    birthDate: '2026-03-13',
  },
  {
    name: 'Keika',
    category: 'Chien',
    birthDate: '2010-12-17',
    deathDate: '2026-01-09',
  },
  {
    name: 'Lily',
    category: 'Chien',
    birthDate: '2013-04-29',
    deathDate: '2025-03-02',
  },
]
