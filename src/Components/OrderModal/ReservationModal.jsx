import React, { useState } from "react";
import { X, Calendar, Clock, Users, Send, CheckCircle2, Coffee } from "lucide-react";

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2 Guests",
    date: "",
    time: "07:00 PM",
    seating: "Indoor Lounge",
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#18100a] border border-[#42291b] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#2c1a11] text-[#a89b91] hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-white">
              Table Reserved!
            </h3>
            <p className="text-sm text-[#bdaea1]">
              We look forward to serving you, <span className="text-[#d49b53] font-bold">{formData.name}</span>!
            </p>
            <div className="p-4 rounded-2xl bg-[#23150d] border border-[#3b2316] text-xs text-[#ded3c8] text-left space-y-1">
              <p>👥 <span className="font-semibold">Party:</span> {formData.guests}</p>
              <p>⏰ <span className="font-semibold">Schedule:</span> {formData.date || "Today"} at {formData.time}</p>
              <p>🛋️ <span className="font-semibold">Seating:</span> {formData.seating}</p>
            </div>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-[#d49b53] text-[#120c08] font-bold text-xs cursor-pointer hover:bg-[#e2ab66] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#d49b53]/20 text-[#d49b53] flex items-center justify-center font-bold">
                <Coffee size={20} />
              </div>
              <div>
                <h3 className="font-serif-heading text-xl font-bold text-white">
                  Table Reservation
                </h3>
                <p className="text-xs text-[#8c7b70]">
                  Reserve a quiet booth or meeting table
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-semibold text-[#ded3c8] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-[#120c08] border border-[#3a2215] text-xs text-white placeholder-[#68584e] focus:outline-none focus:border-[#d49b53]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#ded3c8] block mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 XXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-[#120c08] border border-[#3a2215] text-xs text-white placeholder-[#68584e] focus:outline-none focus:border-[#d49b53]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-[#ded3c8] block mb-1">
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#120c08] border border-[#3a2215] text-xs text-white focus:outline-none focus:border-[#d49b53]"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3-4 Guests">3-4 Guests</option>
                  <option value="5+ Guests">5+ Guests</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#ded3c8] block mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#120c08] border border-[#3a2215] text-xs text-white focus:outline-none focus:border-[#d49b53]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#ded3c8] block mb-1">
                  Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#120c08] border border-[#3a2215] text-xs text-white focus:outline-none focus:border-[#d49b53]"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:30 PM">08:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#ded3c8] block mb-1">
                Preferred Seating Area
              </label>
              <select
                value={formData.seating}
                onChange={(e) =>
                  setFormData({ ...formData, seating: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl bg-[#120c08] border border-[#3a2215] text-xs text-white focus:outline-none focus:border-[#d49b53]"
              >
                <option value="Indoor Quiet Lounge">Indoor Quiet Lounge (Great for Work)</option>
                <option value="Outdoor Terrace Garden">Outdoor Terrace Garden</option>
                <option value="Barista Brew Bar">Barista Brew Bar (Counter Seats)</option>
                <option value="Private Booth">Private Booth (Group)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d49b53] to-[#b87635] text-[#120c08] font-bold text-xs shadow-lg shadow-[#d49b53]/20 hover:from-[#e2ab66] hover:to-[#c6823e] cursor-pointer transition-all"
            >
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;
