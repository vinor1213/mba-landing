type FAQItem = {
  label: string;
  keywords: string[];
  fullMessage: string;
  type?: "redirect";
  redirectLink?: string;
};

const faqData: FAQItem[] = [
  {
    label: "Admission",
    keywords: ["admission", "apply",],
    fullMessage:
      "Admissions are open for 2026! You can apply online at https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589 or visit our campus to know more. Eligibility requires a recognized Bachelor's degree.",
  },
  {
    label: "Contact",
    keywords: ["contact", "email", "phone", "office", "support", "timing"],
    fullMessage: `
You can contact us at the following numbers and email for further assistance:

- Mobile: 87781 49726 / 94896 00283 / 98943 88426 / 98448 00440  
- Office: 0427-4099898 / 0427-4099897  
- Email: admission@sonabusinessschool.com
- Timing: 9:30 AM to 4:45 PM on weekdays
  `,
  },
  {
    label: "Placement",
    keywords: ["placement", "career", "internship"],
    fullMessage:
      "Sona Business College has a 90% placement rate with top companies visiting every year. Students also do internships during the program to gain real-world experience.",
  },
  {
    label: "Program Duration",
    keywords: ["duration", "semester", "years"],
    fullMessage:
      "The MBA program duration is 2 years, divided into 4 semesters.",
  },
  {
    label: "Greetings",
    keywords: ["hi", "hello", "hey", "bye", "goodbye", "help", "assist"],
    fullMessage:
      "Hello! How can I assist you today? You can ask about Admission, Campus Facilities, Contact details, or Placement.",
  },
  {
    label: "Admission Procedure",
    keywords: ["admission procedure", "entrance test", "selection", "gd", "interview", "wat", "extempore", "psychometric"],
    fullMessage:
      "The admission procedure for the MBA program is based on entrance tests: MAT, CMAT, CAT, GMAT, and TANCET. Selection includes: Written Admission Test (WAT), Group Discussion (GD), One Minute Extempore, Psychometric Test, and Personal Interview.",
  },
  {
    label: "Application Process",
    keywords: ["application process", "online application"],
    fullMessage:
      "At Sona School of Business & Management, the entire application process for admissions is available online. Visit www.sonabusinessschool.com for more details.",
  },
  {
    label: "Application Fee",
    keywords: ["fee", "payment", "rs 650", "rs 800"],
    fullMessage:
      "The application fee for the MBA program at Sona School of Business & Management is: Rs. 650/- (Online Mode) and Rs. 800/- (Offline Mode).",
  },
  {
    label: "MBA Program Features",
    keywords: ["mba program", "features", "general management", "industry immersed", "accreditation"],
    fullMessage:
      "Sona School of Business & Management offers two MBA programs: MBA - General Management and MBA - Industry Immersed Programme. Both programs are approved by AICTE, NBA accredited, affiliated to Anna University, and the institution is NAAC 'A' grade accredited.",
  },
  {
    label: "Single Application Form",
    keywords: ["single application", "common form", "program selection"],
    fullMessage:
      "No, the application form is common for both programs. You can specify your choice of program in the form.",
  },
  {
    label: "GD & Interview Notification",
    keywords: ["gd call", "interview notification", "selection process"],
    fullMessage:
      "Once we receive your application form, you will be notified and called for the interview process.",
  },
  {
    label: "Eligibility & Selection",
    keywords: ["eligibility", "eligibility criteria", "degree pathway", "diploma pathway"],
    fullMessage: `A candidate must meet either the Regular Degree Pathway or Diploma Pathway criteria. 
Regular Degree Pathway: Qualified in any UGC-recognized Bachelor’s degree (any discipline) of minimum 3 years duration under the 10 + 2 + 3 / 4 years pattern. Must have obtained First Class (I Class) in 10th, 12th, and UG. 
Diploma Pathway: Passed any recognized Bachelor’s degree of minimum 3 years under 10 + 3 (Diploma) + 3 years pattern. Must have obtained First Class (I Class) in 10th, Diploma, and UG.`,
  },
  {
    label: "GD & Interview Details",
    keywords: ["gd", "personal interview", "interview process", "mba selection"],
    fullMessage:
      "Applicants are expected to be conversant in English language, demonstrate analytical thinking, awareness of current affairs, a clear SOP (statement of purpose) to pursue MBA, leadership potential, and a positive attitude.",
  },
  {
    label: "TANCET Cut-Off",
    keywords: ["tancet", "management quota", "cut off"],
    fullMessage:
      "The eligibility criteria for Management Quota seats through TANCET score is 35 and above. Scores between 30–34 with relevant work experience may also be considered on a case-by-case basis.",
  },
  {
    label: "Entrance Test Cut-Off",
    keywords: ["cat", "mat", "cmat", "gmAT", "percentile"],
    fullMessage: `The required cut-off for the MBA programs through entrance tests is:
- 65 percentile for MAT/CMAT
- 50 percentile for CAT`,
  },
  {
    label: "Contact Timings",
    keywords: ["office hours", "timing", "admission queries"],
    fullMessage:
      "You can contact the admissions office between 9:30 AM to 4:45 PM on weekdays. Alternatively, you can email at admission@sonabusinessschool.com.",
  },
  {
    label: "Further Contact",
    keywords: ["admissions chair", "further queries", "assistance", "office"],
    fullMessage: `Please reach out to the Admissions Chair at Sona School of Business & Management for further assistance. 
Mobile: 9900016900 / 9894388426
Office: 0427 4099898 / 0427 4099897`,
  },
  {
    label: "Why Choose Sona",
    keywords: ["why choose", "benefits", "legacy", "campus", "faculty", "internships", "ROI", "hostels", "scholarships", "top B-school"],
    fullMessage: `With a 58-year academic legacy and a 40-acre green campus, Sona School of Business & Management 
stands among the Top 100 B-Schools in India. The institution offers core faculty with rich academic and industry experience, adjunct faculty from IIMs, IITs, foreign universities, and industry experts. Students benefit from internships, strong ROI, hygienic hostels, Wi-Fi facilities, and merit scholarships.`,
  },
  {
    label: "Reasons to Choose MBA",
    keywords: ["reasons", "teaching methodology", "placements", "facilities", "alumni network", "campus location", "connectivity"],
    fullMessage: `Reasons to choose Sona MBA include balanced faculty, industry linkage, outstanding placement track record, exclusive teaching methodology, value-added programs, state-of-the-art facilities, strong alumni network, and urban campus connectivity.`,
  },
  {
    label: "Funding Options",
    keywords: ["funding", "educational loan", "finance", "banks", "self-financing"],
    fullMessage: `Students can avail educational loans from various nationalized and private sector banks.`,
  },
  {
    label: "Curriculum Structure",
    keywords: ["curriculum", "program structure", "course structure", "internship", "orientation", "capstone", "electives"],
    fullMessage: `The MBA programme is a two-year program with six trimesters. First year builds core knowledge in economics, management, and analytics, followed by a 4-week internship. Second year offers electives in Business Analytics, Finance, Marketing, HR, Production, culminating in a Capstone project or real-time problem-solving with an organization.`,
  },
  {
    label: "Pedagogy",
    keywords: ["pedagogy", "teaching", "learning approach", "case study", "summer project", "capstone project", "leadership", "teamwork"],
    fullMessage: `The faculty uses teaching methods like case studies, internships, lectures from experts, summer projects, capstone projects, and activity-based learning. A dedicated training centre at Yercaud enhances leadership, communication, and teamwork skills.`,
  },
  {
    label: "Campus Facilities",
    keywords: ["facilities", "wifi", "library", "computer centre", "classrooms", "learning resources", "infrastructure"],
    fullMessage: `The campus has Wi-Fi, a state-of-the-art computer centre, well-equipped classrooms, and a learning resource center with extensive books, journals, magazines, news dailies, and online materials.`,
  },
  {
    label: "Campus Accommodation Process",
    keywords: ["hostel", "accommodation", "room booking", "campus stay"],
    fullMessage: `To stay in the campus accommodation, bring your admission proof and submit a request to the hostel administrative office.`,
  },
  {
    label: "Campus Accommodation Facilities",
    keywords: ["hostel facilities", "gym", "swimming pool", "sports", "recreation", "power supply", "water supply"],
    fullMessage: `The campus accommodation offers Wi-Fi, Apple Lab, gym, swimming pool, billiards, outdoor sports, recreation hall, and 24/7 power and water supply.`,
  },
  {
    label: "Placement Sectors",
    keywords: ["industries", "recruiters", "finance", "marketing", "hr", "production", "it", "fmcg", "manufacturing", "retail"],
    fullMessage: `Students are placed across sectors like Agro, BFSI, Construction, Consultancy, Education, Entertainment, FMCG, Food Processing, Healthcare, Hotels, IT, Logistics, Manufacturing, Media, Mining, NBFC, Retail, Telecommunications, and Textile. Electives include Finance, HR, Marketing, Production, and General Management.`,
  }
];


{/* <button
  className="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
>
  <svg
    y="0"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    width="100"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    height="100"
    className="w-8 h-8 shrink-0 fill-neutral-50"
  >
    <path
      d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
    ></path>
  </svg>
  <span
    className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
    >Your Name</span
  >
</button> */}
