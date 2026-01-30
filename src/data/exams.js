export const EXAM_INSTRUCTIONS = [
  "Ensure you are ready before clicking Start Exam.",
  "The exam is timed. Timer starts immediately.",
  "Total number of questions and duration are shown before you begin.",
  "Read each question carefully before answering.",
  "Use Next and Previous buttons to navigate.",
  "Answers are automatically saved.",
  "Do not refresh or close the browser during the exam.",
  "If time expires, the exam will auto-submit.",
  "Once submitted, answers cannot be changed.",
  "Any form of malpractice may lead to disqualification.",
];

export const exams = [
  {
    id: "maths-001",
    subject: "Mathematics",
    questions: 50,
    duration: "1 Hour",
    durationInSeconds: 3600,
    status: "available",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "eng-002",
    subject: "English Language",
    questions: 40,
    duration: "45 Minutes",
    durationInSeconds: 2700,
    status: "available",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "phy-003",
    subject: "Physics",
    questions: 50,
    duration: "1 Hour",
    durationInSeconds: 3600,
    status: "ongoing",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "chem-004",
    subject: "Chemistry",
    questions: 50,
    duration: "1 Hour",
    durationInSeconds: 3600,
    status: "available",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "bio-005",
    subject: "Biology",
    questions: 45,
    duration: "50 Minutes",
    durationInSeconds: 3000,
    status: "available",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "geo-006",
    subject: "Geography",
    questions: 40,
    duration: "45 Minutes",
    durationInSeconds: 2700,
    status: "completed",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "gov-007",
    subject: "Government",
    questions: 40,
    duration: "45 Minutes",
    durationInSeconds: 2700,
    status: "available",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "eco-008",
    subject: "Economics",
    questions: 50,
    duration: "1 Hour",
    durationInSeconds: 3600,
    status: "available",
    instructions: EXAM_INSTRUCTIONS,
  },
  {
    id: "lit-009",
    subject: "Literature",
    questions: 35,
    duration: "40 Minutes",
    durationInSeconds: 2400,
    status: "available",
    instructions: EXAM_INSTRUCTIONS,
  },
];





// export const exams = [
//   {
//     id: "maths-001",
//     subject: "Mathematics",
//     questions: 50,
//     duration: "1 Hour",
//     durationInSeconds: 3600,
//     status: "available", // available | ongoing | completed | locked
//     instructions: [
//       "Ensure you are ready before clicking Start Exam.",
//       "The exam is timed. Timer starts immediately.",
//       "Total number of questions and duration are shown before you begin.",
//       "Read each question carefully before answering.",
//       "Use Next and Previous buttons to navigate.",
//       "Answers are automatically saved.",
//       "Do not refresh or close the browser.",
//       "If time expires, the exam will auto-submit.",
//       "Once submitted, answers cannot be changed.",
//       "Malpractice may lead to disqualification.",
//     ],
//   },

//   {
//     id: "eng-002",
//     subject: "English Language",
//     questions: 40,
//     duration: "45 Minutes",
//     durationInSeconds: 2700,
//     status: "available",
//     instructions: [],
//   },

//   {
//     id: "phy-003",
//     subject: "Physics",
//     questions: 50,
//     duration: "1 Hour",
//     durationInSeconds: 3600,
//     status: "available",
//     instructions: [],
//   },

//   {
//     id: "chem-004",
//     subject: "Chemistry",
//     questions: 50,
//     duration: "1 Hour",
//     durationInSeconds: 3600,
//     status: "available",
//     instructions: [],
//   },

//   {
//     id: "bio-005",
//     subject: "Biology",
//     questions: 45,
//     duration: "50 Minutes",
//     durationInSeconds: 3000,
//     status: "available",
//     instructions: [],
//   },

//   {
//     id: "geo-006",
//     subject: "Geography",
//     questions: 40,
//     duration: "45 Minutes",
//     durationInSeconds: 2700,
//     status: "completed",
//     instructions: [],
//   },

//   {
//     id: "gov-007",
//     subject: "Government",
//     questions: 40,
//     duration: "45 Minutes",
//     durationInSeconds: 2700,
//     status: "available",
//     instructions: [],
//   },

//   {
//     id: "eco-008",
//     subject: "Economics",
//     questions: 50,
//     duration: "1 Hour",
//     durationInSeconds: 3600,
//     status: "available",
//     instructions: [],
//   },

//   {
//     id: "lit-009",
//     subject: "Literature",
//     questions: 35,
//     duration: "40 Minutes",
//     durationInSeconds: 2400,
//     status: "available",
//     instructions: [],
//   },
// ];
