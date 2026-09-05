import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Coffee } from "lucide-react";

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      onClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#160f0a] border-l border-[#382317] text-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#2d1b12] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#d49b53]/20 text-[#d49b53] flex items-center justify-center">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h3 className="font-serif-heading text-lg font-bold">Your Order</h3>
                <p className="text-xs text-[#8c7b70]">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#281810] text-[#a8998d] hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderPlaced ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif-heading text-2xl font-bold">Order Received!</h4>
                <p className="text-xs text-[#b8a99d] max-w-xs">
                  Our baristas have started grinding your fresh beans. Total: <span className="text-[#d49b53] font-bold">₹{total}</span>.
                </p>
                <div className="text-[11px] text-[#8c7b70] bg-[#21140e] px-4 py-2 rounded-xl border border-[#382317]">
                  ☕ Estimated preparation: 8-12 minutes
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <Coffee size={44} className="text-[#d49b53]/40" />
                <h4 className="font-serif-heading text-lg font-bold">Your Tray is Empty</h4>
                <p className="text-xs text-[#8c7b70] max-w-xs">
                  Browse our artisan menu and add your favorite hot brews, cold crafts, or freshly baked croissants.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full bg-[#d49b53] text-[#120c08] text-xs font-bold mt-2 hover:bg-[#e2ab66]"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#1f140e] border border-[#382417] flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-[#140c08] flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif-heading text-sm font-bold text-white truncate">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#d49b53] font-semibold mt-0.5">
                      ₹{item.price} each
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-md bg-[#2d1c13] hover:bg-[#d49b53] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-bold text-white px-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-md bg-[#2d1c13] hover:bg-[#d49b53] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col justify-between items-end h-16">
                    <span className="text-sm font-bold text-white">
                      ₹{item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#8c7a6e] hover:text-rose-400 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer / Checkout */}
          {cartItems.length > 0 && !orderPlaced && (
            <div className="p-6 border-t border-[#2d1b12] bg-[#1a110b] space-y-4">
              <div className="space-y-1.5 text-xs text-[#a89b91]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST / Taxes (5%)</span>
                  <span className="text-white font-medium">₹{tax}</span>
                </div>
                <div className="flex justify-between text-sm text-white font-bold pt-2 border-t border-[#331f14]">
                  <span>Grand Total</span>
                  <span className="text-[#d49b53] text-base font-bold">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d49b53] to-[#b87635] hover:from-[#e2ab66] hover:to-[#c6823e] text-[#120c08] font-bold text-sm shadow-xl shadow-[#d49b53]/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
              >
                <span>Proceed to Quick Order</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
