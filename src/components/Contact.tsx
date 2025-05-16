import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'johari9292@gmail.com',
    href: 'mailto:johari9292@gmail.com'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '03438160801 & 03705076807',
    href: 'tel:+923438160801'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Islamabad, Pakistan',
    href: 'https://maps.google.com/?q=Islamabad,Pakistan'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/johari9292',
    href: 'https://github.com/johari9292'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ishaq-ali-johari',
    href: 'https://linkedin.com/in/ishaq-ali-johari'
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

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Contact Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow"
              >
                <div className="text-primary">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {info.label}
                  </h3>
                  <p className="text-gray-900 dark:text-white">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300">
              References available upon request.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 