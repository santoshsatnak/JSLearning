
const professor = {

    profName: "Nitin Patil",
    profAge:  45,
    profRelativeExperience: "10 Years",
    profSalary: 800000,
    profPost: "HOD of E&TC",
    
    address: {
        coutry: "India",
        state:  "Maharashtra",
        district: "Pandharpur",
        area:   "Mohol road, Pandharpur",
        landmark: " near Godrej Nagar",
        pinCode: "411033",
    },
  
    degrees: {
        engineering: "E&TC-B.E.",
        masters: "Embedded Systems",
        phd: "ADV Computing",
        catExam: "AIR 98",
        mba: "MBA Marketing",
  
        getDegree: function(){
  
           return `Teacher Degrees: ${this.engineering}, ${this.masters}, ${this.phd}, ${this.catExam}, ${this.mba},`
        }
    },
  
    certificates: ["Hacker Rank Participation", "IFE Certificate", "Advance Programming in Python", "B.tech Degree", "Masters Degree", "PHD"],
  
  } 
  console.log(`--------------------------- STEP-I --------------------------------`);
  console.log(professor);
  
  console.log(`--------------------------- STEP-II --------------------------------`);
  console.log(professor.degrees);
  
  console.log(`--------------------------- STEP-III --------------------------------`);
  console.log(professor.certificates);
  
  console.log(`--------------------------- STEP-IV --------------------------------`);
  console.log(professor.degrees.getDegree());
  
  console.log(`--------------------------- STEP-V --------------------------------`);
  professor.totalExperience = "15 Years";
  console.log(`New added property and value is: Professor.totalExperience: ${professor.totalExperience}`);
  
  console.log(`--------------------------- STEP-VI --------------------------------`);
  professor.profSalary = 800000;
  console.log(`The Changed value is: profSalary: ${professor.profSalary}`);
  console.log(professor);
  
  console.log(`--------------------------- STEP-VII --------------------------------`);
  
  professor.certificates.push("Python Certified");
  console.log(professor.certificates);
  
  console.log(`--------------------------- STEP-VIII --------------------------------`);
  console.log(professor.certificates.slice(-1)[0]);
  
  




























