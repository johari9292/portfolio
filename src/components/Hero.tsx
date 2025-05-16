'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '03438160801',
    href: 'tel:+923438160801'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '03705076807',
    href: 'tel:+923705076807'
  }
];

const desertImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg/800px-Cold_Desert_Skardu_Gilgit_Baltistan_Pakistan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Skardu_Katpana_Desert.jpg/1280px-Skardu_Katpana_Desert.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Desert%2C_Water_and_Moutain_in_Katpana_Skardu_Baltitsan.jpg/800px-Desert%2C_Water_and_Moutain_in_Katpana_Skardu_Baltitsan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Katpana_Desert_at_Skardu_%28Cold_Desert%29.jpg/1280px-Katpana_Desert_at_Skardu_%28Cold_Desert%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Unexpected_Snow_in_Katpana_Skardu.jpg/1280px-Unexpected_Snow_in_Katpana_Skardu.jpg'
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Katpana Desert Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay */}
        <div className="flex w-[500%] h-full animate-slide">
          {desertImages.map((src, index) => (
            <div key={index} className="w-1/5 h-full relative">
              <Image
                src={src}
                alt={`Katpana Desert ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          {/* <motion.div
            className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Ishaq Ali Johari"
              fill
              className="object-cover"
              priority
            />
          </motion.div> */}

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
Ishaq Ali Johari          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-primary-300 mb-8 drop-shadow-lg"
          >
            Senior Software Engineer
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg"
          >
            React JS | React Native | Node JS | Express JS | Angular
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg italic"
          >
            "Katpana Desert in Skardu is my favorite place in the world. This unique cold desert, 
            situated at 2,226 meters above sea level, is one of the highest deserts on Earth. 
            Its pristine white sand dunes, surrounded by snow-capped mountains, create a surreal 
            landscape that inspired me to use its name for my portfolio domain. Feel free to 
            connect with me for any information about visiting Katpana Desert or planning a tour 
            to explore the beautiful Skardu region."
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.value}
                href={info.href}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all border border-white/20"
              >
                <info.icon className="w-5 h-5 text-primary-300" />
                <span className="text-white">{info.value}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/johari9292"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-primary-300 transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ishaq-ali-johari"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-primary-300 transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:johari9292@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-primary-300 transition-colors"
            >
              <HiMail className="w-8 h-8" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Add this to your globals.css or equivalent
// @keyframes slide {
//   0% { transform: translateX(0); }
//   20% { transform: translateX(-20%); }
//   40% { transform: translateX(-40%); }
//   60% { transform: translateX(-60%); }
//   80% { transform: translateX(-80%); }
//   100% { transform: translateX(0); }
// }
// .animate-slide {
//   animation: slide 30s infinite;
// } 