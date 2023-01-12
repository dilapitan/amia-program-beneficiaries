import { db } from '@/firebase/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const getBeneficiaries = async (province) => {
  try {
    const q = province
      ? query(
          collection(db, 'beneficiaries'),
          where('part1.province', '==', province)
        )
      : collection(db, 'beneficiaries')

    const querySnapshot = await getDocs(q)
    const beneficiaries = []
    querySnapshot.forEach(async (doc) => {
      const { part0, part1, createdAt, userId } = doc.data()

      const item = {
        ...part0,
        ...part1,
        createdAt,
        userId,
      }

      beneficiaries.push(item)
    })

    return beneficiaries
  } catch (error) {
    console.error(error)
    return null
  }
}
