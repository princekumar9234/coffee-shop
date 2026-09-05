import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Homes/Home";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Specialties from "./Components/Specialties/Specialties";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import CartDrawer from "./Components/CartDrawer/CartDrawer";
import ReservationModal from "./Components/OrderModal/ReservationModal";
import Toast from "./Components/Toast/Toast";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });

    setToastMessage({
      title: `Added to Tray! ☕`,
      sub: `${item.name} (₹${item.price})`,
    });

    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f7efe6] selection:bg-[#d49b53] selection:text-black">
      {/* Navbar with cart counter & table booking triggers */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Home onOpenBooking={() => setIsBookingOpen(true)} />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <Specialties onOpenBooking={() => setIsBookingOpen(true)} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Booking Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating Action Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;
