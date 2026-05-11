import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("📤Sending....");
    const formData = new FormData(event.target);

    // Use environment variable for API key
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!apiKey) {
      setResult("❌ Error: API key not configured");
      setIsLoading(false);
      return;
    }

    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Form Error", data);
        setResult(data.message || "❌ Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("❌ Error sending message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 1}}
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}
      style={{
        backgroundImage: isDarkMode ? "none" : "url('/footer-bg-color.png')",
        backgroundSize: "90% auto",
      }}
    >
      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={`text-center mb-2 text-lg font-Ovo ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}
      >
        Connect with me
      </motion.h4>
      
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-5xl font-Ovo ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${
          isDarkMode ? 'text-gray-200' : 'text-gray-600'
        }`}
      >
        I am always open to discussing new projects, creative ideas or
        opportunities to be part of your visions.
      </motion.p>

      <motion.form
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.9, delay: 0.5 }}
        onSubmit={onSubmit} 
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
          <motion.input
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter Your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode 
                ? 'border-white/30 bg-[#2a004a]/30 text-white/90 focus:border-purple-400' 
                : 'border-gray-400 bg-white text-gray-800 focus:border-purple-500'
            }`}
            name="name"
          />
          <motion.input
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter Your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode 
                ? 'border-white/30 bg-[#2a004a]/30 text-white/90 focus:border-purple-400' 
                : 'border-gray-400 bg-white text-gray-800 focus:border-purple-500'
            }`}
            name="email"
          />
        </div>
        <motion.textarea
          initial={{y: 100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="4"
          placeholder="Enter your message"
          required
          className={`w-full p-3 outline-none border-[0.5px] rounded-md mb-5 text-sm ${
            isDarkMode 
              ? 'border-white/30 bg-[#2a004a]/30 text-white/90 focus:border-purple-400' 
              : 'border-gray-400 bg-white text-gray-800 focus:border-purple-500'
          }`}
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-300 ${
            isDarkMode
              ? 'bg-[#11001F] hover:bg-[#2a004a] text-white border border-white/30'
              : 'bg-black/80 hover:bg-black text-white'
          }`}
        >
          Submit now <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        <p className={`mt-4 text-center font-medium ${
          isDarkMode ? 'text-purple-300' : 'text-purple-700'
        }`}>
          {result}
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
