'use client';

import { motion } from 'framer-motion';

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
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Results-driven Senior Software Engineer with expertise in full-stack development using React JS, React Native, Node JS, Express JS, and Angular. Proven track record of delivering scalable solutions across diverse industries, including AgriTech, SaaS, and mobile applications. Adept at working independently and within cross-functional teams to build high-quality software products.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am highly interested in exploring the potential of machine learning, particularly in the context of remote sensing for AgriTech applications. While I am not currently working directly in machine learning, I have a basic understanding of AI concepts and aspire to leverage them for generating reports such as plant health, stress levels, harvest monitoring, and crop classification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Sc. Computer Engineering<br />
                  University of Engineering and Technology (UET), Lahore<br />
                  2016 - 2020
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Languages
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>English: Full Professional Proficiency</li>
                  <li>Urdu: Full Professional Proficiency</li>
                  <li>Balti: Native/Bilingual Proficiency</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Machine Learning',
                  'Data Science',
                  'Cybersecurity',
                  'Designing',
                  'Reading Novels',
                  'Traveling'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 