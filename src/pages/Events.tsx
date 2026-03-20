import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Bell, CheckCircle2 } from 'lucide-react';

export default function Events() {
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);
  const [readingStory, setReadingStory] = useState<string | null>(null);

  const events = [
    {
      id: "summit-2026",
      title: "Annual Empowerment Summit",
      date: "April 15, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "City Community Center",
      desc: "A gathering of community leaders, residents, and partners to share ideas, progress, and inspiration for the future.",
      type: "Conference"
    },
    {
      id: "mentorship-2026",
      title: "Community Mentorship Workshop",
      date: "May 2, 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Empowerment Hub",
      desc: "Learn how to become an effective mentor and make a lasting impact in someone's life.",
      type: "Workshop"
    },
    {
      id: "cleanup-2026",
      title: "Neighborhood Clean-up Day",
      date: "June 12, 2026",
      time: "8:00 AM - 1:00 PM",
      location: "Various Locations",
      desc: "Join us for a day of community service as we work together to beautify our neighborhoods.",
      type: "Volunteer"
    }
  ];

  const news = [
    {
      id: "literacy-launch",
      title: "New Literacy Program Launched",
      date: "March 10, 2026",
      desc: "We are excited to announce the launch of our new literacy program, aimed at supporting children and adults in our community.",
      fullStory: "Our new literacy program is designed to provide comprehensive support for individuals of all ages. We've partnered with local schools and libraries to offer tutoring sessions, reading workshops, and access to a wide range of educational resources. The program aims to improve literacy rates and foster a love for learning within our community. We believe that literacy is a fundamental right and a key driver of personal and professional success.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "youth-grant",
      title: "Grant Awarded for Youth Leadership",
      date: "February 25, 2026",
      desc: "Encouragement by Empowerment has been awarded a grant to expand our Youth Leadership Council and programs.",
      fullStory: "The generous grant from the Community Foundation will allow us to double the size of our Youth Leadership Council. This expansion will enable more young people to participate in leadership training, community advocacy projects, and mentorship opportunities. We are committed to empowering the next generation of leaders and providing them with the tools they need to make a positive impact in their neighborhoods and beyond.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: "volunteer-sarah",
      title: "Volunteer Spotlight: Sarah Thorne",
      date: "February 10, 2026",
      desc: "Meet Sarah, one of our dedicated mentors who has been making a difference for over three years.",
      fullStory: "Sarah Thorne has been an integral part of our mentorship program since its inception. Over the past three years, she has mentored five individuals, guiding them through career transitions and personal challenges. Her dedication and passion for helping others are truly inspiring. Sarah believes that everyone has the potential to thrive with the right support and encouragement. We are honored to have her as part of our volunteer team.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const handleRegister = (eventTitle: string) => {
    setRegisteredEvent(eventTitle);
    setTimeout(() => setRegisteredEvent(null), 3000);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="10" cy="10" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Events & News</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Stay updated on our community events, program launches, and stories of impact.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-blue mb-12 font-serif">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-10 rounded-3xl border border-black/5 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest">
                    {event.type}
                  </span>
                  <Calendar className="w-6 h-6 text-brand-blue opacity-20" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">{event.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">{event.desc}</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <Calendar className="w-4 h-4 text-brand-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleRegister(event.title)}
                  disabled={registeredEvent === event.title}
                  className={`py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${registeredEvent === event.title ? 'bg-green-500 text-white' : 'bg-brand-blue text-white hover:bg-brand-blue/90'}`}
                >
                  {registeredEvent === event.title ? (
                    <><CheckCircle2 className="w-4 h-4" /> Registered!</>
                  ) : (
                    <>Register Now <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-blue mb-12 font-serif">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="text-xs text-brand-gold font-bold uppercase tracking-widest mb-2">{item.date}</div>
                  <h4 className="text-xl font-bold text-brand-blue mb-4 font-serif">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {readingStory === item.id ? item.fullStory : item.desc}
                  </p>
                  <button 
                    onClick={() => setReadingStory(readingStory === item.id ? null : item.id)}
                    className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm"
                  >
                    {readingStory === item.id ? 'Show Less' : 'Read Full Story'} <ArrowRight className={`w-4 h-4 transition-transform ${readingStory === item.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-brand-gold text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 font-serif">Stay Informed</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Sign up for our newsletter to receive updates on our programs, events, and stories of impact directly in your inbox.
            </p>
            {isNewsletterSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 border border-white/20 p-8 rounded-3xl text-white max-w-lg mx-auto"
              >
                <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 font-serif">Subscribed!</h3>
                <p className="text-white/80">Thank you for joining our community. You'll hear from us soon.</p>
              </motion.div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsNewsletterSubmitted(true);
                }}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-4 bg-white/10 border border-white/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button type="submit" className="bg-white text-brand-gold px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-white/90">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
