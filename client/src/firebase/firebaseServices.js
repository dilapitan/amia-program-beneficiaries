import { db } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const getBeneficiaries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'beneficiaries'))
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
