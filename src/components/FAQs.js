// src/components/FAQs.js

import React, { useState } from 'react';
import quantumBgVideo from '../video/Quantum2.mp4'; // Importing the video

const FAQs = () => {
  const faqs = [
    {
      category: 'For Trippers',
      questions: [
        {
          question: 'How do I earn WER tokens?',
          answer: 'Earn WER tokens by sharing content, completing quests, and exploring destinations.'
        },
        {
          question: 'What are personalized recommendations?',
          answer: 'AI-driven travel suggestions tailored to your preferences.'
        },
        {
          question: 'What is the Wesafar Metaverse?',
          answer: 'A virtual space for immersive experiences and interactive quests.'
        },
        {
          question: 'Can I book activities directly on Wesafar?',
          answer: 'Yes, you can book activities and services through Wesafar\'s integrated travel planning.'
        }
      ]
    },
    {
      category: 'For Business Partners',
      questions: [
        {
          question: 'How can my business benefit from Wesafar?',
          answer: 'Connect with trippers, promote services, create offers, and sell merchandise and NFTs.'
        },
        {
          question: 'What are the benefits of the Wesafar Club for my business?',
          answer: 'Create exclusive offers for club members, increase visibility, and engage with a dedicated audience.'
        },
        {
          question: 'How do I create a business profile?',
          answer: 'Create and manage your business profile, update service information, and respond to reviews.'
        },
        {
          question: 'How can I promote my services on Wesafar?',
          answer: 'Use platform sponsorship, create exclusive offers, and directly connect with trippers through messaging.'
        }
      ]
    }
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const getCategoryGradient = (category) => {
    if (category === 'For Trippers') {
      return 'linear-gradient(to right, deeppink, purple)';
    } else if (category === 'For Business Partners') {
      return 'linear-gradient(to right, #5723f5, purple)';
    }
    return '';
  };

  return (
    <div className="faq-wrapper relative p-8 flex flex-col items-center justify-center min-h-screen" id='faq'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={quantumBgVideo} // Using the imported video
        type="video/mp4"
        aria-hidden="true"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      {/* FAQ Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full flex justify-center items-center flex-grow">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#ff5cdc] to-[#d93775] text-center"
            style={{
              fontWeight: '300',
              textShadow: '0px 0px 8px #d93775',
            }}
          >
            Frequently <span>Asked</span> Questions
          </h1>
        </div>
        <div className="faq-container flex flex-wrap justify-center items-center w-full mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-category w-full lg:w-1/2 p-4 flex flex-col items-center">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
                style={{
                  background: getCategoryGradient(faq.category),
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'center',
                }}
              >
                {faq.category}
              </h2>
              {faq.questions.map((q, idx) => (
                <div key={idx} className="mb-4 w-full">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleQuestion(q.question)}
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-100">
                      {q.question}
                    </p>
                    <span className="text-gray-100">
                      {openQuestion === q.question ? '▲' : '▼'}
                    </span>
                  </div>
                  {openQuestion === q.question && (
                    <p className="text-gray-300 mt-2">{q.answer}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;