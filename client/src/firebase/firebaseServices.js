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
    const { part0, part1 } = beneficiary

    const beneficiaryRef = doc(db, 'beneficiaries', beneficiary.beneficiaryId)
    const docRef = await updateDoc(beneficiaryRef, {
      createdAt: beneficiary.createdAt,
      part0: {
        date: part0.date,
        interviewStart: part0.interviewStart,
        interviewEnd: part0.interviewEnd,
        nameOfInterviewer: part0.nameOfInterviewer,
        surveyNo: part0.surveyNo,
      },
      part1: {
        barangay: part1.barangay,
        cityOrMunicipality: part1.cityOrMunicipality,
        contactNo: part1.contactNo,
        farmersCodeNo: part1.farmersCodeNo,
        nameOfFarmer: part1.nameOfFarmer,
        province: part1.province,
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
