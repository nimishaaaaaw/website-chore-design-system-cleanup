import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, CheckCheck, Package } from 'lucide-react';

export const WhatsAppMockup = () => {
  const [step, setStep] = useState(0);
  const [loopKey, setLoopKey] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        setStep(1);
        await new Promise(r => setTimeout(r, 1800)); // Wait before 'tap'
        if(!isMounted) break; setStep(2); // Patient Reply
        await new Promise(r => setTimeout(r, 1500));
        if(!isMounted) break; setStep(3); // Invoice
        await new Promise(r => setTimeout(r, 2800)); // Wait before 'tap' Pay
        if(!isMounted) break; setStep(4); // Payment Success
        await new Promise(r => setTimeout(r, 2000));
        if(!isMounted) break; setStep(5); // Dispatch
        await new Promise(r => setTimeout(r, 5000));
        
        // Reset loop
        setStep(0);
        setLoopKey(k => k + 1);
        await new Promise(r => setTimeout(r, 600));
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [step]);

  return (
    <div className="w-full max-w-[280px] bg-[#f0f2f5] border-[8px] border-slate-800 rounded-[2.5rem] shadow-card-lg relative z-10 overflow-hidden flex flex-col h-[500px]" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 inset-x-0 flex justify-center z-30">
        <div className="w-24 h-5 bg-slate-800 rounded-b-xl"></div>
      </div>

      {/* WhatsApp Header */}
      <div className="bg-[#008069] pt-7 pb-2.5 px-3 flex items-center gap-3 relative z-20 shadow-md">
        <div className="flex items-center gap-1">
          <ArrowLeft className="w-5 h-5 text-white" />
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#008069] text-xs font-bold">YC</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-white text-[13px] font-bold flex items-center gap-1.5 leading-tight">
            Your Clinic <CheckCircle2 className="w-3 h-3 text-white fill-white/20" />
          </div>
          <div className="text-white/80 text-[10px] leading-tight">Official business account</div>
        </div>
      </div>

      {/* Chat Area (Auto-scrolling) */}
      <div key={loopKey} ref={chatRef} className="flex-1 bg-[#efeae2] p-3 flex flex-col gap-2.5 overflow-y-auto hide-scrollbar relative z-10 pb-6">
        {/* Abstract Chat Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000000 0.5px, transparent 0.5px)", backgroundSize: "16px 16px" }}></div>
        
        {/* Date Pill */}
        <div className="flex justify-center mt-1 mb-2">
          <span className="bg-white/70 backdrop-blur-sm text-[#667781] text-[10px] px-3 py-1 rounded-lg relative z-10 shadow-sm uppercase font-medium">Today</span>
        </div>

        {/* 1: Automated Bot Message with Modern WhatsApp Buttons */}
        {step >= 1 && (
          <motion.div 
            initial={{ opacity: 0, x: -10, scale: 0.95, transformOrigin: 'top left' }} animate={{ opacity: 1, x: 0, scale: 1 }} 
            className="bg-white rounded-xl rounded-tl-none shadow-sm self-start w-[92%] relative z-10 flex flex-col border border-black/5"
          >
            {/* WhatsApp Bubble Tail (Left) */}
            <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            
            <div className="p-3 pb-2">
              <div className="text-[12.5px] text-[#111b21] leading-relaxed break-words">
                Hi! Your 30-day course of <span className="font-bold text-[#008069]">Telmisartan 40mg</span> is ending soon. 
                <br/><br/>
                Would you like us to schedule your home delivery for tomorrow?
              </div>
              <div className="text-[9px] text-[#667781] text-right mt-1.5">10:42 AM</div>
            </div>
            
            {/* Interactive Buttons */}
            <div className="border-t border-black/5 flex flex-col mt-1 overflow-hidden rounded-b-xl">
              <div className="py-2.5 text-center text-[13px] font-bold text-[#0685fa] border-b border-black/5 relative overflow-hidden cursor-default hover:bg-black/[0.02]">
                {/* Simulated tap flash effect just before moving to step 2 */}
                {step === 1 && (
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: [0, 0.1, 0] }} transition={{ delay: 1.6, duration: 0.2 }}
                     className="absolute inset-0 bg-black"
                   />
                )}
                Confirm Delivery
              </div>
              <div className="py-2.5 text-center text-[13px] font-medium text-[#0685fa] cursor-default hover:bg-black/[0.02]">
                Modify Order
              </div>
            </div>
          </motion.div>
        )}
      
        {/* 2: Patient Reply (Result of tapping the button) */}
        {step >= 2 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, transformOrigin: 'bottom right' }} animate={{ opacity: 1, scale: 1 }} 
            className="bg-[#dcf8c6] rounded-xl rounded-tr-none p-2 px-3 self-end shadow-sm relative z-10 flex items-end gap-2 mt-1 border border-black/5"
          >
            {/* WhatsApp Bubble Tail (Right) */}
            <div className="absolute top-0 -right-2 w-3 h-3 bg-[#dcf8c6]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}></div>
            
            <span className="text-[13.5px] text-[#111b21] pb-1">Confirm Delivery</span>
            <div className="flex items-center gap-0.5 pb-1">
              <span className="text-[9px] text-[#667781] opacity-70">10:45 AM</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
            </div>
          </motion.div>
        )}

        {/* 3: Rich Confirmation & Bill Message */}
        {step >= 3 && (
          <motion.div 
            initial={{ opacity: 0, x: -10, scale: 0.95, transformOrigin: 'top left' }} animate={{ opacity: 1, x: 0, scale: 1 }} 
            className="bg-white rounded-xl rounded-tl-none p-2.5 shadow-sm self-start w-[92%] relative z-10 mt-2 border border-black/5"
          >
             {/* WhatsApp Bubble Tail (Left) */}
             <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

            <div className="text-[12.5px] text-[#111b21] leading-relaxed mb-3">
              ✅ <span className="font-bold text-[#008069]">Order Confirmed!</span><br/>
              Your medicines will arrive by 5 PM.
            </div>
            
            {/* Invoice Card embedded in message */}
            <div className="bg-slate-50 rounded-xl border border-black/5 overflow-hidden">
              <div className="p-3 border-b border-black/5 bg-black/[0.01]">
                <div className="text-[10px] text-[#667781] uppercase tracking-wider mb-1.5 font-bold">Invoice Details</div>
                <div className="flex justify-between items-center">
                    <span className="text-[13px] text-[#111b21] font-medium">Total Amount</span>
                    <span className="text-[14px] text-[#008069] font-bold">₹850</span>
                </div>
              </div>
              <div className="flex divide-x divide-black/5 relative">
                {/* Simulated tap on "Pay Now" just before step 4 */}
                {step === 3 && (
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: [0, 0.1, 0] }} transition={{ delay: 2.6, duration: 0.2 }}
                     className="absolute inset-y-0 right-0 w-1/2 bg-black"
                   />
                )}
                <div className="flex-1 py-2.5 text-center text-[12.5px] font-bold text-[#0685fa] cursor-default active:bg-black/5">View Bill</div>
                <div className="flex-1 py-2.5 text-center text-[12.5px] font-bold text-[#0685fa] cursor-default active:bg-black/5">Pay Now</div>
              </div>
            </div>

            <div className="text-[9px] text-[#667781] text-right mt-1.5">10:45 AM</div>
          </motion.div>
        )}

        {/* 4: Payment Success */}
        {step >= 4 && (
          <motion.div 
             initial={{ opacity: 0, x: -10, scale: 0.95, transformOrigin: 'top left' }} animate={{ opacity: 1, x: 0, scale: 1 }}
             className="bg-white rounded-xl rounded-tl-none p-2.5 shadow-sm self-start w-[85%] relative z-10 mt-1 border border-black/5"
          >
             {/* WhatsApp Bubble Tail (Left) */}
             <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

             <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-[12px] font-bold text-emerald-600">Payment Successful</span>
             </div>
             <div className="text-[11px] text-[#111b21] leading-normal">₹850 paid via UPI</div>
             <div className="text-[9px] text-[#667781] text-right mt-1">10:46 AM</div>
          </motion.div>
        )}

        {/* 5: Dispatch Widget */}
        {step >= 5 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl rounded-tl-none p-1 shadow-sm self-start w-[92%] relative z-10 mt-1 border border-black/5"
          >
             {/* WhatsApp Bubble Tail (Left) */}
             <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <Package className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-emerald-600 tracking-tight">Dispatched</div>
                <div className="text-[10px] text-slate-600 font-medium mt-0.5 leading-normal">Arriving today by 5 PM</div>
              </div>
            </div>
            <div className="text-[9px] text-[#667781] text-right mt-1 px-2 pb-1">10:48 AM</div>
          </motion.div>
        )}
      </div>
    </div>

  );
};
