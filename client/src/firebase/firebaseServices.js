import { db } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const getBeneficiaries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'beneficiaries'))
    const beneficiaries = []
    querySnapshot.forEach((doc) => {
      beneficiaries.push(doc.data())
    })

    return beneficiaries
  } catch (error) {
    return null
  }
}
