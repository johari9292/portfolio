'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Farmdar',
    location: 'Islamabad, Pakistan',
    period: '04/2023 - Present',
    description: [
      'Spearheaded the development of multiple products at Farmdar to optimize efficiency and productivity in the agriculture industry.',
      'Collaborated with product managers, designers, and cross-functional teams to deliver scalable React- and Angular-based solutions.',
      'Developed responsive, accessible UI components following industry best practices and design guidelines.',
      'Solely developed the Farmdar Survey Mobile App and contributed to the IQ Platform and AgriChain portals in collaboration with team members.',
      'Farmdar\'s products are utilized by major clients like Engro, FFC, Corteva, Bayer, and prominent sugar mills such as Fatima Sugar Mill and Noon Sugar Mill.'
    ],
    technologies: ['React', 'Angular', 'Node.js', 'Express.js']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Joyn Group',
    location: 'Islamabad, Pakistan',
    period: '10/2022 - 03/2023',
    description: [
      'Collaborated with project managers, developers, and QA teams to resolve complex technical issues.',
      'Modernized legacy codebases, enhancing application performance and maintainability.',
      'Conducted code reviews, provided feedback, and mentored junior developers to uphold coding standards.'
    ],
    technologies: ['React', 'Node.js']
  },
  {
    title: 'Software Engineer',
    company: '9exgen Solution',
    location: 'Lahore, Pakistan',
    period: '08/2020 - 10/2022',
    description: [
      'Partnered with development and testing teams to design and deliver robust software solutions.',
      'Integrated third-party tools to extend application functionality.',
      'Built scalable, modular, and API-centric infrastructures to support client requirements.'
    ],
    technologies: ['React']
  },
  {
    title: 'Web Developer Intern',
    company: 'AlfAin Technologies (PVT) Limited',
    location: 'Lahore, Pakistan',
    period: '06/2018 - 01/2020',
    description: [
      'Developed user interfaces using modern JavaScript frameworks, HTML5, and CSS3.',
      'Gained foundational experience in web development and best practices.'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Work Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-300">
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 