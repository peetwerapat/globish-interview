interface Answers {
  answer: string;
  score: number;
}

interface Question {
  question: string;
  answers: Answers[];
}

export const question: Question[] = [
  {
    question: "ถ้าวันนี้เป็นวันหยุดคุณจะ...",
    answers: [
      {
        answer: "นอนเล่น พักผ่อน",
        score: 10,
      },
      {
        answer: "ดูหนัง ดูซีรี่ส์ เล่นเกม",
        score: 20,
      },
      {
        answer: "เรียนรู้อะไรใหม่ๆ",
        score: 30,
      },
    ],
  },
  {
    question: "คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?",
    answers: [
      {
        answer: "การทำงาน",
        score: 30,
      },
      {
        answer: "เที่ยวต่างประเทศ",
        score: 10,
      },
      {
        answer: "ใช้ในชีวิตประจำวัน",
        score: 20,
      },
    ],
  },
  {
    question: "สไตล์การเรียนภาษาอังกฤษของคุณ เป็นแบบไหน?",
    answers: [
      {
        answer: "เรียนคอร์สออนไลน์ / โรงเรียนสอนภาษา",
        score: 30,
      },
      {
        answer: "เรียนด้วยตนเอง เช่น อ่านหนังสือ ดูหนัง ฟังเพลง",
        score: 20,
      },
      {
        answer: "คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ",
        score: 10,
      },
    ],
  },
  {
    question: "คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?",
    answers: [
      {
        answer: "เป็นประจำทุกวัน",
        score: 30,
      },
      {
        answer: "เป็นบางครั้ง",
        score: 10,
      },
      {
        answer: "นาน ๆ ที / ไม่ได้ใช้เลย",
        score: 20,
      },
    ],
  },
  {
    question: "คุณอยากพัฒนาสกิลภาษาอังกฤษ สกิลไหนมากที่สุด?",
    answers: [
      {
        answer: "การฟัง",
        score: 20,
      },
      {
        answer: "การพูด",
        score: 10,
      },
      {
        answer: "การเขียน",
        score: 30,
      },
    ],
  },
  {
    question: "อยากเรียนภาษาอังกฤษ แต่...",
    answers: [
      {
        answer: "ไม่มีเวลา",
        score: 20,
      },
      {
        answer: "เนื้อหาไม่น่าสนใจ / สอนไม่สนุก",
        score: 10,
      },
      {
        answer: "ไม่มั่นใจ",
        score: 30,
      },
    ],
  },
  {
    question: "คุณรู้จัก Globish ผ่านช่องทางใด (เลือกได้มากกว่า 1 ข้อ)",
    answers: [
      {
        answer: "Instagram",
        score: 0,
      },
      {
        answer: "Facebook",
        score: 0,
      },
      {
        answer: "อื่นๆ (โปรดระบุ)",
        score: 0,
      },
    ],
  },
];
