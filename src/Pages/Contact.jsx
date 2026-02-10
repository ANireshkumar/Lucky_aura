import React from "react";

const Wholesale = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Trusted Partner in Organic Beauty
          </h1>
          <p className="text-lg">Since 2022</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed">
          We’ve spent 3 years perfecting the art of pure, organic skincare and haircare,
          earning the trust of 5000+ happy customers. Our products are 100% natural,
          free from harsh chemicals, and suitable for all skin & hair types with zero side effects.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Tailor-made products</li>
            <li>✔ Personalized packaging</li>
            <li>✔ Full design & printing services</li>
            <li>✔ 100% organic & result-driven</li>
            <li>✔ SLS-free, Paraben-free, Cruelty-free</li>
            <li>✔ Low MOQs & fast turnaround</li>
            <li>✔ Dedicated business assistant</li>
            <li>✔ No compromise on purity</li>
          </ul>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Customization Made Easy</h2>
        <p className="text-gray-600 mb-4">
          Mix & match ingredients, design your packaging, and brand it your way.
          We provide end-to-end white label support for resellers and businesses.
        </p>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your Brand Together</h2>
        <p className="mb-4">📲 WhatsApp Orders: <strong>8870199716</strong></p>
        <a
          href="https://www.instagram.com/_luckyaura?igsh=Njl6NmN2MWw2Z3Bx"
          target="_blank"
          rel="noreferrer"
          className="text-green-400 underline"
        >
          Follow us on Instagram
        </a>
      </section>

    </div>
  );
};

export default Wholesale;
