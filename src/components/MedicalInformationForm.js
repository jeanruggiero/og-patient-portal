import React, {useState} from "react";
import {Box} from "@material-ui/core";
import IntakeFormHeader from "./IntakeFormHeader";
import FormDescription from "./FormDescription";
import FormSection from "./FormSection";
import Field from "./FormFields/Field";
import SelectGroup from "./FormFields/SelectGroup";
import DetailSelectGroup from "./FormFields/DetailSelectGroup";
import DateField from "./FormFields/DateField";
import RadioControl from "./FormFields/RadioControl";
import ListControl from "./FormFields/ListControl";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import YesNoField from "./FormFields/YesNoField";
import FormInstruction from "./FormFields/FormInstruction";
import SubmitButton from "./FormFields/SubmitButton";
import CheckBoxControl from "./FormFields/CheckBoxControl";

function MedicalInformationForm() {

  const [state, setState] = useState({});
  const [formValid, setFormValid] = useState(true);

  console.log(state);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const form = {
    valid: formValid,
    onChange: handleChange
  };

  const pregnantField = !state['pregnantNursing'] ? null : (
    <Field label="Comments/Details"
           name="pregnantDetails"
           form={form}
    />
  );

  const supplementField = !state['nutritionalSupplements'] ? null : (
    <Field label="Please list supplements"
           name="supplementDetails"
           form={form}
    />
  );

  const dietField = !state['specialDiet'] ? null : (
    <Field label="Diet"
           name="dietDetails"
           form={form}
    />
  );

  const computerFields = !state['usesComputer'] ? null : (
    <Box>
      <Field label="Hours per Day"
             name="computerTime"
             form={form}
             required
      />

      <Field label="Distance from Screen"
             name="distanceFromScreen"
             form={form}
             required
      />
    </Box>
  );

  const drivingFields = !state['drives'] ? null : (
    <Box>
      <Field label="Miles per Day"
             name="drivingDistance"
             form={form}
             required
      />

      <YesNoField label="Do you have visual difficulty while driving?"
                  name="visualDifficultyDriving"
                  form={form}
                  required
      />
    </Box>
  );

  const tobaccoFields = !state['usesTobacco'] ? null : (
    <Box>
      <CheckBoxControl label="How do you use tobacco?"
                       name="tobaccoUseMethods"
                       options={["Smoking", "Chewing"]}
                       form={form}
                       required
      />

      <RadioControl label="How often do you use tobacco?"
                    name="tobaccoFrequency"
                    options={["Occasionally", "Half pack per day","1 pack per day", "1+ packs per day"]}
                    form={form}
                    required
      />

      <YesNoField label="Have you participated in tobacco use cessation intervention/counseling?"
                  name="tobaccoCounseling"
                  form={form}
                  required
      />
    </Box>
  );


  const glassesFields = !state['wearsGlasses'] ? null : (
    <Box>
      <Field label="Since"
             name="glassesSince"
             form={form}
             required
      />

      <RadioControl label="How often do you wear glasses?"
                    name="glassesFrequency"
                    options={["Full Time", "Part Time"]}
                    form={form}
                    required
      />

      <RadioControl label="In what situations do you wear glasses?"
                    name="glassesSituations"
                    options={["Seeing near", "Seeing far"]}
                    form={form}
                    required
      />

      <SelectGroup label="Which type(s) of glasses do you own? (Select all that apply)"
                   name="glassesTypes"
                   options={["Single Vision", "Bifocals", "Trifocals", "Back-up Glasses", "Safety Glasses", "Sports Glasses", "Progressive", "Computer"]}
                   form={form}
      />

      <CheckBoxControl label="What special eyewear needs do you have?"
                       name="specialEyewearNeeds"
                       options={[
                         "Computer (special prescriptions, special anti-glare tints or coatings)",
                         "Occupational (mechanics, plumbers, pilots)",
                         "Safety Glasses (gardening, woodworking, welding)",
                         "Sports/Hobbies (racquet sports, motorcycle)",
                         "Music",
                         "Other"
                       ]}
                       form={form}

      />

      <YesNoField label="Are there activities in your life that would be easier without glasses?"
                  name="activitiesEasierWithoutGlasses"
                  form={form}
      />

    </Box>
  );

  const troubleGlassesPastFields = !state['troubleGlassesPast'] ? null : (
    <Field label="Please Explain"
           name="troubleGlassesPastDetails"
           form={form}
    />
  );

  const sunglassesFields = !state['wearsSunglasses'] ? null : (
    <YesNoField label="Are your sunglasses your current prescription?"
                name="sunglassesCurrentPrescription"
                form={form}
    />
  );

  const contactsFields = !state['wearsContacts'] ? null : (
    <Box>
      <Field label="Since"
             name="contactsSince"
             form={form}
             required
      />

      <Field label="Type of Contact Lenses"
             name="typeContacts"
             form={form}
             required
      />

      <Field label="Brand of Contact Lenses"
             name="brandContacts"
             form={form}
             required
      />

      <FormInstruction>How often do you wear your contact lenses?</FormInstruction>

      <Box>
        <Field label="Hours/Day"
               name="contactsHoursPerDay"
               form={form}
               required
        />

        <Field label="Days/Week"
               name="contactsDaysPerWeek"
               form={form}
               required
        />

        <Field label="Today's wearing time (hours)"
               name="todayWearingTime"
               form={form}
               required
        />
      </Box>

      <FormInstruction>How long do you wear your contact lenses before replacing them?</FormInstruction>
      <Field label="Days"
             name="contactsReplacementDays"
             form={form}
             required
      />

      <FormInstruction>Please rate the following on a scale from 1 (POOR) to 10 (EXCELLENT):</FormInstruction>

      <Box>
        <Box component="span">
          <FormInstruction>Lens Comfort</FormInstruction>

          <Field label="Left"
                 name="lensComfortLeft"
                 form={form}
                 required
          />

          <Field label="Right"
                 name="lensComfortRight"
                 form={form}
                 required
          />

        </Box>

        <Box component="span">
          <FormInstruction>Distance Vision</FormInstruction>

          <Field label="Left"
                 name="distanceVisionLeft"
                 form={form}
                 required
          />

          <Field label="Right"
                 name="distanceVisionRight"
                 form={form}
                 required
          />
        </Box>

        <Box component="span">
          <FormInstruction>Near Vision</FormInstruction>

          <Field label="Left"
                 name="nearVisionLeft"
                 form={form}
                 required
          />

          <Field label="Right"
                 name="nearVisionRight"
                 form={form}
                 required
          />
        </Box>
      </Box>

      <FormInstruction>Do you have any symptoms related to your contact lenses?</FormInstruction>

      <Field label="Visual Symptoms"
             name="contactsVisualSymptoms"
             form={form}
      />

      <Field label="Comfort Symptoms"
             name="contactsComfortSymptoms"
             form={form}
      />

      <Field label="Other Symptoms"
             name="contactsOtherSymptoms"
             form={form}
      />

      <FormInstruction>What contact lens solutions do you use?</FormInstruction>

      <Field label="Cleaner"
             name="contactsCleaner"
             form={form}
             required
      />

      <Field label="Rinse"
             name="contactsRinse"
             form={form}
             required
      />

      <Field label="Disinfectant"
             name="contactsDisinfectant"
             form={form}
             required
      />

      <Field label="Enzyme"
             name="contactsEnzyme"
             form={form}
             required
      />

      <Field label="Drops"
             name="contactsDrops"
             form={form}
             required
      />

      <Field label="Other"
             name="contactsSolutionOther"
             form={form}
             required
      />
    </Box>
  );

  const pastContactsFields = !state['woreContactsPast'] ? null : (
    <Field label="Reason for Stopping"
           name="reasonStoppingContacts"
           form={form}
           required
    />
  );


  const handleSubmit = (event) => {
    //console.log(state);

    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      setFormValid(false);
      return;
    }

    console.log("form valid");
  };


  return (
    <Box>
      <IntakeFormHeader subheader="Medical Information"/>
      <FormDescription/>

      <form>
        <FormSection label="Current Symptoms & Conditions">
          <Field label="Primary Reason for Appointment"
                 name="reasonForAppointment"
                 form={form}
                 width={700}
                 required/>

          <DetailSelectGroup label="Eye Symptoms & Conditions (Select all that apply)"
                             name="eyeSymptomsConditions"
                             options={
                               ["Glaucoma", "Cataract", "Macular Degeneration", "Retinal Detachment", "Color Blindness",
                                 "Headaches", "Glare/Light Sensitivity", "Tired Eyes", "Amblyopia (Lazy Eye)",
                                 "Burning", "Dryness", "Excess Tearing/Watering", "Eye Pain/Soreness",
                                 "Foreign Body Sensation", "Infection of Eye/Lid", "Itching", "Mucous Discharge",
                                 "Ptosis (Drooping Eyelid)", "Redness", "Sandy/Gritty Feeling", "Crossed Eyes",
                                 "Blurred Vision (Distance)", "Blurred Vision (Near)", "Distorted Vision", "Double Vision",
                                 "Floaters or Spots in Vision", "Fluctuating Vision", "Loss of Vision", "Loss of Side Vision",
                                 "Sick While Reading in Car", "Vision Training/Patching"]
                             }
                             form={form}
          />

          <Field label="Other"
                 name="otherEyeSymptomsConditions"
                 form={form}
                 width={500}/>


          <SelectGroup label="General Symptoms (Select all that apply)"
                       name="generalSymptomsConditions"
                       options={
                         ["Fever", "Weight Loss", "Other Constitutional Symptoms", "Ears, Nose, Throat, Sinus",
                           "Cardiovascular (Heart, vessels, etc.)", "Respiratory (Asthma, emphysema, etc.)",
                           "Gastrointestinal", "Genital, Kidney, Bladder, STDs",
                           "Muscles, Bones, Joints (Arthritis, etc.)", "Skin (Acne, warts, skin cancer, etc.)",
                           "Neurological (Multiple Sclerosis, etc.)",
                           "Psychiatric (Anxiety, depression, insomnia)",
                           "Endocrine (Diabetes, hypothyroid, etc.)",
                           "Blood/Lymph (cholesterol, anemia, etc.)",
                           "Allergic/Immunologic (Hay fever, lupus, etc.)"

                         ]}
                       form={form}
          />

        </FormSection>

        <FormSection label="General Health Information">

          <DateField label="Date of Last Health Exam"
                     name="dateLastHealthExam"
                     form={form}
          />

          <DateField label="Date of Last Eye Exam"
                     name="dateLastEyeExam"
                     form={form}
          />

          <DateField label="Date of Last Dilation"
                     name="dateLastDilation"
                     form={form}
          />

          <Box display="flex">
            <Box component="span">
              <FormInstruction>Height:</FormInstruction>

              <Field label="Feet"
                     name="heightFeet"
                     form={form}
                     width={55}/>

              <Field label="Inches"
                     name="heightInches"
                     form={form}
                     width={55}/>
            </Box>

            <Box component="span" pl={2}>
              <FormInstruction>Weight:</FormInstruction>
              <Field label="Pounds"
                     name="weight"
                     form={form}
                     width={55}/>
            </Box>
          </Box>

          <RadioControl label="Are you pregnant or nursing?"
                        name="pregnantNursing"
                        options={["Pregnant", "Nursing"]}
                        form={form}
          />

          {pregnantField}

          <ListControl label="General Illness & Surgeries:"
                       name="generalIllnessSurgeries"
                       form={form}
                       field={<Field label="Description" width={600}/>}
          />

          <ListControl label="Eye Surgeries & Injuries:"
                       name="eyeSurgeriesInjuries"
                       form={form}
                       field={
                         <Box>
                           <Field label="Description" width={200}/>
                           <DateField label="Date"/>
                           <Field label="Surgeon"/>
                         </Box>
                       }
          />

          <ListControl label="Current Medications:"
                       name="currentMedications"
                       form={form}
                       field={
                         <Box>
                           <Field label="Medication" width={200}/>
                           <Field label="Reason for Taking" width={400}/>
                         </Box>
                       }
          />

          <ListControl label="Current Eye Drops"
                       name="currentEyeDrops"
                       form={form}
                       field={
                         <Box>
                           <Field label="Type/Brand" width={250}/>
                           <Field label="How Often?" width={250}/>

                           <FormControl component="fieldset">
                             <FormGroup>
                               <FormControlLabel control={<Checkbox/>}
                                                 label="Left Eye"
                                                 style={{marginBottom: -10, marginTop: -8}}
                               />

                               <FormControlLabel control={<Checkbox/>}
                                                 label="Right Eye"
                                                 style={{marginBottom: -10, marginTop: -8}}
                               />
                             </FormGroup>
                           </FormControl>
                         </Box>
                       }
          />

          <ListControl label="Medication Allergies:"
                       name="medicationAllergies"
                       form={form}
                       field={
                         <Box>
                           <Field label="Medication"
                                  width={200}
                           />

                           <Field label="Symptoms of Reaction"
                                  width={300}
                           />
                         </Box>
                       }
          />

          <ListControl label="Other Allergies:"
                       name="otherAllergies"
                       form={form}
                       field={
                         <Box>
                           <Field label="Allergic To" width={200}/>
                           <Field label="Symptoms of Reaction" width={300}/>
                         </Box>
                       }
          />

          <YesNoField label="Do you use nutritional supplements?"
                      name="nutritionalSupplements"
                      form={form}
                      required
          />

          {supplementField}

          <YesNoField label="Are you following a special diet?"
                      name="specialDiet"
                      form={form}
                      required
          />

          {dietField}

        </FormSection>

        <FormSection label="Lifestyle">
          <Box>
            <Field label="Occupation"
                   name="occupation"
                   form={form}
                   width={200}
                   required
            />

            <Field label="Years"
                   name="occupationYears"
                   form={form}
                   width={60}
                   required
            />

            <Field label="Employer"
                   name="employer"
                   form={form}
                   width={300}
                   required
            />
          </Box>

          <YesNoField label="Do you use a computer?"
                      name="usesComputer"
                      form={form}
                      required
          />

          {computerFields}

          <YesNoField label="Do you drive?"
                      name="drives"
                      form={form}
                      required
          />

          {drivingFields}

          <YesNoField label="Do you exercise regularly?"
                      name="exercisesRegularly"
                      form={form}
                      required
          />

          <Field label="Hobbies/Interests"
                 name="hobbiesInterests"
                 form={form}
                 width={600}
          />

          <RadioControl label="How often do you consume alcohol?"
                        name="alcoholFrequency"
                        options={["Never", "Occasionally", "1 drink per day", "2-3 drinks per day", "4+ drinks per day"]}
                        form={form}
                        required
          />

          <YesNoField label="Do you use tobacco?"
                      name="usesTobacco"
                      form={form}
                      required/>

          {tobaccoFields}

          <YesNoField label="Do you use illegal drugs?"
                      name="usesIllegalDrugs"
                      form={form}
                      required/>

        </FormSection>

        <FormSection label="Vision Problems">

          <YesNoField label="Do you have glare problems?"
                      name="glareProblems"
                      form={form}
                      required
          />

          <YesNoField label="Do you have problems with night vision?"
                      name="nightVisionProblems"
                      form={form}
                      required
          />

        </FormSection>

        <FormSection label="Vision Correction">

          <SelectGroup label="Have you had any of the following vision correction procedures? (Select all that apply)"
                       name="visionCorrectionProcedures"
                       options={["RK", "PRK", "LASIK", "Other"]}
                       form={form}
          />

          <YesNoField label="Are you interested in learning about the latest advancements in LASIK vision correction?"
                      name="interestedLasik"
                      form={form}
                      required
          />

        </FormSection>

        <FormSection label="Eyewear">

          <YesNoField label="Do you currently wear glasses?"
                      name="wearsGlasses"
                      form={form}
                      required
          />

          {glassesFields}

          <YesNoField label="Have you had trouble with glasses in the past?"
                      name="troubleGlassesPast"
                      form={form}
                      required
          />

          {troubleGlassesPastFields}

          <YesNoField label="Do you wear sunglasses?"
                      name="wearsSunglasses"
                      form={form}
                      required
          />

          {sunglassesFields}

        </FormSection>

        <FormSection label="Contact Lenses">
          <YesNoField label="Do you currently wear contact lenses?"
                      name="wearsContacts"
                      form={form}
                      required
          />

          {contactsFields}

          <YesNoField label="Have you worn contact lenses in the past?"
                      name="woreContactsPast"
                      form={form}
                      required
          />

          {pastContactsFields}

        </FormSection>

        <SubmitButton onSubmit={handleSubmit} />
      </form>
    </Box>
  )
}

export default MedicalInformationForm;