import { doc1, doc7, doc16, doc17, doc2, doc3, doc4, doc5, doc6, doc8, doc9, doc10, doc11, doc12, doc13, doc14, doc15 } from '../../assets/images';

export interface Doctor {
  id: string;
  name: string;
  image: string;
  specialty: string;
  experience: string;
  about: string;
  fee: number;
  available: boolean;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Richard James",
    image: doc1,
    specialty: "General physician",
    experience: "4 Year",
    about: "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 60,
    available: true
  },
  {
    id: "2",
    name: "Dr. Emily Larson",
    image: doc2,
    specialty: "Gynecologist",
    experience: "3 Year",
    about: "Dr. Emily has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Emily has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 60,
    available: true
  },
  {
    id: "3",
    name: "Dr. Sarah Patel",
    image: doc3,
    specialty: "Dermatologist",
    experience: "1 Year",
    about: "Dr. Sarah has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Sarah has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 60,
    available: true
  },
  {
    id: "4",
    name: "Dr. Christopher Lee",
    image: doc4,
    specialty: "Pediatricians",
    experience: "2 Year",
    about: "Dr. Lee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Lee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 60,
    available: true
  },
   {
    id: "5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    specialty: "Neurologist",
    experience: "4 Year",
    about: "Dr. Jennifer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Jennifer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 50,
    available: true
  },
  {
    id: "6",
    name: "Dr. Andrew Williams",
    image: doc6,
    specialty: "Neurologist",
    experience: "4 Year",
    about: "Dr. Andrew has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Andrew has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 50,
    available: true
  },
  {
    id: "7",
    name: "Dr. Christopher Davis",
    image: doc7,
    specialty: "General physician",
    experience: "4 Year",
    about: "Dr. Christopher has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Christopher has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 50,
    available: true
  },
   {
    id: "8",
    name: "Dr. Timothy White",
    image: doc8,
    specialty: "Gynecologist",
    experience: "3 Year",
    about: "Dr. Timothy has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Timothy has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 60,
    available: true
  },
  {
    id: "9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    specialty: "Dermatologist",
    experience: "1 Year",
    about: "Dr. Ava has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Ava has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 30,
    available: true
  },
   {
    id: "10",
    name: "Dr. Jeffrey King",
    image: doc10,
    specialty: "Pediatricians",
    experience: "2 Year",
    about: "Dr. Jeffrey has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Jeffrey has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 40,
    available: true
  },
  {
    id: "11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    specialty: "Neurologist",
    experience: "4 Year",
    about: "Dr. Zoe has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Zoe has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 50,
    available: true
  },
  {
    id: "12",
    name: "Dr. Patrick Harris",
    image: doc12,
    specialty: "Neurologist",
    experience: "4 Year",
    about: "Dr. Patrick has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Patrick has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 50,
    available: true
  },
  {
    id: "13",
    name: "Dr. Chloe Evans",
    image: doc13,
    specialty: "Gastroenterologist",
    experience: "4 Year",
    about: "Dr. Chloe has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Chloe has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 38,
    available: true
  },
  {
    id: "14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    specialty: "Gynecologist",
    experience: "3 Year",
    about: "Dr. Ryan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Ryan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 60,
    available: true
  },
   {
    id: "15",
    name: "Dr. Amelia Hill",
    image: doc15,
    specialty: "Dermatologist",
    experience: "1 Year",
    about: "Dr. Amelia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Amelia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 30,
    available: true
  },
  {
    id: "16",
    name: "Dr. Rajesh Kumar",
    image: doc16,
    specialty: "General physician",
    experience: "8 Year",
    about: "Dr. Rajesh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Rajesh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 500,
    available: true
  },
  {
    id: "17",
    name: "Dr. Omm Ankit",
    image: doc17,
    specialty: "General physician",
    experience: "1 Year",
    about: "Dr. Omm has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Omm has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fee: 1000,
    available: true
  },
];