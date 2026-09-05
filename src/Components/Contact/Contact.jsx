import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, Calendar, Users, Coffee } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2 Guests",
    date: "",
    time: "07:00 PM",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: <MapPin className="text-[#d49b53]" size={20} />,
      title: "Café Location",
      info: "Sadipur-Dihri, Obra, Aurangabad, Bihar 824124",
      sub: "Valet parking & curbside pickup available",
    },
    {
      icon: <Phone className="text-[#d49b53]" size={20} />,
      title: "Call / WhatsApp",
      info: "+91 92340-XXXXX",
      sub: "Daily 7:30 AM - 10:30 PM",
    },
    {
      icon: <Mail className="text-[#d49b53]" size={20} />,
      title: "Direct Email",
      info: "princesadipur92@gmail.com",
      sub: "We respond within 2-4 hours",
    },
    {
      icon: <Clock className="text-[#d49b53]" size={20} />,
      title: "Roastery Hours",
      info: "Mon - Sun: 7:30 AM - 10:30 PM",
      sub: "Happy Hours: 4:00 PM - 7:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 relative bg-[#0e0906] border-t border-[#291910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#271810] border border-[#4a2a19] text-xs font-semibold text-[#d49b53]">
            <Calendar size={14} />
            <span>RESERVE & CONNECT</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Book a Table or <span className="text-[#d49b53]">Say Hello</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a8998d]">
            Planning a coffee date, remote work session, or team gathering? Reserve your favorite cozy corner in advance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif-heading text-xl font-bold text-white mb-2">
              Visit Our Roastery
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {contactDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-[#301e13] flex items-start gap-4 hover:border-[#d49b53]/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#23150d] border border-[#3d2315] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-[#d49b53] tracking-wider mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      {item.info}
                    </p>
                    <p className="text-xs text-[#8c7b70] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Map / Ambience Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#24150e] to-[#170d08] border border-[#3d2315] space-y-2 mt-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Coffee size={18} className="text-[#d49b53]" />
                <span>Complimentary High-Speed WiFi & Charging Stations</span>
              </div>
              <p className="text-xs text-[#a39488]">
                Every table in our upper lounge is equipped with warm ambient task lighting and ergonomic seating for comfortable work sessions.
              </p>
            </div>
          </div>

          {/* Right Column: Table Reservation & Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#382317] relative shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif-heading text-2xl font-bold text-white">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-sm text-[#bfaea1] max-w-md mx-auto">
                    Thank you, <span className="text-[#d49b53] font-bold">{formData.name}</span>! We have booked your table for{" "}
                    <span className="text-white font-semibold">{formData.guests}</span> on{" "}
                    <span className="text-white font-semibold">{formData.date || "Today"}</span> at{" "}
                    <span className="text-white font-semibold">{formData.time}</span>.
                  </p>
                  <p className="text-xs text-[#8c7a6e]">
                    A confirmation SMS & WhatsApp reminder has been sent to {formData.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        guests: "2 Guests",
                        date: "",
                        time: "07:00 PM",
                        notes: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#d49b53] text-[#120c08] text-xs font-bold mt-4 cursor-pointer hover:bg-[#e2ab66] transition-colors"
                  >
                    Make Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                    Reserve a Table or Inquire
                  </h3>
                  <p className="text-xs text-[#a8998d] mb-4">
                    Fill in your details below and our host will reserve your preferred spot.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#ded3c8] block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#170e09] border border-[#3b2316] text-sm text-white placeholder-[#6d5c52] focus:outline-none focus:border-[#d49b53] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#ded3c8] block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#170e09] border border-[#3b2316] text-sm text-white placeholder-[#6d5c52] focus:outline-none focus:border-[#d49b53] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#ded3c8] block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#170e09] border border-[#3b2316] text-sm text-white placeholder-[#6d5c52] focus:outline-none focus:border-[#d49b53] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#ded3c8] block mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#170e09] border border-[#3b2316] text-sm text-white focus:outline-none focus:border-[#d49b53] transition-colors"
                      >
                        <option value="1 Person">1 Person (Solo Work)</option>
                        <option value="2 Guests">2 Guests (Couple / Meeting)</option>
                        <option value="3-4 Guests">3 - 4 Guests (Small Group)</option>
                        <option value="5-8 Guests">5 - 8 Guests (Party)</option>
                        <option value="8+ Guests">8+ Guests (Event Booking)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#ded3c8] block mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#170e09] border border-[#3b2316] text-sm text-white focus:outline-none focus:border-[#d49b53] transition-colors"
                      >
                        <option value="08:00 AM">08:00 AM (Breakfast)</option>
                        <option value="11:00 AM">11:00 AM (Coffee & Work)</option>
                        <option value="01:30 PM">01:30 PM (Lunch & Brew)</option>
                        <option value="05:00 PM">05:00 PM (Sunset Hour)</option>
                        <option value="07:30 PM">07:30 PM (Evening Dinner)</option>
                        <option value="09:00 PM">09:00 PM (Late Night Chill)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#ded3c8] block mb-1.5">
                      Special Requests / Seating Preference
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Window corner table, high-chair needed, celebrating a birthday..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#170e09] border border-[#3b2316] text-sm text-white placeholder-[#6d5c52] focus:outline-none focus:border-[#d49b53] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d49b53] to-[#b87635] hover:from-[#e2ab66] hover:to-[#c6823e] text-[#120c08] font-bold text-sm shadow-xl shadow-[#d49b53]/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                  >
                    <Send size={16} />
                    <span>Confirm Table Reservation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;