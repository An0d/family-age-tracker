export type FamilyMember = {
  name: string
  category: 'Enfant' | 'Chien'
  birthDate: string
}

export const familyMembers: FamilyMember[] = [
  {
    name: 'Enfant 1',
    category: 'Enfant',
    birthDate: '2018-03-12',
  },
  {
    name: 'Enfant 2',
    category: 'Enfant',
    birthDate: '2021-09-04',
  },
  {
    name: 'Chien',
    category: 'Chien',
    birthDate: '2020-01-20',
  },
]
