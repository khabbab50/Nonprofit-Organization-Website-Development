import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, HandHelping, Heart, BookOpen, Briefcase, Home, ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "The Mentorship Circle",
      desc: "One-on-one guidance connecting experienced leaders with individuals seeking personal and professional growth. We match mentors based on shared experiences and goals.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-brand-blue"
    },
    {
      title: "The Resource Bridge",
      desc: "Direct access to essential community tools, from educational workshops to emergency family assistance. We bridge the gap between need and availability.",
      icon: <HandHelping className="w-8 h-8" />,
      color: "bg-brand-gold"
    },
    {
      title: "Empowerment Hub",
      desc: "A safe space for community members to gather, share experiences, and build lasting local networks through weekly meetups and events.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-brand-light-blue"
    },
    {
      title: "Education & Literacy",
      desc: "Providing tutoring and literacy programs for children and adults to ensure everyone has the foundational skills for success.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-brand-blue"
    },
    {
      title: "Career Readiness",
      desc: "Workshops on resume building, interview skills, and job search strategies to help individuals achieve financial independence.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-brand-gold"
    },
    {
      title: "Family Support",
      desc: "Comprehensive support for families in transition, including housing assistance, childcare resources, and counseling services.",
      icon: <Home className="w-8 h-8" />,
      color: "bg-brand-light-blue"
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="20" cy="80" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Programs & Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discover our tailored support systems designed to meet the unique needs of our community members.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-black/5 group flex flex-col h-full"
              >
                <div className={`w-16 h-16 ${program.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">{program.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">{program.desc}</p>
                <Link to="/contact" className="text-brand-gold font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-6 font-serif">Community Initiatives</h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Beyond our core programs, we lead several community-wide initiatives focused on long-term systemic change and collective empowerment.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Neighborhood Revitalization", desc: "Collaborating with local partners to improve community spaces and safety." },
                  { title: "Youth Leadership Council", desc: "Empowering the next generation to lead and advocate for their community." },
                  { title: "Annual Empowerment Summit", desc: "A gathering of community leaders, residents, and partners to share ideas and progress." }
                ].map((init, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center shrink-0">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue mb-1 font-serif">{init.title}</h4>
                      <p className="text-neutral-500 text-sm">{init.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                  alt="Community initiative" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services CTA */}
      <section className="py-24 bg-brand-gold text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 font-serif">Need Support?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you or someone you know could benefit from our programs, please don't hesitate to reach out. We are here to help.
          </p>
          <Link to="/contact" className="inline-block bg-brand-blue text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-brand-blue/90">
            Get Support Now
          </Link>
        </div>
      </section>
    </div>
  );
}
