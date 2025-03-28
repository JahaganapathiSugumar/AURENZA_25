import React, { useState, useEffect } from 'react';
import { FileText, Box, Globe, MapPin, Timer, Calendar, Mail, Phone } from 'lucide-react';
import Stars from './components/Stars';

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const technicalEvents = [
    {
      title: "MIND FLAYER",
      icon: <FileText className="w-12 h-12 text-pink-500" />,
      time: "10:00 AM - 12:15 PM",
      team: "2-3 members per team",
      rules: [
        "Teams can present a paper on any technical, medical or a topic of their choice",
        "Abstract should be submitted. Also the PPT registration should be available at help desk",
        "A maximum of 15 slides and a minimum of 10 slides should be presented",
        "The team will get 5 minutes to present their paper, followed by a 2-minute query session",
        "No internet access will be provided during presentation"
      ],
      registerLink: "https://forms.gle/bMcjuEX3iMSHxGvm6"
    },
    {
      title: "PROJECT UPSIDE DOWN",
      icon: <Box className="w-12 h-12 text-pink-500" />,
      time: "10:00 AM - 12:15 PM",
      team: "2-3 members per team",
      rules: [
        "Display of hardware/prototype is required for evaluation",
        "Ideas only projects can be presented via PowerPoint",
        "Participants can choose their own topics",
        "Focus on innovation and practicality"
      ],
      registerLink: "https://forms.gle/Yn8oeQ3uk2ZGuXkx5"
    },
    {
      title: "STRANGER SITES",
      icon: <Globe className="w-12 h-12 text-pink-500" />,
      time: "10:00 AM - 12:15 PM",
      team: "2-3 members per team",
      rules: [
        "Teams will be given on spot",
        "A fresh development task",
        "Website must be functional and creative",
        "Judging based on functionality and innovation"
      ],
      registerLink: "https://forms.gle/TdxFp4GkquBmii6Y6"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "THE HAWKINS HUNT",
      time: "1:00 PM - 2:30 PM",
      type: "Individual Event",
      rules: [
        "Each clue leads to the next - solve and be quick",
        "Teamwork, speed & problem-solving are key"
      ],
      registerLink: "https://forms.gle/9jY9e7Xhx3HqBFJaA"
    },
    {
      title: "DEMOGORGON DESIGNS",
      time: "10:00 AM - 12:15 PM",
      type: "Individual Event",
      rules: [
        "Theme will be given on spot",
        "Individual Event (Only 1 participant)",
        "Poster must be creative, impactful & relevant to the given theme",
        "Judging: Theme, Creativity, Design, Message Clarity & Visual Appeal"
      ],
      registerLink: "https://forms.gle/55oyhSJrmaNGykb37"
    },
    {
      title: "ELEVEN'S CUT",
      time: "1:15 PM - 3:00 PM",
      type: "Individual Event",
      rules: [
        "Capture within the given time frame",
        "Basic editing allowed",
        "Tell a compelling story through your lens"
      ],
      registerLink: "https://forms.gle/KvDmNTSNMjDZinxx8"
    },
    {
      title: "PORTAL TO VIRAL",
      time: "Submit by 29.3.2025",
      type: "Individual Event",
      theme: "Theme: Raise Awareness, Inspire Change!",
      rules: [
        "Duration: 30-60 seconds",
        "Original content only"
      ],
      registerLink: "https://forms.gle/A57DgFVpDHWdJwRu9"
    }
  ];

  const teamMembers = [
    {
      name: "Karunamoorthi R",
      role: "Faculty Coordinator",
      phone: "90250 44806",
      department: "Department of Computer Science",
      image: "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004298/WhatsApp_Image_2025-03-21_at_00.11.08_ca67c348_au0pw4.jpg"
    },
    {
      name: "Harini CS",
      role: "Student Coordinator",
      phone: "6379445912",
      image: "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004309/WhatsApp_Image_2025-03-21_at_00.13.09_4c61d472_olq1ds.jpg"
    },
    {
      name: "Jahaganapathi S",
      role: "Student Coordinator",
      phone: "6379613634",
      image: "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004489/DP_xtybj2.jpg"
    }
  ];

  const galleryImages = [
    "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004689/IMG-20250326-WA0012_bl97gb.jpg",
    "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004690/IMG-20250326-WA0013_bfh0ka.jpg",
    "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004693/IMG-20250326-WA0009_susiwl.jpg",
    "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004739/WhatsApp_Image_2025-03-20_at_22.15.46_128d5fd1_kt79fs.jpg",
    "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004687/IMG-20250326-WA0018_cewrdr.jpg",
    "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004791/IMG-20250326-WA0028_ru9adq.jpg",
    "https://res.cloudinary.com/dyxu6ylng/image/upload/v1743004790/IMG-20250326-WA0022_jd1fw1.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date("April 12, 2025 09:00:00").getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Responsive Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <span className="text-pink-500 font-bold text-xl">AURENZA '25</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#home" className="text-sm sm:text-base text-gray-300 hover:text-pink-500">Home</a>
            <a href="#events" className="text-sm sm:text-base text-gray-300 hover:text-pink-500">Events</a>
            <a href="#team" className="text-sm sm:text-base text-gray-300 hover:text-pink-500">Team</a>
            <a href="#gallery" className="text-sm sm:text-base text-gray-300 hover:text-pink-500">Gallery</a>
            <a href="#contact" className="text-sm sm:text-base text-gray-300 hover:text-pink-500">Contact</a>
          </div>
        </div>
      </nav>
  
      {/* Responsive Hero Section */}
  <section id="home" className="pt-28 pb-16 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dyxu6ylng/image/upload/v1743005236/KEC_LOGO_2_xixhut.png" 
            alt="KEC Logo" 
            className="w-24 sm:w-32"
          />
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-glow mb-2">
              KONGU ENGINEERING
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-glow">COLLEGE</h1>
              <img 
                src="https://res.cloudinary.com/dyxu6ylng/image/upload/v1743005241/RRC_LOGO_processed_knahyv.png" 
                alt="RRC Logo" 
                className="w-40 sm:w-48"
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-light text-pink-500 mb-4">RED RIBBON CLUB</h2>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">presents</p>
        <h3 className="text-3xl sm:text-5xl font-bold text-pink-500 mb-12 text-glow">AURENZA '25</h3>
      </div>
    </div>
  </section>


      {/* Responsive Countdown */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { value: countdown.days, label: "Days" },
          { value: countdown.hours, label: "Hours" },
          { value: countdown.minutes, label: "Minutes" },
          { value: countdown.seconds, label: "Seconds" }
        ].map((item, index) => (
          <div key={index} className="bg-black/50 p-4 sm:p-6 rounded-lg border border-pink-500/20">
            <div className="text-2xl sm:text-4xl font-bold text-pink-500">{item.value}</div>
            <div className="text-xs sm:text-sm text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-pink-500 mr-2" />
            <span className="text-sm sm:text-base">April 12, 2025</span>
          </div>
          <div className="flex items-center">
            <Timer className="w-5 h-5 text-pink-500 mr-2" />
            <span className="text-sm sm:text-base">9:00 AM</span>
          </div>
        </div>
      </div>

  {/* Responsive Events Section */}
  <section id="events" className="py-12 px-4 sm:px-6 bg-black/90">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Event Lineup</h2>

      {/* Technical Events */}
      <div className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-8">TECHNICAL EVENTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalEvents.map((event, index) => (
            <div key={index} className="bg-black/50 rounded-lg p-6 border border-pink-500/20">
              <div className="mb-4">{event.icon}</div>
              <h4 className="text-xl sm:text-2xl font-bold mb-4">{event.title}</h4>
              <div className="mb-4 text-gray-400 text-sm sm:text-base">
                <p>{event.time}</p>
                <p>{event.team}</p>
              </div>
              <div className="mb-6">
                <h5 className="font-semibold mb-2">Rules:</h5>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-400 space-y-1">
                  {event.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 sm:px-6 sm:py-2 
                         rounded-full text-xs sm:text-sm transition duration-300"
              >
                REGISTER NOW
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Events */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-8">NON-TECHNICAL EVENTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nonTechnicalEvents.map((event, index) => (
            <div key={index} className="bg-black/50 rounded-lg p-6 border border-pink-500/20">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">{event.title}</h4>
              <div className="mb-4 text-gray-400 text-sm sm:text-base">
                <p>{event.time}</p>
                <p>{event.type}</p>
                {event.theme && <p>{event.theme}</p>}
              </div>
              <div className="mb-6">
                <h5 className="font-semibold mb-2">Rules:</h5>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-400 space-y-1">
                  {event.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 sm:px-6 sm:py-2 
                         rounded-full text-xs sm:text-sm transition duration-300"
              >
                REGISTER NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Responsive Team Section */}
  <section id="team" className="py-12 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">The Team Behind The Mystery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-black/50 rounded-lg p-6 border border-pink-500/20">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-32 h-32 mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
            <p className="text-pink-500 text-center mb-4">{member.role}</p>
            {member.department && (
              <p className="text-gray-400 text-center text-sm mb-4">{member.department}</p>
            )}
            <div className="flex items-center justify-center space-x-4">
              <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-pink-500 transition">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Responsive Gallery Section */}
  <section id="gallery" className="py-12 px-4 sm:px-6 bg-black/90">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Glimpses of The Other Side</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="aspect-square">
            <img 
              src={image} 
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>


  {/* Responsive Contact Section */}
  <section id="contact" className="py-12 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-pink-500">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className="flex flex-col items-center">
          <MapPin className="w-10 h-10 text-pink-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Address</h3>
          <p className="text-gray-400 leading-relaxed">
            Kongu Engineering College<br />
            Perundurai, Erode
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="w-10 h-10 text-pink-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Phone</h3>
          <p className="text-gray-400 leading-relaxed">
            +91 6379445912<br />
            +91 6379613634
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-8 px-6 border-t border-gray-800">
  <div className="max-w-7xl mx-auto text-center text-gray-400">
    <p>© 2025 AURENZA '25 - Kongu Engineering College. All rights reserved.</p>
    <div className="mt-4">
      Follow us on Instagram: 
      <a 
        href="https://instagram.com/red.ribbon.club.of.kec" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-400 ml-2"
      >
        @red.ribbon.club.of.kec
      </a>
    </div>
  </div>
</footer>
</div>
);
}

export default App;