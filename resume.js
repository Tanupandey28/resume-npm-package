import chalk from 'chalk';

const info = {
  name: "Tanu Pandey",
  title: "Dot Net Developer",
  email: "tanupandey984@gmail.com",
  linkedin: "https://www.linkedin.com/in/tanu-pandey-a0b206192/",
  github: "https://github.com/Tanupandey28",
  skills: ["JavaScript", "React", "Node.js", "C#", "ASP.NET", "SQL Server", "Node.js","HTML","CSS", "MVC"],
  experience: [
    {
      role: "Associate Technical Analyst",
      company: "Precision Pyramid Private Limited",
      duration: "July'23 - Dec'23 ",
      roletype: "Intern",
      details: "Working on Pyrops application which was built on ASP .Net MVC for warehouse management system."
    },
      {
      role: "Dot Net Developer",
      company: "Avenir Innovative Solutions",
      duration: "March'24 - Aug'24 ",
      roletype: "Contractual",
      details: "Working and managing Indian Coast Guard's website"
    }
  ]
};

export function display() {
  console.log(chalk.red.bold("\n=== Tanu Pandey ==="));
  console.log(chalk.blue(info.title));
  console.log(chalk.white(info.email));
  console.log(chalk.white(info.linkedin));
  console.log(chalk.white(info.github));
  console.log(chalk.green("\nSkills: ") + info.skills.join(", "));

  console.log(chalk.green("\nExperience:"));
  info.experience.forEach(exp => {
    console.log(`- ${exp.role} @ ${exp.company} (${exp.duration})`);
    console.log(`  ${exp.details}`);
  });

  console.log();
}
