import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CVButton = () => {
  const handleDownloadCV = () => {
    // Create CV content
    const cvContent = `
GIHOZO Ismail
📍 Kigali, Rwanda | 📞 +250 783227185 | ✉ gihozoismail@gmail.com | 💼 GitHub: https://github.com/GIHOZO12

PROFESSIONAL SUMMARY
Enthusiastic and results-driven IT student with hands-on experience in web application development using Django, React, HTML, CSS, and JavaScript. Passionate about solving real-world problems through technology and eager to contribute to the development of impactful systems.

TECHNICAL SKILLS
• Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS
• Backend: Python (Django, Django REST Framework)
• Databases: PostgreSQL, MySQL, SQLite

PROJECT EXPERIENCE

Code to connect fellowship at Solvit Africa (Django - Internship): (June 2025 – present)
• We learn to collaborate within a team
• Building backend api using Django
• Understanding to use Ai at work place
• Express what we know to potential Employers through life skills

Citizen Engagement System (MVP) – Django & React (May 2025)
• Built a complaint submission platform allowing citizens to report public service issues.
• Implemented backend logic for location-based complaint routing and real-time status updates.
• Designed interactive frontend dashboards using React and Ant Design.

School Management System – Django & React (March 2025)
• Developed features for student management, timetable scheduling, and discipline tracking.
• Integrated backend APIs to manage CRUD operations for various school entities.

AI-based e-Clinic Mobile App – React Native & Django (January 2025)
• Created AI-driven symptom checker with a Django backend API.
• Built multilingual support for English, French, and Kinyarwanda.

EDUCATION
Bachelor of Science in Information Technology
University of Rwanda – College of Science and Technology

ACHIEVEMENTS & LEADERSHIP
• Awarded participation in codeExtrem hackathon
• Certificate for Data camp for Building python Api
• Frontend certificate from freecodeCamp

SOFT SKILLS
• Problem-Solving & Analytical Thinking
• Team Collaboration & Communication
• Adaptability & Quick Learning
• Attention to Detail
    `;

    // Create and download the file
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'GIHOZO_Ismail_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button 
      onClick={handleDownloadCV}
      className="bg-accent-gradient hover:shadow-glow transition-all duration-300 hover:scale-105"
    >
      <Download className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  );
};

export default CVButton;