import { motion } from "motion/react";
import { Star, Quote, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Collin Williams",
      role: "Williams Windshield Repair — Non-Climate Control Customer for over 5 years",
      content: "American Mini Storage has been economical, convenient for having business supplies dropped off, secure, and spacious enough to hold quite a bit of inventory for me as a local business owner. AMS has bent over backwards for me on a few things and have always taken care of my needs. I would recommend them for all your storage. You can't go wrong with these people.",
      rating: 5,
      avatar: null,
    },
    {
      name: "Glenda Newsom",
      role: "Jonesboro Resident — Climate Control Customer for 10 years",
      content: "I have been an American Mini Storage customer for 10 years. I can honestly say they've been more than just a storage service — they have been consistent, reliable, and genuinely supportive. The units are great size for the price, which is hard to find these days. Everything is well-kept and I have felt confident storing my belongings. What really sets AMS apart is their customer service. If you ever run into a problem, they are willing to work with you instead of against you and that means a lot. A special shout out to Ms. Misty... She is truly a jewel to this company. Her kindness, professionalism, and willingness to help make all the difference. It's a rare find!",
      rating: 5,
      avatar: null,
    },
  
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            Customer Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300">
            We're proud to serve the Arkansas community and provide 
            storage solutions that our customers can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm relative group hover:bg-white/10 transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={48} className="text-accent" />
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 flex items-center justify-center rounded-full overflow-hidden border-2 border-accent/30">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <User className="text-accent" size={24} />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
