import { db } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const getBeneficiaries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'beneficiaries'))
    const beneficiaries = []
    querySnapshot.forEach(async (doc) => {
      beneficiaries.push(doc.data())
    })

    return beneficiaries
  } catch (error) {
    console.error(error)
    return null
  }
}
