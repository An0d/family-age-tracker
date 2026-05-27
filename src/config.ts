export type FamilyMember = {
  name: string
  category: 'Parent' |'Enfant' | 'Chien'
  birthDate: string
}

export const familyMembers: FamilyMember[] = [
  {
    name: 'Papa',
    category: 'Parent',
    birthDate: '1985-06-04',
  },
  {
    name: 'Maman',
    category: 'Parent',
    birthDate: '1985-01-25',
  },
  {
    name: 'Abel',
    category: 'Enfant',
    birthDate: '2015-10-26',
  },
  {
    name: 'Cal',
    category: 'Enfant',
    birthDate: '2018-08-09',
  },
  {
    name: 'Maze',
    category: 'Chien',
    birthDate: '2026-03-13',
  },
]
