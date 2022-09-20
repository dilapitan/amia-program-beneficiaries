<template>
  <div class="my-5 mx-10">
    <h3>Add Beneficiary</h3>
    <p class="mt-2 text-body-2">
      This is where you can add a new beneficiary to the list.
    </p>
    <br />
    <v-card class="pa-5" color="middleground" flat height="100%">
      <!-- 0 General -->
      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>SURVEY NO:</strong>
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="surveyNo"
            ></v-text-field>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>DATE:</strong>
          </div>

          <div>
            <v-menu
              ref="dateMenu"
              v-model="dateMenu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  dense
                  v-model="date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="dateMenu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dateMenu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>INTERVIEW START:</strong>
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="interviewStart"
            ></v-text-field>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>INTERVIEW END:</strong>
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="interviewEnd"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="5">
          <div class="mr-2">
            <strong>NAME OF INTERVIEWER:</strong>
          </div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="nameOfInterviewer"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 1 Farmer's Basic Information -->

      <h3>I. FARMER'S BASIC INFORMATION</h3>

      <br />

      <div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(1.1) Region/Province:</div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="regionOrProvince"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(1.2) City/Municipality:</div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="cityOrMunicipality"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(1.3) Barangay:</div>

          <div>
            <v-text-field dense clearable v-model="barangay"></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(1.4) Name of Farmer:</div>

          <div>
            <v-text-field dense clearable v-model="nameOfFarmer"></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(1.5) Contact No:</div>

          <div>
            <v-text-field dense clearable v-model="contactNo"></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(1.6) Farmer's Code No:</div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="farmersCodeNo"
            ></v-text-field>
          </div>
        </div>
      </div>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 2 Socio-demographic Information -->

      <h3>II. SOCIO-DEMOGRAPHIC INFORMATION</h3>

      <br />

      <div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.1) Age:</div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="age"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.2) Gender:</div>

          <div>
            <v-select
              class="middle-length-select"
              :items="genderOptions"
              label="Select option"
            ></v-select>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.3) Civil Status:</div>

          <div>
            <v-select
              class="middle-length-select"
              :items="civilStatusOptions"
              label="Select option"
            ></v-select>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.4) Religion:</div>

          <div>
            <v-text-field dense clearable v-model="religion"></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">
            (2.5) Belongs to the following sector:
          </div>

          <div>
            <v-select
              :items="belongingToOptions"
              label="Select option"
              v-model="belongingTo"
            ></v-select>
          </div>
        </div>

        <v-row
          v-if="belongingTo === 'Indigenous People'"
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="belongingToSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex align-baseline" cols="12" sm="12" md="12">
          <div class="mr-2 text-body-2">
            (2.6) Household Members (farmer not included):
          </div>
        </div>

        <div class="mt-3 ml-5">
          <div
            v-for="(householdMember, index) in householdMembers"
            :key="index"
          >
            <v-row class="d-flex align-baseline">
              <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  class="mr-4"
                  dense
                  clearable
                  v-model="householdMember.name"
                  label="Name"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  class="mr-4 small-number-input"
                  dense
                  clearable
                  v-model="householdMember.age"
                  label="Age"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  class="mr-4"
                  dense
                  clearable
                  v-model="householdMember.gender"
                  label="Gender"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  class="long-input"
                  dense
                  clearable
                  v-model="householdMember.relationToTheRespondent"
                  label="Relation to Respondent"
                ></v-text-field>
              </v-col>
              <v-col v-if="index !== 0" cols="12" sm="1">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      @click="removeHouseholdMember(index)"
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                    >
                      mdi-cancel
                    </v-icon>
                  </template>
                  <span>Remove Household Member</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </div>
          <br />
          <v-btn @click="addHouseholdMember()" color="primary" small outlined>
            ADD MORE MEMBER
          </v-btn>
        </div>

        <br />

        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.7) Years of Farming Experience:</div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="yearsOfFarmingExperience"
            ></v-text-field>
          </div>
        </div>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.8) Highest Educational Attainment:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="highestEducationalAttainmentOptions"
              label="Select option"
              v-model="highestEducationalAttainment"
            ></v-select>
          </v-col>
        </v-row>

        <v-row
          v-if="highestEducationalAttainment === 'Others'"
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="highestEducationalAttainmentSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.9) Languages/Dialects Spoken:</div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="languagesOrDialectsSpoken"
            ></v-text-field>
          </div>
        </div>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="4" md="2" class="mr-2 text-body-2">
            (2.10) Main Source of Income:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="mainSourceOfIncomeOptions"
              label="Select option"
              v-model="mainSourceOfIncome"
            ></v-select>
          </v-col>
        </v-row>

        <v-row
          v-if="
            mainSourceOfIncome === 'Regular Job' ||
            mainSourceOfIncome === 'Own Business' ||
            mainSourceOfIncome === 'Others'
          "
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="mainSourceOfIncomeSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="4" md="2" class="mr-2 text-body-2">
            (2.11) Other Sources of Income:
          </v-col>
        </v-row>

        <div>
          <div
            :class="{ 'ml-3': $vuetify.breakpoint.smAndUp }"
            v-for="(otherSource, index) in otherSourcesOfIncomeOptions"
            :key="index"
          >
            <div class="d-flex">
              <v-checkbox
                class="mr-2 ma-0 pa-0"
                @click="addOtherSourceOfIncome(otherSource, index)"
                v-model="otherSource.selected"
                :label="otherSource.id"
              ></v-checkbox>
              <v-text-field
                class="ma-0 pa-0 mb-2"
                v-if="otherSource.selected && otherSource.id === 'Regular Job'"
                dense
                clearable
                v-model="otherSourcesOfIncomeRegularJobSpecify"
                label="Please specify"
              ></v-text-field>
              <v-text-field
                class="ma-0 pa-0 mb-2"
                v-if="otherSource.selected && otherSource.id === 'Own Business'"
                dense
                clearable
                v-model="otherSourcesOfIncomeOwnBusinessSpecify"
                label="Please specify"
              ></v-text-field>
              <v-text-field
                class="ma-0 pa-0 mb-2"
                v-if="otherSource.selected && otherSource.id === 'Others'"
                dense
                clearable
                v-model="otherSourcesOfIncomeOthersSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </div>
        </div>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.12) Average Gross Monthly Income of Household (PhP):
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="averageGrossMonthlyIncomeOfHouseholdOptions"
              label="Select option"
              v-model="averageGrossMonthlyIncomeOfHousehold"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.13) Average Gross Monthly Farm Income (PhP):
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="averageGrossMonthlyFarmIncomeOptions"
              label="Select option"
              v-model="averageGrossMonthlyFarmIncome"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.14) Membership in a Farmer Group/Association/Organization:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="membershipInAFarmerGroupOrAssociationOrOrganization"
              :label="
                membershipInAFarmerGroupOrAssociationOrOrganization
                  ? 'Yes'
                  : 'No'
              "
            ></v-switch>
            <v-text-field
              class="ma-0 pa-0 mb-2"
              v-if="membershipInAFarmerGroupOrAssociationOrOrganization"
              dense
              clearable
              v-model="
                membershipInAFarmerGroupOrAssociationOrOrganizationSpecify
              "
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.15) Enrolled in Registry System for Basic Sectors In Agriculture
            (RSBSA):
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="enrolledInRegistrySystemForBasicSectorsInAgriculture"
              :label="
                enrolledInRegistrySystemForBasicSectorsInAgriculture
                  ? 'Yes'
                  : 'No'
              "
            ></v-switch>
          </v-col>
        </v-row>
      </div>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 3 Farm Description -->

      <h3>III. FARM DESCRIPTION</h3>

      <br />

      <div>
        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.1) Total Area of Agricultural Land (ha):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="totalAreaOfAgriculturalLand"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.2) Total Area of Forestry Land (ha):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="totalAreaOfForestryLand"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.3) Total Cultivated Area (ha):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="totalCultivatedArea"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.4) Distance from Home to Farm (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromHomeToFarm"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.5) Distance from Land to Water Source (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromLandToWaterSource"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="8">
            <div class="mr-2 text-body-2">
              (3.6) Distance from Market Nearest Paved (concrete/asphalt) road
              (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromMarketNearestPavedRoad"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.7) Distance from Market/Trading Post (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromMarketOrTradingPost"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.8) Irrigation Source:</div>

          <div>
            <v-select
              :items="irrigationSourceOptions"
              label="Select option"
              v-model="irrigationSource"
            ></v-select>
          </div>
        </div>

        <v-row
          v-if="irrigationSource === 'Others'"
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="irrigationSourceOthersSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.9) Months Without Rain:</div>

          <div>
            <v-combobox
              v-model="monthsWithoutRain"
              :items="months"
              label="Select options"
              multiple
              dense
            ></v-combobox>
          </div>
        </div>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.10) Position in the Landscape:</div>

          <div>
            <v-select
              :items="positionInTheLandscapeOptions"
              label="Select option"
              v-model="positionInTheLandscape"
            ></v-select>
          </div>
        </div>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.11) Location of Farm:</div>

          <div>
            <v-select
              :items="locationOfFarmOptions"
              label="Select option"
              v-model="locationOfFarm"
            ></v-select>
          </div>
        </div>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.12) Land Tenure:</div>

          <div>
            <v-select
              :items="landTenureOptions"
              label="Select option"
              v-model="landTenure"
            ></v-select>
          </div>
        </div>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.13) Tenancy:</div>

          <div>
            <v-select
              :items="tenancyOptions"
              label="Select option"
              v-model="tenancy"
            ></v-select>
          </div>
        </div>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.14) Land Holding:</div>

          <div>
            <v-select
              :items="landHoldingOptions"
              label="Select option"
              v-model="landHolding"
            ></v-select>
          </div>
        </div>
      </div>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 4 Farm Activities -->

      <h3>IV. FARM ACTIVITIES</h3>

      <br />

      <div>
        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="4" md="2" class="mr-2 text-body-2">
            (4.1) Agricultural Activities:
          </v-col>
        </v-row>

        <div>
          <div
            :class="{ 'ml-3': $vuetify.breakpoint.smAndUp }"
            v-for="(
              agriculturalActivities, index
            ) in agriculturalActivitiesOptions"
            :key="index"
          >
            <v-row>
              <v-col class="mr-2 ma-0 pa-0">
                <v-checkbox
                  @click="
                    addAgriculturalActivities(agriculturalActivities, index)
                  "
                  v-model="agriculturalActivities.selected"
                  :label="agriculturalActivities.id"
                ></v-checkbox>
              </v-col>
            </v-row>

            <div
              class="ml-2"
              v-if="
                agriculturalActivities.selected &&
                agriculturalActivities.id === 'Crop Production'
              "
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="ma-0 pa-0 d-flex align-baseline flex-wrap"
                >
                  <div class="mr-2 text-body-2">(4.2) Crops Produced:</div>

                  <div>
                    <v-text-field
                      :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                      dense
                      clearable
                      v-model="cropsProduced"
                      label="Please specify"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="ma-0 pa-0 d-flex align-baseline flex-wrap"
                >
                  <div class="mr-2 text-body-2">
                    (4.3) Land Area Devoted For Crop Production (ha):
                  </div>

                  <div>
                    <v-text-field
                      :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                      dense
                      clearable
                      v-model="landAreaDevotedForCropProduction"
                      label="Please specify"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </div>

            <div
              class="ml-2"
              v-if="
                agriculturalActivities.selected &&
                agriculturalActivities.id === 'Livestock Production'
              "
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="ma-0 pa-0 d-flex align-baseline flex-wrap"
                >
                  <div class="mr-2 text-body-2">
                    (4.4) Livestock Raised/Produced:
                  </div>

                  <div>
                    <v-text-field
                      :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                      dense
                      clearable
                      v-model="livestockRaisedOrProduced"
                      label="Please specify"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="ma-0 pa-0 d-flex align-baseline flex-wrap"
                >
                  <div class="mr-2 text-body-2">
                    (4.5) Land Area Devoted For Livestock Production (ha):
                  </div>

                  <div>
                    <v-text-field
                      :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                      dense
                      clearable
                      v-model="landAreaDevotedForLivestockProduction"
                      label="Please specify"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </div>

            <div
              class="ml-2"
              v-if="
                agriculturalActivities.selected &&
                agriculturalActivities.id === 'Aquaculture'
              "
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="ma-0 pa-0 d-flex align-baseline flex-wrap"
                >
                  <div class="mr-2 text-body-2">
                    (4.6) Species grown for Aquaculture:
                  </div>

                  <div>
                    <v-text-field
                      :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                      dense
                      clearable
                      v-model="speciesGrownForAquaculture"
                      label="Please specify"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="ma-0 pa-0 d-flex align-baseline flex-wrap"
                >
                  <div class="mr-2 text-body-2">
                    (4.7) Land Area Devoted for Aquaculture (ha):
                  </div>

                  <div>
                    <v-text-field
                      :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                      dense
                      clearable
                      v-model="landAreaDevotedForAquaculture"
                      label="Please specify"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="8"
                  class="ma-0 pa-0 d-flex align-baseline flex-wrap"
                >
                  <div class="mr-2 text-body-2">
                    (4.8) Source of Water for Aquaculture:
                  </div>

                  <div>
                    <v-text-field
                      :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                      dense
                      clearable
                      v-model="sourceOfWaterForAquaculture"
                      label="Please specify"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </div>

            <v-row
              v-if="
                agriculturalActivities.selected &&
                agriculturalActivities.id === 'Agri-based Product Development'
              "
              class="ml-3"
              :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
            >
              <v-col cols="12" sm="6" md="3">
                <div>
                  <v-text-field
                    dense
                    clearable
                    v-model="agriBasedProductDevelopmentSpecify"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(4.9) Cropping Pattern:</div>

          <div>
            <v-select
              :items="croppingPatternOptions"
              label="Select option"
              v-model="croppingPattern"
            ></v-select>
          </div>
        </div>

        <v-row
          v-if="croppingPattern === 'Others'"
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="croppingPatternSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex align-baseline" cols="12" sm="12" md="12">
          <div class="mr-2 text-body-2">(4.10) Cropping Calendar:</div>
        </div>

        <div :class="{ 'ml-6': $vuetify.breakpoint.smAndUp }">
          <br />

          <div>
            <p class="text-body-2 font-weight-bold">Crop 1:</p>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Land Preparation:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop1LandPreparation"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Planting:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop1Planting"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Growing:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop1Growing"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Harvesting:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop1Harvesting"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>
          </div>

          <br />

          <v-switch
            v-model="addCrop2"
            :label="addCrop2 ? 'Remove Crop 2' : 'Add Crop 2'"
          ></v-switch>

          <div v-if="addCrop2">
            <p class="text-body-2 font-weight-bold">Crop 2:</p>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Land Preparation:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop2LandPreparation"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Planting:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop2Planting"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Growing:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop2Growing"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>

            <v-row class="d-flex align-baseline">
              <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
                <p class="text-body-2">Harvesting:</p>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12" sm="4">
                <v-combobox
                  v-model="cropCalendarCrop2Harvesting"
                  :items="months"
                  label="Select month(s)"
                  multiple
                  dense
                ></v-combobox>
              </v-col>
            </v-row>
          </div>
        </div>

        <v-row>
          <v-col
            class="d-flex align-baseline flex-wrap"
            cols="12"
            sm="6"
            md="10"
          >
            <div class="mr-2 text-body-2">
              (4.11) Estimated Gross Income Per Cropping (PhP):
            </div>

            <div :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }">
              <v-text-field
                class="mr-4"
                label="1st Cropping"
                dense
                clearable
                v-model="estimatedGrossIncomePerCroppingFirstCropping"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                label="2nd Cropping"
                dense
                clearable
                v-model="estimatedGrossIncomePerCroppingFirstCropping"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </div>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 5 Technical Knowledge/Perception of Climate Change and its Impacts -->

      <h3>
        V. TECHNICAL KNOWLEDGE/PERCEPTION OF CLIMATE CHANGE AND ITS IMPACTS
      </h3>

      <br />

      <div>
        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.1) Attended Agricultural-related Trainings:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="attendedAgriculturalRelatedTrainings"
              :label="attendedAgriculturalRelatedTrainings ? 'Yes' : 'No'"
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.2) Total Number of Trainings Attended:
          </v-col>

          <v-col cols="12" sm="2" md="4">
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="totalNumberOfTrainingsAttended"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.3) Source of Information Related to Improving Agricultural
            Production:
          </v-col>
          <v-col class="ma-0 pa-0" cols="12" sm="4">
            <v-combobox
              v-model="
                sourceOfInformationRelatedToImprovingAgriculturalProduction
              "
              :items="sourceOfInformationOptions"
              label="Select options"
              multiple
              dense
            ></v-combobox>
          </v-col>
        </v-row>

        <v-row :class="{ 'ml-5': $vuetify.breakpoint.smAndUp }">
          <v-col cols="12" sm="4">
            <v-text-field
              v-if="
                sourceOfInformationRelatedToImprovingAgriculturalProduction.includes(
                  'Others'
                )
              "
              dense
              clearable
              v-model="
                sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify
              "
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.4) Source of Information Related to Improving Agricultural
            Product Processing:
          </v-col>

          <v-col class="ma-0 pa-0" cols="12" sm="4">
            <v-combobox
              v-model="
                sourceOfInformationRelatedToImprovingAgriculturalProductProcessing
              "
              :items="sourceOfInformationOptions"
              label="Select options"
              multiple
              dense
            ></v-combobox>
          </v-col>
        </v-row>

        <v-row :class="{ 'ml-5': $vuetify.breakpoint.smAndUp }">
          <v-col cols="12" sm="4">
            <v-text-field
              v-if="
                sourceOfInformationRelatedToImprovingAgriculturalProductProcessing.includes(
                  'Others'
                )
              "
              dense
              clearable
              v-model="
                sourceOfInformationRelatedToImprovingAgriculturalProductProcessingSpecify
              "
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.5) Source of Climate and Weather Information:
          </v-col>

          <v-col class="ma-0 pa-0" cols="12" sm="4">
            <v-combobox
              v-model="sourceOfClimateAndWeatherInformation"
              :items="sourceOfInformationOptions"
              label="Select options"
              multiple
              dense
            ></v-combobox>
          </v-col>
        </v-row>

        <v-row :class="{ 'ml-5': $vuetify.breakpoint.smAndUp }">
          <v-col cols="12" sm="4">
            <v-text-field
              v-if="sourceOfClimateAndWeatherInformation.includes('Others')"
              dense
              clearable
              v-model="sourceOfClimateAndWeatherInformationSpecify"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.6) Observed Any Long-term Changes in Climate
            (temperature/rainfall):
          </v-col>

          <v-col cols="12" sm="2">
            <v-select
              :items="generalThreeChoice"
              label="Select option"
              v-model="observedAnyLongTermChangesInClimate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.1) Long-term Changes in Climate for Temperature *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForTemperature"
              :label="
                longtermChangesInClimateForTemperature ? 'Increase' : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.2) Long-term Changes in Climate for Amount of Rainfaill *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForAmountOfRainfaill"
              :label="
                longtermChangesInClimateForAmountOfRainfaill
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.3) Long-term Changes in Climate for Rainfall Timing *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForRainfallTiming"
              :label="
                longtermChangesInClimateForRainfallTiming
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.4) Long-term Changes in Climate for Rainful Intensity *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForRainfulIntensity"
              :label="
                longtermChangesInClimateForRainfulIntensity
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.5) Long-term Changes in Climate for Rainfall Duration *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForRainfallDuration"
              :label="
                longtermChangesInClimateForRainfallDuration
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.6) Long-term Changes in Climate for Number of Weather Events *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForNumberOfWeatherEvents"
              :label="
                longtermChangesInClimateForNumberOfWeatherEvents
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.7) Long-term Changes in Climate for Number of Hot Days *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForNumberOfHotDays"
              :label="
                longtermChangesInClimateForNumberOfHotDays
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.8) Long-term Changes in Climate for Number of Rainy Days *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="longtermChangesInClimateForNumberOfRainyDays"
              :label="
                longtermChangesInClimateForNumberOfRainyDays
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.9) Long-term Changes in Climate for Occurence of Pests And
            Diseases in Crops *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="
                longtermChangesInClimateForOccurenceOfPestsAndDiseasesInCrops
              "
              :label="
                longtermChangesInClimateForOccurenceOfPestsAndDiseasesInCrops
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.10) Long-term Changes in Climate for Occurence of Pests And
            Diseases in Livestock *:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="
                longtermChangesInClimateForOccurenceOfPestsAndDiseasesInLivestock
              "
              :label="
                longtermChangesInClimateForOccurenceOfPestsAndDiseasesInLivestock
                  ? 'Increase'
                  : 'Decrease'
              "
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.11) Observed any change in the Onset of Dry Season:
          </v-col>

          <v-col cols="12" sm="2">
            <v-select
              :items="generalThreeChoice"
              label="Select option"
              v-model="observedAnyChangeInTheOnsetOfDrySeason"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.7.12) Observed any change in the Onset of Wet Season:
          </v-col>

          <v-col cols="12" sm="2">
            <v-select
              :items="generalThreeChoice"
              label="Select option"
              v-model="observedAnyChangeInTheOnsetOfWetSeason"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.8.1) Description of Change in Temperature:
          </v-col>

          <v-col cols="12" sm="3">
            <v-select
              :items="descriptionOfChangesInClimateOptions"
              label="Select option"
              v-model="descriptionOfChangeInTemperature"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.8.2) Description of Change in Rainfall Duration:
          </v-col>

          <v-col cols="12" sm="3">
            <v-select
              :items="descriptionOfChangesInClimateOptions"
              label="Select option"
              v-model="descriptionOfChangeInRainfallDuration"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.8.3) Description of Change in Rainfall Timing:
          </v-col>

          <v-col cols="12" sm="3">
            <v-select
              :items="descriptionOfChangesInClimateOptions"
              label="Select option"
              v-model="descriptionOfChangeInRainfallTiming"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.8.4) Description of Change in Rainfall Intensity:
          </v-col>

          <v-col cols="12" sm="3">
            <v-select
              :items="descriptionOfChangesInClimateOptions"
              label="Select option"
              v-model="descriptionOfChangeInRainfallIntensity"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (5.8.5) Description of Change in Number of Weather Events:
          </v-col>

          <v-col cols="12" sm="3">
            <v-select
              :items="descriptionOfChangesInClimateOptions"
              label="Select option"
              v-model="descriptionOfChangeInNumberOfWeatherEvents"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" class="mr-2 text-body-2">
            (5.9) Perceived Effects/Impacts of Long-term Changes in Climate:
          </v-col>
        </v-row>

        <div
          :class="{
            'ml-5': $vuetify.breakpoint.xsOnly,
            'ml-10': $vuetify.breakpoint.smAndUp,
          }"
        >
          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool"
                label="(5.9.1) Change in timing of rains"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool"
                dense
                v-model="perceivedEffectsOrImpactsOfChangeInTimingOfRains"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool
                "
                label="(5.9.2) Perceived Effects/Impacts of: Abrupt Change in Seasons/Changes in Growing Season"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfReducedCroppingSeasonBool"
                label="(5.9.3) Perceived Effects/Impacts of: Reduced Cropping (Growing) Season"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfReducedCroppingSeasonBool"
                dense
                v-model="perceivedEffectsOrImpactsOfReducedCroppingSeason"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool
                "
                label="(5.9.4) Perceived Effects/Impacts of: Increased Frequency Of Drought and Crop Failure"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool
                "
                label="(5.9.5) Perceived Effects/Impacts of: Increased Frequency Of Floods and Farm Destructions"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfPostharvestLossesBool"
                label="(5.9.6) Perceived Effects/Impacts of: Postharvest Losses"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfPostharvestLossesBool"
                dense
                v-model="perceivedEffectsOrImpactsOfPostharvestLosses"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfPestInvasionBool"
                label="(5.9.7) Perceived Effects/Impacts of: Pest Invasion"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfPestInvasionBool"
                dense
                v-model="perceivedEffectsOrImpactsOfPestInvasion"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool
                "
                label="(5.9.8) Perceived Effects/Impacts of: Prevalence of Pests and Diseases"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool"
                label="(5.9.9) Perceived Effects/Impacts of: Poverty and Food Shortages"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool"
                dense
                v-model="perceivedEffectsOrImpactsOfPovertyAndFoodShortages"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfLackOfPotableWaterBool"
                label="(5.9.10) Perceived Effects/Impacts of: Lack of Potable Water (Drinking)"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfLackOfPotableWaterBool"
                dense
                v-model="perceivedEffectsOrImpactsOfLackOfPotableWater"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool
                "
                label="(5.9.11) Perceived Effects/Impacts of: ReducedVolumeOfIrrigationWater"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfErosionsBool"
                label="(5.9.12) Perceived Effects/Impacts of: Erosions"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfErosionsBool"
                dense
                v-model="perceivedEffectsOrImpactsOfErosions"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool
                "
                label="(5.9.13) Perceived Effects/Impacts of: Extinction of Fishes and Aquatic Life"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool
                "
                label="(5.9.14) Perceived Effects/Impacts of: ExtinctionOfSomeCropsAndCropVarieties"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfDeathOfLivestockBool"
                label="(5.9.15) Perceived Effects/Impacts of: Death of Livestock"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfDeathOfLivestockBool"
                dense
                v-model="perceivedEffectsOrImpactsOfDeathOfLivestock"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool
                "
                label="(5.9.16) Perceived Effects/Impacts of: Decreased Livestock Production"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfDecreasedLivestockProduction
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool
                "
                label="(5.9.17) Perceived Effects/Impacts of: Rising Cost of Farming and Fishing"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool
                "
                label="(5.9.18) Perceived Effects/Impacts of: Destruction of Farm Roads and Homes"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfRuralUrbanMigrationBool"
                label="(5.9.19) Perceived Effects/Impacts of: Rural-Urban Migration"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfRuralUrbanMigrationBool"
                dense
                v-model="perceivedEffectsOrImpactsOfRuralUrbanMigration"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool"
                label="(5.9.20) Perceived Effects/Impacts of: Siltation of Water Bodies"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool"
                dense
                v-model="perceivedEffectsOrImpactsOfSiltationOfWaterBodies"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool
                "
                label="(5.9.21) Perceived Effects/Impacts of: Disappearance of Vegetation Cover"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool
                "
                dense
                v-model="
                  perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="perceivedEffectsOrImpactsOfOthersBool"
                label="(5.9.22) Perceived Effects/Impacts of: Others"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row v-if="perceivedEffectsOrImpactsOfOthersBool">
            <v-col cols="12">
              <div
                v-for="(item, index) in perceivedEffectsOrImpactsOfOthersList"
                :key="index"
              >
                <v-row class="d-flex align-baseline">
                  <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      class="mr-4"
                      dense
                      clearable
                      v-model="item.effectsOrImpact"
                      label="Effect or Impact"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="2">
                    <v-select
                      :items="fivePointScale"
                      dense
                      v-model="item.rate"
                      label="Rate"
                    ></v-select>
                  </v-col>
                  <v-col v-if="index !== 0" cols="12" sm="1">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          @click="
                            removePerceivedEffectsOrImpactsOfOthers(index)
                          "
                          color="primary"
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-cancel
                        </v-icon>
                      </template>
                      <span>Remove</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </div>
              <br />
              <v-btn
                @click="addPerceivedEffectsOrImpactsOfOthers()"
                color="primary"
                small
                outlined
              >
                ADD
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <v-row cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" class="mr-2 text-body-2">
            (5.10) Observed Main Opportunities (Positive Effects/Impacts) of
            These Long-term Changes in Climate *:
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              filled
              clearable
              v-model="observedMainOpportunitiesOfLongTermChangesInClimate"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" class="mr-2 text-body-2">
            (5.11) Drivers of Change and Vulnerability:
          </v-col>
        </v-row>

        <div
          :class="{
            'ml-5': $vuetify.breakpoint.xsOnly,
            'ml-10': $vuetify.breakpoint.smAndUp,
          }"
        >
          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="driversOfChangeAndVulnerabilityOfLandDegredationBool"
                label="(5.11.1) Drivers of Change and Vulnerability of: Land Degradation (Soil Nutrient Depletion)"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="driversOfChangeAndVulnerabilityOfLandDegredationBool"
                dense
                v-model="driversOfChangeAndVulnerabilityOfLandDegredation"
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool
                "
                label="(5.11.2) Drivers of Change and Vulnerability of: Unexpexcted Changes in Input Prices"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool
                "
                dense
                v-model="
                  driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool
                "
                label="(5.11.3) Drivers of Change and Vulnerability of: Unexpected Changes in Product Prices"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool
                "
                dense
                v-model="
                  driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool
                "
                label="(5.11.4) Drivers of Change and Vulnerability of: Risks for Diseases and Pests Affecting Crops and Animals"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-select
                :items="fivePointScale"
                v-if="
                  driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool
                "
                dense
                v-model="
                  driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals
                "
                label="Rate"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="driversOfChangeAndVulnerabilityOfOthersBool"
                label="(5.11.5) Drivers of Change and Vulnerability of: Others"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row v-if="driversOfChangeAndVulnerabilityOfOthersBool">
            <v-col cols="12">
              <div
                v-for="(
                  item, index
                ) in driversOfChangeAndVulnerabilityOfOthersList"
                :key="index"
              >
                <v-row class="d-flex align-baseline">
                  <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      class="mr-4"
                      dense
                      clearable
                      v-model="item.effectsOrImpact"
                      label="Effect or Impact"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="2">
                    <v-select
                      :items="fivePointScale"
                      dense
                      v-model="item.rate"
                      label="Rate"
                    ></v-select>
                  </v-col>
                  <v-col v-if="index !== 0" cols="12" sm="1">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          @click="
                            removeDriversOfChangeAndVulnerabilityOfOthers(index)
                          "
                          color="primary"
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-cancel
                        </v-icon>
                      </template>
                      <span>Remove</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </div>
              <br />
              <v-btn
                @click="adddriversOfChangeAndVulnerabilityOfOthers()"
                color="primary"
                small
                outlined
              >
                ADD
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 6 Farmer's Adaptation Practices -->

      <h3>VI. FARMER'S ADAPTATION PRACTICES</h3>

      <br />

      <div>
        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
            (6.1) Made adjustments in Livelihood in Response to the Perceived
            Changes in Rainfall and Temperature over the last 10 years:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="
                madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years
              "
              :label="
                madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years
                  ? 'Yes'
                  : 'No'
              "
            ></v-switch>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AddBeneficiaryView',

  data: () => ({
    // 0. General Info - data variables
    surveyNo: null,
    date: null,
    interviewStart: null,
    interviewEnd: null,
    nameOfInterviewer: null,

    // 0. General Info - UI variables
    dateMenu: false,
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    sourceOfInformationOptions: [
      'TV',
      'Radio',
      'Internet',
      'Flyers',
      'Social Media',
      'Newspaper',
      'Agricultural Technicians (LGU)',
      'Seed Companies',
      'Traders',
      `Cooperatives and Farmers' Association`,
      'Co-Farmers',
      'Brgy. Officials',
      'Friends and Relatives',
      'Agrichemical Suppliers',
      'Others',
    ],
    generalThreeChoice: ['Yes', 'No', `I don't know`],
    fivePointScale: [
      '1 - Very Severe [Disastrous]',
      '2 - Severe [Critical]',
      '3 - Significant',
      '4 - Somewhat Significant',
      '5 - Irrelevant',
    ],

    // 1. Farmer's Basic Information - data variables
    regionOrProvince: null,
    cityOrMunicipality: null,
    barangay: null,
    nameOfFarmer: null,
    contactNo: null,
    farmersCodeNo: null,

    // 2. Socio-demographic Information - data variables
    age: null,
    gender: null,
    civilStatus: null,
    religion: null,
    belongingTo: null,
    belongingToSpecify: null,
    householdMembers: [
      {
        name: null,
        age: null,
        gender: null,
        relationToTheRespondent: null,
      },
    ],
    yearsOfFarmingExperience: null,
    highestEducationalAttainment: null,
    highestEducationalAttainmentSpecify: null,
    languagesOrDialectsSpoken: null,
    mainSourceOfIncome: null,
    mainSourceOfIncomeSpecify: null,
    otherSourcesOfIncome: [],
    otherSourcesOfIncomeRegularJobSpecify: null,
    otherSourcesOfIncomeOwnBusinessSpecify: null,
    otherSourcesOfIncomeOthersSpecify: null,
    averageGrossMonthlyIncomeOfHousehold: null,
    averageGrossMonthlyFarmIncome: null,
    membershipInAFarmerGroupOrAssociationOrOrganization: false,
    membershipInAFarmerGroupOrAssociationOrOrganizationSpecify: null,
    enrolledInRegistrySystemForBasicSectorsInAgriculture: false,

    // 2. Socio-demographic Information - UI variables
    genderOptions: ['Female', 'Male', 'LGBTQ+', 'Prefer not to say'],
    civilStatusOptions: ['Single', 'Married', 'Widow/Widower', 'Separated'],
    belongingToOptions: [
      'Senior Citizen',
      'Person with Disability',
      'Indigenous People',
      '4Ps beneficiary (including household members)',
    ],
    highestEducationalAttainmentOptions: [
      'Elementary Graduate',
      'High School Graduate',
      'College Graduate',
      'Vocational Course Graduate',
      'Others',
    ],
    mainSourceOfIncomeOptions: [
      'Farming',
      'Trading',
      'Housekeeping',
      'Regular Job',
      'Non-farm Work (Seasonal/Contractual, e.g. Construction)',
      'Own Business',
      'OFW Remittances',
      'Others',
    ],
    otherSourcesOfIncomeOptions: [
      {
        id: 'Farming',
        selected: false,
      },
      {
        id: 'Trading',
        selected: false,
      },
      {
        id: 'Housekeeping',
        selected: false,
      },
      {
        id: 'Regular Job',
        selected: false,
      },
      {
        id: 'Non-farm Work',
        selected: false,
      },
      {
        id: 'Own Business',
        selected: false,
      },
      {
        id: 'OFW Remittances',
        selected: false,
      },
      {
        id: 'Others',
        selected: false,
      },
    ],
    averageGrossMonthlyIncomeOfHouseholdOptions: [
      '≤ 10,000',
      '10,001 - 20,000',
      '20,001 - 30,000',
      '30,001 - 40,000',
      '40,001 - 50,000',
      '50,001 - 60,000',
      '> 60,000',
    ],
    averageGrossMonthlyFarmIncomeOptions: [
      '≤ 10,000',
      '10,001 - 20,000',
      '20,001 - 30,000',
      '30,001 - 40,000',
      '40,001 - 50,000',
      '50,001 - 60,000',
      '> 60,000',
    ],

    // 3. Farm Description - data variables
    totalAreaOfAgriculturalLand: null,
    totalAreaOfForestryLand: null,
    totalCultivatedArea: null,
    distanceFromHomeToFarm: null,
    distanceFromLandToWaterSource: null,
    distanceFromMarketNearestPavedRoad: null,
    distanceFromMarketOrTradingPost: null,
    irrigationSource: null,
    irrigationSourceOthersSpecify: null,
    monthsWithoutRain: [],
    positionInTheLandscape: null,
    locationOfFarm: null,
    landTenure: null,
    tenancy: null,
    landHolding: null,

    // 3. Farm Description - UI variables
    irrigationSourceOptions: [
      'NIA (National Irrigation Administration)',
      `CIA (Communal Irrigator's Association)`,
      'Spring',
      'SWIP (Small Wter Impounding Projects)',
      'STW (Shallow Tube Well)',
      'SFR (Small Farm Reservoir)',
      'Rainfall',
      'Electric Pump',
      'Diversion of Water from Dams',
      'Others',
    ],
    positionInTheLandscapeOptions: [
      'Top slope',
      'Middle slope',
      'Bottom slope',
    ],
    locationOfFarmOptions: ['Lowland', 'Upland', 'Coastal'],
    landTenureOptions: ['Private Ownership', 'Tenancy', 'State ownership'],
    tenancyOptions: ['Cash tenancy', 'Labor tenancy', 'Share Cropping'],
    landHoldingOptions: [
      'Small, fragmented (<1 ha)',
      'Small, sometimes fragmented (1-2 ha)',
      'Large, consolidated (>2 ha)',
    ],

    // 4. Farm Activities - data variables
    agriculturalActivities: [],
    agriBasedProductDevelopmentSpecify: null,
    cropsProduced: null,
    landAreaDevotedForCropProduction: null,
    livestockRaisedOrProduced: null,
    landAreaDevotedForLivestockProduction: null,
    speciesGrownForAquaculture: null,
    landAreaDevotedForAquaculture: null,
    sourceOfWaterForAquaculture: null,
    croppingPattern: null,
    croppingPatternSpecify: null,
    estimatedGrossIncomePerCroppingFirstCropping: null,
    estimatedGrossIncomePerCroppingSecondCropping: null,
    cropCalendarCrop1LandPreparation: [],
    cropCalendarCrop1Planting: [],
    cropCalendarCrop1Growing: [],
    cropCalendarCrop1Harvesting: [],
    cropCalendarCrop2LandPreparation: [],
    cropCalendarCrop2Planting: [],
    cropCalendarCrop2Growing: [],
    cropCalendarCrop2Harvesting: [],

    // 4. Farm Activities - UI variables
    agriculturalActivitiesOptions: [
      {
        id: 'Crop Production',
        selected: false,
      },
      {
        id: 'Livestock Production',
        selected: false,
      },
      {
        id: 'Aquaculture',
        selected: false,
      },
      {
        id: 'Agri-based Product Development',
        selected: false,
      },
    ],
    croppingPatternOptions: [
      'Monocropping',
      'Crop Rotation',
      'Inter-cropping',
      'Others',
    ],
    addCrop2: false,

    // 5. Technical Knowledge/Perception of Climate Change and Its Impacts - data variables
    attendedAgriculturalRelatedTrainings: false,
    totalNumberOfTrainingsAttended: null,
    sourceOfInformationRelatedToImprovingAgriculturalProduction: [],
    sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify: null,
    sourceOfInformationRelatedToImprovingAgriculturalProductProcessing: [],
    sourceOfInformationRelatedToImprovingAgriculturalProductProcessingSpecify:
      null,
    sourceOfClimateAndWeatherInformation: [],
    sourceOfClimateAndWeatherInformationSpecify: null,
    observedAnyLongTermChangesInClimate: null,
    longtermChangesInClimateForTemperature: false,
    longtermChangesInClimateForAmountOfRainfaill: false,
    longtermChangesInClimateForRainfallTiming: false,
    longtermChangesInClimateForRainfulIntensity: false,
    longtermChangesInClimateForRainfallDuration: false,
    longtermChangesInClimateForNumberOfWeatherEvents: false,
    longtermChangesInClimateForNumberOfHotDays: false,
    longtermChangesInClimateForNumberOfRainyDays: false,
    longtermChangesInClimateForOccurenceOfPestsAndDiseasesInCrops: false,
    longtermChangesInClimateForOccurenceOfPestsAndDiseasesInLivestock: false,
    observedAnyChangeInTheOnsetOfDrySeason: null,
    observedAnyChangeInTheOnsetOfWetSeason: null,
    descriptionOfChangeInTemperature: null,
    descriptionOfChangeInRainfallDuration: null,
    descriptionOfChangeInRainfallTiming: null,
    descriptionOfChangeInRainfallIntensity: null,
    descriptionOfChangeInNumberOfWeatherEvents: null,
    perceivedEffectsOrImpactsOfChangeInTimingOfRains: null,
    perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason:
      null,
    perceivedEffectsOrImpactsOfReducedCroppingSeason: null,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure: null,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions:
      null,
    perceivedEffectsOrImpactsOfPostharvestLosses: null,
    perceivedEffectsOrImpactsOfPestInvasion: null,
    perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases: null,
    perceivedEffectsOrImpactsOfPovertyAndFoodShortages: null,
    perceivedEffectsOrImpactsOfLackOfPotableWater: null,
    perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater: null,
    perceivedEffectsOrImpactsOfErosions: null,
    perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife: null,
    perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties: null,
    perceivedEffectsOrImpactsOfDeathOfLivestock: null,
    perceivedEffectsOrImpactsOfDecreasedLivestockProduction: null,
    perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing: null,
    perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes: null,
    perceivedEffectsOrImpactsOfRuralUrbanMigration: null,
    perceivedEffectsOrImpactsOfSiltationOfWaterBodies: null,
    perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover: null,
    perceivedEffectsOrImpactsOfOthers: null,
    observedMainOpportunitiesOfLongTermChangesInClimate: null,
    driversOfChangeAndVulnerabilityOfLandDegredation: null,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices: null,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices: null,
    driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals:
      null,
    driversOfChangeAndVulnerabilityOfOthers: null,

    // 5. Technical Knowledge/Perception of Climate Change and Its Impacts - UI variables
    descriptionOfChangesInClimateOptions: [
      'Extreme',
      'Many',
      'Limited',
      'Very Limited/Few',
    ],
    perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool: false,
    perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool: false,
    perceivedEffectsOrImpactsOfReducedCroppingSeasonBool: false,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool: false,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool: false,
    perceivedEffectsOrImpactsOfPostharvestLossesBool: false,
    perceivedEffectsOrImpactsOfPestInvasionBool: false,
    perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool: false,
    perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool: false,
    perceivedEffectsOrImpactsOfLackOfPotableWaterBool: false,
    perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool: false,
    perceivedEffectsOrImpactsOfErosionsBool: false,
    perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool: false,
    perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool: false,
    perceivedEffectsOrImpactsOfDeathOfLivestockBool: false,
    perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool: false,
    perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool: false,
    perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool: false,
    perceivedEffectsOrImpactsOfRuralUrbanMigrationBool: false,
    perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool: false,
    perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool: false,
    perceivedEffectsOrImpactsOfOthersBool: false,
    perceivedEffectsOrImpactsOfOthersList: [
      {
        effectsOrImpact: null,
        rate: null,
      },
    ],
    driversOfChangeAndVulnerabilityOfLandDegredationBool: false,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool: false,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool: false,
    driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool: false,
    driversOfChangeAndVulnerabilityOfOthersBool: false,
    driversOfChangeAndVulnerabilityOfOthersList: [
      {
        effectsOrImpact: null,
        rate: null,
      },
    ],

    // 6. Farmer's Adaptation Practices - Data variables
    madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years:
      null,
    changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall:
      null,
    additionalAdaptationMeasuresBeingConsideredInTheFuture: null,
    receivedAnyExternalSupportForAdaptationMeasures: null,
    formOfFinancialSupportReceived: null,
    formOfMaterialSupportReceived: null,
    formOfExtensionServicesSupportReceived: null,
    FarmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived: null,
    formOfInfrastructureSupportReceived: null,
    formOfOtherSupportReceived: null,
    mostBeneficialSupportServices: null,
    lowEducationLevelConstraint: null,
    limitedAccessToInformationConstraint: null,
    lackOfExtensionServicesConstraint: null,
    craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint: null,
    inadequateCapitalConstraint: null,
    noAccessToWaterForIrrigationConstraint: null,
    noAccessToCreditConstraintConstraint: null,
    longerTimeRequiredToSeeResultsConstraint: null,
    oldAgeConstraint: null,
    landTenureOrLandOwnershipIssuesConstraint: null,
    landTopographyNotSuitableConstraint: null,
    laborIntensiveOrNonAvailabilityOfLaborConstraint: null,
    infertileSoilConstraint: null,
    OtherConstraint: null,

    // 6. Farmer's Adaptation Practices - UI variables
  }),

  methods: {
    addAgriculturalActivities(agriculturalActivities, index) {
      if (agriculturalActivities.selected)
        this.agriculturalActivities.push(agriculturalActivities)
      else {
        this.agriculturalActivities.splice(index, 1)

        if (agriculturalActivities.id === 'Crop Production') {
          this.cropsProduced = null
          this.landAreaDevotedForCropProduction = null
        } else if (agriculturalActivities.id === 'Livestock Production') {
          this.livestockRaisedOrProduced = null
          this.landAreaDevotedForLivestockProduction = null
        } else if (agriculturalActivities.id === 'Aquaculture') {
          this.speciesGrownForAquaculture = null
          this.landAreaDevotedForAquaculture = null
          this.sourceOfWaterForAquaculture = null
        } else if (
          agriculturalActivities.id === 'Agri-based Product Development'
        ) {
          this.agriBasedProductDevelopmentSpecify = null
        }
      }
    },

    addHouseholdMember() {
      this.householdMembers.push({
        name: null,
        age: null,
        gender: null,
        relationToTheRespondent: null,
      })
    },

    addPerceivedEffectsOrImpactsOfOthers() {
      this.perceivedEffectsOrImpactsOfOthersList.push({
        effectsOrImpact: null,
        rate: null,
      })
    },

    adddriversOfChangeAndVulnerabilityOfOthers() {
      this.driversOfChangeAndVulnerabilityOfOthersList.push({
        effectsOrImpact: null,
        rate: null,
      })
    },

    addOtherSourceOfIncome(otherSourceOfIncome, index) {
      if (otherSourceOfIncome.selected)
        this.otherSourcesOfIncome.push(otherSourceOfIncome)
      else {
        this.otherSourcesOfIncome.splice(index, 1)

        if (otherSourceOfIncome.id === 'Regular Job') {
          this.otherSourcesOfIncomeRegularJobSpecify = null
        } else if (otherSourceOfIncome.id === 'Own Business') {
          this.otherSourcesOfIncomeOwnBusinessSpecify = null
        } else if (otherSourceOfIncome.id === 'Others') {
          this.otherSourcesOfIncomeOthersSpecify = null
        }
      }
    },

    addSourceOfInformationRelatedToImprovingAgriculturalProduction(
      source,
      index
    ) {
      if (source.selected) {
        this.sourceOfInformationRelatedToImprovingAgriculturalProduction.push(
          source
        )
      } else {
        this.sourceOfInformationRelatedToImprovingAgriculturalProduction(
          index,
          1
        )

        if (source.id === 'Others') {
          this.sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify =
            null
        }
      }
    },

    removeHouseholdMember(index) {
      this.householdMembers.splice(index, 1)
    },

    removePerceivedEffectsOrImpactsOfOthers(index) {
      this.perceivedEffectsOrImpactsOfOthersList.splice(index, 1)
    },

    removeDriversOfChangeAndVulnerabilityOfOthers(index) {
      this.driversOfChangeAndVulnerabilityOfOthersList.splice(index, 1)
    },
  },

  watch: {
    croppingPattern() {
      if (this.croppingPattern !== 'Others') this.croppingPatternSpecify = null
    },

    irrigationSource() {
      if (this.irrigationSource !== 'Others')
        this.irrigationSourceOthersSpecify = null
    },

    addCrop2() {
      if (!this.addCrop2) {
        this.cropCalendarCrop2LandPreparation = []
        this.cropCalendarCrop2Planting = []
        this.cropCalendarCrop2Growing = []
        this.cropCalendarCrop2Harvesting = []
      }
    },

    mainSourceOfIncome() {
      if (
        this.mainSourceOfIncome === 'Regular Job' ||
        this.mainSourceOfIncome === 'Own Business' ||
        this.mainSourceOfIncome === 'Others'
      ) {
        this.mainSourceOfIncomeSpecify = null
      }
    },

    sourceOfInformationRelatedToImprovingAgriculturalProduction() {
      if (
        !this.sourceOfInformationRelatedToImprovingAgriculturalProduction.includes(
          'Others'
        )
      )
        this.sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify =
          null
    },

    sourceOfInformationRelatedToImprovingAgriculturalProductProcessing() {
      if (
        !this.sourceOfInformationRelatedToImprovingAgriculturalProductProcessing.includes(
          'Others'
        )
      )
        this.sourceOfInformationRelatedToImprovingAgriculturalProductProcessingSpecify =
          null
    },

    sourceOfClimateAndWeatherInformation() {
      if (!this.sourceOfClimateAndWeatherInformation.includes('Others')) {
        this.sourceOfClimateAndWeatherInformationSpecify = null
      }
    },

    perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool() {
      this.perceivedEffectsOrImpactsOfChangeInTimingOfRains = null
    },

    perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool() {
      this.perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason =
        null
    },

    perceivedEffectsOrImpactsOfReducedCroppingSeasonBool() {
      this.perceivedEffectsOrImpactsOfReducedCroppingSeason = null
    },

    perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool() {
      this.perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure =
        null
    },

    perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool() {
      this.perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions =
        null
    },

    perceivedEffectsOrImpactsOfPostharvestLossesBool() {
      this.perceivedEffectsOrImpactsOfPostharvestLosses = null
    },

    perceivedEffectsOrImpactsOfPestInvasionBool() {
      this.perceivedEffectsOrImpactsOfPestInvasion = null
    },

    perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool() {
      this.perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases = null
    },

    perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool() {
      this.perceivedEffectsOrImpactsOfPovertyAndFoodShortages = null
    },

    perceivedEffectsOrImpactsOfLackOfPotableWaterBool() {
      this.perceivedEffectsOrImpactsOfLackOfPotableWater = null
    },

    perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool() {
      this.perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater = null
    },

    perceivedEffectsOrImpactsOfErosionsBool() {
      this.perceivedEffectsOrImpactsOfErosions = null
    },

    perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool() {
      this.perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife = null
    },

    perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool() {
      this.perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties =
        null
    },

    perceivedEffectsOrImpactsOfDeathOfLivestockBool() {
      this.perceivedEffectsOrImpactsOfDeathOfLivestock = null
    },

    perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool() {
      this.perceivedEffectsOrImpactsOfDecreasedLivestockProduction = null
    },

    perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool() {
      this.perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing = null
    },

    perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool() {
      this.perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes = null
    },

    perceivedEffectsOrImpactsOfRuralUrbanMigrationBool() {
      this.perceivedEffectsOrImpactsOfRuralUrbanMigration = null
    },

    perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool() {
      this.perceivedEffectsOrImpactsOfSiltationOfWaterBodies = null
    },

    perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool() {
      this.perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover = null
    },

    perceivedEffectsOrImpactsOfOthersBool() {
      this.perceivedEffectsOrImpactsOfOthers = null
      this.perceivedEffectsOrImpactsOfOthersList = [
        {
          effectsOrImpact: null,
          rate: null,
        },
      ]
    },

    driversOfChangeAndVulnerabilityOfOthersBool() {
      this.driversOfChangeAndVulnerabilityOfOthers = null
      this.driversOfChangeAndVulnerabilityOfOthersList = [
        {
          effectsOrImpact: null,
          rate: null,
        },
      ]
    },

    perceivedEffectsOrImpactsOfOthersList() {
      this.perceivedEffectsOrImpactsOfOthers =
        this.perceivedEffectsOrImpactsOfOthersList
    },

    driversOfChangeAndVulnerabilityOfOthersList() {
      this.driversOfChangeAndVulnerabilityOfOthers =
        this.driversOfChangeAndVulnerabilityOfOthersList
    },

    driversOfChangeAndVulnerabilityOfLandDegredationBool() {
      this.driversOfChangeAndVulnerabilityOfLandDegredation = null
    },
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool() {
      this.driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices =
        null
    },
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool() {
      this.driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices =
        null
    },
    driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool() {
      this.driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals =
        null
    },
  },
}
</script>

<style scoped>
.small-number-input {
  width: 70px;
}
.long-input {
  width: 200px;
}

.middle-length-select {
  width: 200px;
}
</style>
