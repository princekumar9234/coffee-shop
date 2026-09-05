import React from "react";
import { CheckCircle2, ShoppingBag, X } from "lucide-react";

const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#21140d] border border-[#d49b53]/40 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
        <div className="w-8 h-8 rounded-xl bg-[#d49b53] text-[#120c08] flex items-center justify-center font-bold flex-shrink-0">
          <ShoppingBag size={16} />
        </div>
        <div className="pr-2">
          <p className="text-xs font-bold text-white">{message.title}</p>
          <p className="text-[11px] text-[#b8a99d]">{message.sub}</p>
        </div>
        <button
          onClick={onClose}
          className="text-[#8c7b70] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
