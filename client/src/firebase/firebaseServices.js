import { db } from '@/firebase/firebaseConfig'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'

export const addBeneficiary = async (beneficiary) => {
  try {
    const docRef = await addDoc(collection(db, 'beneficiaries'), beneficiary)
    if (docRef) {
      return docRef
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const editBeneficiary = async (beneficiary) => {
  try {
    const beneficiaryRef = doc(db, 'beneficiaries', beneficiary.beneficiaryId)
    const docRef = await updateDoc(beneficiaryRef, {
      createdAt: beneficiary.createdAt,
      part0: {
        date: beneficiary.part0.date,
        interviewStart: beneficiary.part0.interviewStart,
        interviewEnd: beneficiary.part0.interviewEnd,
        nameOfInterviewer: beneficiary.part0.nameOfInterviewer,
        surveyNo: beneficiary.part0.surveyNo,
      },
      part1: {
        barangay: beneficiary.part1.barangay,
        cityOrMunicipality: beneficiary.part1.cityOrMunicipality,
        contactNo: beneficiary.part1.contactNo,
        farmersCodeNo: beneficiary.part1.farmersCodeNo,
        nameOfFarmer: beneficiary.part1.nameOfFarmer,
        province: beneficiary.part1.province,
      },
      userId: beneficiary.userId,
    })
    if (docRef) {
      return docRef
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const deleteBeneficiary = async (beneficiary) => {
  try {
    return await deleteDoc(doc(db, 'beneficiaries', beneficiary.beneficiaryId))
  } catch (error) {
    console.error(error)
    return null
  }
}
