import { db } from '@/firebase/firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

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
        beneficiaryId: doc.id,
      }

      beneficiaries.push(item)
    })

    return beneficiaries
  } catch (error) {
    console.error(error)
    return null
  }
}

export const addBeneficiary = async (beneficiary) => {
  try {
    const docRef = await addDoc(collection(db, 'beneficiaries'), beneficiary)
    if (docRef) {
      console.log(docRef)
      return docRef
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const editBeneficiary = async () => {}

export const deleteBeneficiary = async (beneficiary) => {
  try {
    return await deleteDoc(doc(db, 'beneficiaries', beneficiary.beneficiaryId))
  } catch (error) {
    console.error(error)
    return null
  }
}
