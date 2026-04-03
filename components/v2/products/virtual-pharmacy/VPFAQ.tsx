'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const VPFAQ = () => {
  const faqs = [
    { q: "What happens if the 10-minute delivery is delayed?", a: <>If our rider is delayed, we automatically provide <strong className="text-slate-800 font-bold">Free Same-Day Home Delivery</strong> for the patient.</> },
    { q: "Is this legal?", a: <>Yes. MediKloud operates its own licensed retail pharmacies. We assume <strong className="text-slate-800 font-bold">100% of the legal and regulatory liability.</strong></> },
    { q: "How much does it cost the clinic?", a: <>Establishing a Virtual Pharmacy node costs <strong className="text-slate-800 font-bold">₹0.</strong> There are no setup fees, inventory costs, or monthly software charges.</> },
    { q: "How long does setup take?", a: <>We can go live in <strong className="text-slate-800 font-bold">7 days.</strong> This includes setting up your custom stock and training your staff on the free HMS.</> },
    { q: "Does this increase my staff’s workload?", a: <>No. Operationally, it is <strong className="text-slate-800 font-bold">Zero-Touch.</strong> Our hub handles the packing, the delivery, and the payments automatically.</> },
    { q: "What medicines do you stock?", a: <>We stock the <strong className="text-slate-800 font-bold">exact brands you prefer.</strong> We build a custom list for your clinic to guarantee 100% brand accuracy.</> },
    { q: "Do I need to hire a pharmacist?", a: <>No. MediKloud provides the licensed pharmacists within our local hubs to fulfill all your clinic's orders.</> },
    { q: "Who collects the patient payments?", a: <>MediKloud collects all payments directly via UPI or cash (handled by our riders). <strong className="text-slate-800 font-bold">The clinic does not handle cash.</strong></> },
    { q: "Is my patient data private?", a: <>Yes. All data is <strong className="text-slate-800 font-bold">100% encrypted and private.</strong> You own the patient relationship; we just provide the fulfillment.</> }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Frequently Asked Questions.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{faq.q}</h4>
              <div className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">{faq.a}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export { VPFAQ };
