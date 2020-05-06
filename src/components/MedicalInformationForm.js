import React, {useState} from "react";
import {Box} from "@material-ui/core";
import IntakeFormHeader from "./IntakeFormHeader";
import FormDescription from "./FormDescription";
import FormSection from "./FormSection";
import Field from "./FormFields/Field";
import SelectGroup from "./FormFields/SelectGroup";
import DetailSelectGroup from "./FormFields/DetailSelectGroup";
import DateField from "./FormFields/DateField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioControl from "./FormFields/RadioControl";
import ListControl from "./FormFields/ListControl";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import YesNoField from "./FormFields/YesNoField";

function MedicalInformationForm() {

  const [pregnantField, setPregnantField] = useState();
  const [supplementField, setSupplementField] = useState();
  const [dietField, setDietField] = useState();
  const [computerFields, setComputerFields] = useState([]);
  const [drivingFields, setDrivingFields] = useState([]);
  const [smokingFields, setSmokingFields] = useState([]);
  const [glassesFields, setGlassesFields] = useState([]);
  const [pastGlassesFields, setPastGlassesFields] = useState([]);
  const [sunglassesFields, setSunglassesFields] = useState([]);
  const [contactsFields, setContactsFields] = useState([]);
  const [pastContactsFields, setPastContactsFields] = useState([]);


  return (
    <Box>
      <IntakeFormHeader subheader="Medical Information"/>
      <FormDescription/>

      <FormSection label="Current Symptoms & Conditions">
        <Field label="Primary Reason for Appointment" width={700} required />

        <DetailSelectGroup label="Eye Symptoms & Conditions (Select all that apply)" options={
          ["Glaucoma", "Cataract", "Macular Degeneration", "Retinal Detachment", "Color Blindness",
            "Headaches", "Glare/Light Sensitivity", "Tired Eyes", "Amblyopia (Lazy Eye)",
            "Burning", "Dryness", "Excess Tearing/Watering", "Eye Pain/Soreness",
            "Foreign Body Sensation", "Infection of Eye/Lid", "Itching", "Mucous Discharge",
            "Ptosis (Drooping Eyelid)", "Redness", "Sandy/Gritty Feeling", "Crossed Eyes",
            "Blurred Vision (Distance)", "Blurred Vision (Near)", "Distorted Vision", "Double Vision",
            "Floaters or Spots in Vision", "Fluctuating Vision", "Loss of Vision", "Loss of Side Vision",
            "Sick While Reading in Car", "Vision Training/Patching"]
          }
        />

        <Field label="Other" width={500} />
        <Field label="Other" width={500} />
        <Field label="Other" width={500} />

        <SelectGroup label="General Symptoms (Select all that apply)" options={
          ["Fever", "Weight Loss", "Other Constitutional Symptoms", "Ears, Nose, Throat, Sinus",
            "Cardiovascular (Heart, vessels, etc.)", "Respiratory (Asthma, emphysema, etc.)",
            "Gastrointestinal", "Genital, Kidney, Bladder, STDs",
            "Muscles, Bones, Joints (Arthritis, etc.)", "Skin (Acne, warts, skin cancer, etc.)",
            "Neurological (Multiple Sclerosis, etc.)",
            "Psychiatric (Anxiety, depression, insomnia)",
            "Endocrine (Diabetes, hypothyroid, etc.)",
            "Blood/Lymph (cholesterol, anemia, etc.)",
            "Allergic/Immunologic (Hay fever, lupus, etc.)"

          ]}/>

      </FormSection>

      <FormSection label="General Health Information">
        <DateField label="Date of Last Health Exam"/>
        <DateField label="Date of Last Eye Exam"/>
        <DateField label="Date of Last Dilation"/>

        <Box display="flex">
          <Box component="span">
            <FormLabel style={{paddingBottom: 12, paddingLeft: 5, display: 'block'}}>Height:</FormLabel>
            <Field label="Feet" width={55} />
            <Field label="Inches" width={55} />
          </Box>

          <Box component="span" pl={2}>
            <FormLabel style={{paddingBottom: 12, paddingLeft: 5, display: 'block'}}>Weight:</FormLabel>
            <Field label="Pounds" width={55} />
          </Box>
        </Box>

        <RadioControl label="Are you pregnant or nursing?" options={["Pregnant", "Nursing"]} />

        {pregnantField}

        <ListControl label="General Ilness & Surgeries:" field={<Field label="Description" width={600} />} />

        <ListControl label="Eye Surgeries & Injuries:" field={
          <Box>
            <Field label="Description" width={200} />
            <DateField label="Date" />
            <Field label="Surgeon" />
          </Box>
        } />

        <ListControl label="Current Medications:" field={
          <Box>
            <Field label="Medication" width={200} />
            <Field label="Reason for Taking" width={400} />
          </Box>
        } />

        <ListControl label="Current Eye Drops" field={
          <Box>
            <Field label="Type/Brand" width={250} />
            <Field label="How Often?" width={250} />
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Left Eye" style={{marginBottom: -10, marginTop: -8}} />
                <FormControlLabel control={<Checkbox />} label="Right Eye" style={{marginBottom: -10, marginTop: -8}}/>
              </FormGroup>

            </FormControl>
          </Box>
        }/>

        <ListControl label="Medication Allergies:" field={
          <Box>
            <Field label="Medication" width={200}/>
            <Field label="Symptoms of Reaction" width={300}/>
          </Box>
        }/>

        <ListControl label="Other Allergies:" field={
          <Box>
            <Field label="Allergic To" width={200}/>
            <Field label="Symptoms of Reaction" width={300}/>
          </Box>
        }/>

        <YesNoField label="Do you use nutritional supplements?" required />

        {supplementField}

        <YesNoField label="Are you following a special diet?" required />

        {dietField}

      </FormSection>

      <FormSection>
        <Box>
          <Field label="Occupation" width={200} required/>
          <Field label="Years" width={60} required />
          <Field label="Employer" width={300} required />
        </Box>

        <YesNoField label="Do you use a computer?" required />

        {computerFields}

        <YesNoField label="Do you drive?" required />

        {drivingFields}

        <YesNoField label="Do you exercise regularly?" required/>

        <Field label="Hobbies/Interests" width={600}/>

        <RadioControl label="How often do you consume alcohol?"
                      options={["Never", "Occasionally", "1 drink per day", "2-3 drinks per day", "4+ drinks per day"]}
                      required />

        <YesNoField label="Do you smoke?" required/>

        {smokingFields}

        <YesNoField label="Do you use illegal drugs?" required />

      </FormSection>

      <FormSection label="Vision Problems">
        <YesNoField label="Do you have glare problems?" required/>
        <YesNoField label="Do you have problems with night vision?" required/>
      </FormSection>

      <FormSection label="Vision Correction">
        <SelectGroup label="Have you had any of the following vision correction procedures? (Select all that apply)"
                     options={["RK", "PRK", "LASIK", "Other"]} />

        <YesNoField label="Are you interested in learning about the latest advancements in LASIK vision correction?" required />
      </FormSection>

      <FormSection label="Eyewear">
        <YesNoField label="Do you currently wear glasses?" required/>
        {glassesFields}

        <YesNoField label="Have you worn glasses in the past?" required/>
        {pastGlassesFields}

        <YesNoField label="Do you wear sunglasses?" required />
        {sunglassesFields}

      </FormSection>

      <FormSection label="Contact Lenses">
        <YesNoField label="Do you currently wear contact lenses?" required/>
        {contactsFields}

        <YesNoField label="Have you worn contact lenses in the past?" required />
        {pastContactsFields}
      </FormSection>
    </Box>
  )

}

export default MedicalInformationForm;