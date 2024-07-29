'use client'; // Ensure this is at the top of the file

import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from './Card';

const Testimonials = () => {
  const coaches = [
    {
      image: '/images/teacher1.jpg',
      name: 'Mr. Michael Darrun',
      title: 'Business Analyses Expert',
      reviews: '⭐⭐⭐⭐⭐ (123 reviews)',
      description: "Mr. Michael Darrun is an exceptional Business Analyses Expert with a talent for turning complex data into actionable insights. His practical approach and clear explanations make him an invaluable resource for students. Michael's dedication to teaching and his ability to relate real-world business scenarios to theoretical concepts greatly enhance the learning experience. His students appreciate his patience and the personalized feedback he provides."
    },
    {
      image: '/images/teacher2.jpg',
      name: 'Miss. Chin Zhang',
      title: 'Advanced Database Engineer',
      reviews: '⭐⭐⭐⭐ (123 reviews)',
      description: 'Miss. Chin Zhang is an outstanding Advanced Database Engineer known for her deep technical expertise and innovative problem-solving skills. She excels at making difficult concepts understandable and engaging for her students. Chin is highly regarded for her hands-on teaching style, encouraging students to apply their knowledge through practical exercises. Her commitment to student success and her approachable nature make her a favorite among learners.'
    },
    {
      image: '/images/teacher3.jpg',
      name: 'Dr. Rutvi Arora',
      title: 'Cyber Security Expert',
      reviews: '⭐⭐⭐⭐⭐ (123 reviews)',
      description: 'Dr. Rutvi Arora is a leading Cyber Security Expert who brings a wealth of knowledge and experience to her teaching. Her courses are meticulously designed to cover the latest threats and defense strategies in the cyber security landscape. Dr. Arora is praised for her ability to simplify complex topics and her proactive approach to student engagement. Her passion for cyber security and dedication to her students’ growth are truly inspiring.'
    },
    {
      image: '/images/teacher4.jpg',
      name: 'Dr. John Doe',
      title: 'AI Specialist',
      reviews: '⭐⭐⭐⭐ (150 reviews)',
      description: 'Dr. John Doe has an incredible ability to make complex AI concepts accessible and engaging. His lectures are well-structured and interactive, fostering a deep understanding of the material. His dedication to student success is evident through his approachable nature and willingness to provide extra help. Dr. Doe\'s passion for AI is contagious, inspiring students to pursue excellence in the field.'
    }
  ];
  
  const students = [
    {
      image: '/images/student1.jpg',
      name: 'Sandra Steensen',
      title: 'BSc Computing Solent University',
      reviews: '⭐⭐⭐⭐⭐ (123 reviews)',
      description: 'Sandra Steensen has consistently demonstrated a high level of commitment and enthusiasm in her computing studies. Her ability to apply theoretical knowledge to practical problems is commendable. She is proactive in group projects, often taking the lead and ensuring the team stays on track. Sandra\'s positive attitude and willingness to help peers make her a valued member of any class.'
    },
    {
      image: '/images/student2.jpg',
      name: 'Julia Raven',
      title: 'MSc Cyber Security',
      reviews: '⭐⭐⭐⭐ (123 reviews)',
      description: 'Julia Raven\'s expertise in cyber security is exceptional. She has a keen eye for detail and excels in identifying vulnerabilities and threats. Her analytical skills and methodical approach to problem-solving set her apart. Julia is also a strong communicator, effectively sharing her knowledge and collaborating with classmates. She consistently delivers high-quality work, earning the respect of her peers and instructors.'
    },
    {
      image: '/images/student3.jpg',
      name: 'Christian Stevenson',
      title: 'MSc Database Science',
      reviews: '⭐⭐⭐⭐⭐ (123 reviews)',
      description: 'Christian Stevenson is a standout student in the field of database science. His deep understanding of database architecture and management is impressive. He is highly proficient in designing and implementing complex database systems. Christian is also an excellent problem solver, often finding innovative solutions to challenging issues. His dedication to his studies is reflected in his outstanding academic performance and contributions to class discussions.'
    },
    {
      image: '/images/student4.jpg',
      name: 'Alice Smith',
      title: 'BSc Software Engineering',
      reviews: '⭐⭐⭐⭐ (100 reviews)',
      description: 'Alice Smith is a talented software engineering student with a strong grasp of programming languages and software development methodologies. She is highly creative and enjoys tackling difficult coding challenges. Alice\'s ability to work under pressure and deliver quality software solutions is remarkable. Her collaborative nature and leadership skills make her a key asset in team projects, where she consistently motivates and supports her peers.'
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 pt-12 text-center">Our Coaches Testimonials</h2>
        <Carousel 
          showArrows={true} 
          showThumbs={false} 
          showStatus={false} 
          infiniteLoop 
          useKeyboardArrows 
          autoPlay 
          interval={10000} 
          centerMode={!isMobile}
          centerSlidePercentage={isMobile ? 100 : 45}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const indicatorStyles = {
              marginLeft: 20,
              color: isSelected ? '#000' : '#ccc',
              cursor: 'pointer'
            };
            return (
              <span
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                •
              </span>
            );
          }}
        >
          {coaches.map((coach, index) => (
            <Card key={index} {...coach} />
          ))}
        </Carousel>     
        <h2 className="text-4xl font-bold mt-12 mb-8 pt-12 text-center">Our Students Testimonials</h2>  
        <Carousel 
          showArrows={true} 
          showThumbs={false} 
          showStatus={false} 
          infiniteLoop 
          useKeyboardArrows 
          autoPlay 
          interval={10000} 
          centerMode={!isMobile}
          centerSlidePercentage={isMobile ? 100 : 45}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const indicatorStyles = {
              marginLeft: 20,
              color: isSelected ? '#000' : '#ccc',
              cursor: 'pointer'
            };
            return (
              <span
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                •
              </span>
            );
          }}
        >
          {students.map((student, index) => (
            <Card key={index} {...student} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
