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
    const { part0, part1, part2, part3 } = beneficiary

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
      part2: {
        age: part2.age,
        gender: part2.gender,
        civilStatus: part2.civilStatus,
        religion: part2.religion,
        belongingTo: part2.belongingTo,
        householdMembers: part2.householdMembers,
        yearsOfFarmingExperience: part2.yearsOfFarmingExperience,
        highestEducationalAttainment: part2.highestEducationalAttainment,
        languagesOrDialectsSpoken: part2.languagesOrDialectsSpoken,
        mainSourceOfIncome: part2.mainSourceOfIncome,
        otherSourcesOfIncome: part2.otherSourcesOfIncome,
        averageGrossMonthlyIncomeOfHousehold:
          part2.averageGrossMonthlyIncomeOfHousehold,
        averageGrossMonthlyFarmIncome: part2.averageGrossMonthlyFarmIncome,
        membershipInAFarmerGroupOrAssociationOrOrganization:
          part2.membershipInAFarmerGroupOrAssociationOrOrganization,
        enrolledInRegistrySystemForBasicSectorsInAgriculture:
          part2.enrolledInRegistrySystemForBasicSectorsInAgriculture,
      },
      part3: {
        totalAreaOfAgriculturalLand: part3.totalAreaOfAgriculturalLand,
        totalAreaOfForestryLand: part3.totalAreaOfForestryLand,
        totalCultivatedArea: part3.totalCultivatedArea,
        distanceFromHomeToFarm: part3.distanceFromHomeToFarm,
        distanceFromLandToWaterSource: part3.distanceFromLandToWaterSource,
        distanceFromMarketNearestPavedRoad:
          part3.distanceFromMarketNearestPavedRoad,
        distanceFromMarketOrTradingPost: part3.distanceFromMarketOrTradingPost,
        irrigationSource: part3.irrigationSource,
        monthsWithoutRain: part3.monthsWithoutRain,
        positionInTheLandscape: part3.positionInTheLandscape,
        locationOfFarm: part3.locationOfFarm,
        landTenure: part3.landTenure,
        tenancy: part3.tenancy,
        landHolding: part3.landHolding,
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
