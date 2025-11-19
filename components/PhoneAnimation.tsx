"use client";
import React, { useEffect, useRef, useState } from 'react';

interface PhoneAnimationProps {
  className?: string;
}

interface Message {
  type: 'user' | 'bot';
  text?: string;
  delay: number;
  time: string;
  readReceipt?: boolean;
  edited?: boolean;
  variant?: string;
  image?: string;
  alt?: string;
}

const PhoneAnimation: React.FC<PhoneAnimationProps> = ({ className = '' }) => {
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const typingIndicatorRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const conversation: Message[] = [
    {
      type: 'user',
      delay: 1500,
      time: '10:35 AM',
      readReceipt: true,
      text: "Hi! I'm looking to buy a property in Singapore. Can you help me find some options?"
    },
    {
      type: 'bot',
      text: "Hi! I'd be happy to help you find your dream property in Singapore! 🏙️\n\nWhat's your budget range and preferred locations?",
      delay: 2000,
      time: '10:35 AM'
    },
    {
      type: 'user',
      text: "Budget around $1.5-2 million. Interested in District 9, 10, or 15. Need 3 bedrooms, minimum 1200 sqft.",
      delay: 1800,
      time: '10:35 AM',
      readReceipt: true
    },
    {
      type: 'bot',
      text: "Great choices! Those are prime districts. I found some excellent matches for you:\n\n📍 District 10 (Tanglin)\n- 3BR, 1350 sqft, $1.68M\n- Near Orchard MRT, top schools\n\n📍 District 9 (River Valley)\n- 3BR, 1250 sqft, $1.55M\n- 5 mins to Great World City",
      delay: 2500,
      time: '10:35 AM'
    },
    {
      type: 'user',
      delay: 2000,
      time: '10:35 AM',
      readReceipt: true,
      variant: 'image-msg',
      image: 'https://sg1-cdn.pgimgs.com/listing/60113449/UPHO.156518827.V800/Zyon-Grand-Alexandra-Commonwealth-Singapore.jpg',
      alt: 'Zyon Grand Singapore property'
    },
    {
      type: 'bot',
      text: "Beautiful choice! The Tanglin property is stunning.\n\nKey features:\n✅ Renovated kitchen\n✅ Marble flooring\n✅ Balcony with city views\n✅ Freehold tenure\n\nWhen would you like to view?",
      delay: 2500,
      time: '10:36 AM'
    },
    {
      type: 'user',
      text: "This Saturday 2PM works! Can we also see the River Valley property after?",
      delay: 1800,
      time: '10:36 AM',
      readReceipt: true
    },
    {
      type: 'bot',
      text: "Perfect! I've scheduled both viewings:\n\n🗓️ Saturday, 2:00 PM - Tanglin\n🗓️ Saturday, 3:30 PM - River Valley\n\nI'll send you the addresses!",
      delay: 2000,
      time: '10:36 AM'
    }
  ];

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const playAnimation = async () => {
    if (isPlaying) return;

    setIsPlaying(true);
    setMessages([]);

    for (let i = 0; i < conversation.length; i++) {
      const message = conversation[i];

      if (message.type === 'bot') {
        setShowTyping(true);
        await delay(message.delay);
        setShowTyping(false);
      } else {
        await delay(800);
      }

      setMessages(prev => [...prev, message]);
      await delay(500);
    }

    setIsPlaying(false);
  };

  useEffect(() => {
    // Auto-play animation on mount
    const timer = setTimeout(() => {
      playAnimation();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, showTyping]);

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-[500px] py-8 ${className}`}>
      {/* Background Circles */}
      <div className="circles-container">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
      </div>

      {/* Phone Container - WhatsApp Style */}
      <div className="phone">
        {/* Floating Icons */}
        <div className="hero-icon hero-icon-1">
          <img src="/icon-googlecalendar.svg" alt="icon google calendar" width="48" height="48" />
        </div>
        <div className="hero-icon hero-icon-2">
          <img src="/icon-openai.svg" alt="icon openai" width="48" height="48" />
        </div>
        <div className="hero-icon hero-icon-3">
          <img src="/icon-googlesheets.svg" alt="icon googlesheets" width="48" height="48" />
        </div>
        <div className="hero-icon hero-icon-4">
          <img src="/icon-whatsapp.svg" alt="icon whatsapp" width="48" height="48" />
        </div>

        {/* Phone Screen Wrapper */}
        <div className="phone-screen">
        {/* Status Bar */}
        <div className="status-bar">
          <div className="time">10:35</div>
          <div className="status-right">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-three-quarters"></i>
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className="wa-header">
          <div className="back-btn">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="profile-info">
            <div className="avatar">
              <img src="https://i.pravatar.cc/150?u=mom" alt="Profile" />
            </div>
            <div className="contact-text">
              <span className="contact-name">Property Agent</span>
              <span className="contact-status">tap here for contact info</span>
            </div>
          </div>
          <div className="header-actions">
            <i className="fas fa-video"></i>
            <i className="fas fa-phone"></i>
          </div>
        </div>

        {/* Chat Content */}
        <div className="chat-content" ref={chatMessagesRef}>
          {messages.map((message, index) => {
            if (message.variant === 'image-msg') {
              return (
                <div key={index} className={`message ${message.type === 'user' ? 'sent' : 'received'} image-msg`}>
                  <img src={message.image} alt={message.alt} />
                  <div className="image-overlay">
                    {message.time}
                    {message.readReceipt && (
                      <i className="fas fa-check-double blue-tick" style={{ color: 'white', marginLeft: '3px' }}></i>
                    )}
                  </div>
                </div>
              );
            }
            
            return (
              <div key={index} className={`message ${message.type === 'user' ? 'sent' : 'received'}`}>
                {message.text?.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
                {message.edited && <span className="edited">Edited</span>}
                <span className="meta">
                  {message.time}
                  {message.readReceipt && (
                    <i className="fas fa-check-double blue-tick"></i>
                  )}
                </span>
              </div>
            );
          })}
        </div>

        {/* Typing Indicator */}
        {showTyping && (
          <div className="typing-indicator" ref={typingIndicatorRef}>
            <div className="typing-bubbles">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </div>
          </div>
        )}

        {/* Footer Input */}
        <div className="wa-footer">
          <div className="plus-btn">
            <i className="fas fa-plus"></i>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Message" readOnly />
            <i className="far fa-sticky-note sticker-btn"></i>
          </div>
          <div className="right-actions">
            <i className="fas fa-camera"></i>
            <i className="fas fa-microphone"></i>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="home-indicator"></div>
        </div>
      </div>

      {/* Hand Wave Animation */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl hand-wave z-10">
        👋
      </div>

      <style jsx>{`
        /* Background Circles */
        .circles-container {
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .circle {
          position: absolute;
          border: 0.1rem solid rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .circle-1 {
          width: 5rem;
          height: 5rem;
          border: 0.1rem solid rgba(0, 0, 0, 0.08);
        }

        .circle-2 {
          width: 25rem;
          height: 25rem;
          border: 0.1rem solid rgba(0, 0, 0, 0.07);
        }

        .circle-3 {
          width: 45rem;
          height: 45rem;
          border: 0.1rem solid rgba(0, 0, 0, 0.06);
        }

        .circle-4 {
          width: 65rem;
          height: 65rem;
          border: 0.1rem solid rgba(0, 0, 0, 0.05);
        }

        .circle-5 {
          width: 85rem;
          height: 85rem;
          border: 0.1rem solid rgba(0, 0, 0, 0.04);
        }

        /* Phone Container - WhatsApp iOS Style */
        .phone {
          position: relative;
          width: 18rem;
          height: 36rem;
          border: 0.6rem solid #333;
          border-radius: 3.2rem;
          background-color: #efe6dd;
          background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
          background-size: 400px;
          overflow: visible;
          z-index: 1;
          margin-bottom: -3rem;
          display: flex;
          flex-direction: column;
        }
        
        .phone > *:not(.hero-icon) {
          position: relative;
          z-index: 2;
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 2.6rem;
          display: flex;
          flex-direction: column;
        }

        /* Status Bar */
        .status-bar {
          height: 2rem;
          background: #f6f6f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
          font-size: 0.7rem;
          font-weight: 600;
          color: #000;
          z-index: 20;
        }

        .status-right {
          display: flex;
          gap: 0.3rem;
          font-size: 0.65rem;
        }

        .status-right i {
          margin-left: 0.25rem;
          font-size: 0.6rem;
        }

        /* WhatsApp Header */
        .wa-header {
          height: 3rem;
          background-color: #f6f6f6;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          padding: 0 0.5rem;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .back-btn {
          color: #007aff;
          font-size: 1.5rem;
          padding-right: 0.3rem;
          cursor: pointer;
          line-height: 1;
        }

        .profile-info {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          overflow: hidden;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #000;
          line-height: 1;
        }

        .contact-status {
          font-size: 0.6rem;
          color: #8e8e93;
          margin-top: 0.1rem;
        }

        .header-actions {
          display: flex;
          gap: 0.8rem;
        }

        .header-actions i {
          color: #007aff;
          font-size: 1rem;
          cursor: pointer;
          font-weight: 300;
        }

        /* Chat Content Area */
        .chat-content {
          flex: 1;
          overflow-y: auto;
          padding: 0.5rem 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .chat-content::-webkit-scrollbar {
          display: none;
        }

        /* Messages */
        .message {
          max-width: 75%;
          padding: 0.4rem 0.6rem 0.5rem 0.6rem;
          border-radius: 0.8rem;
          font-size: 0.8rem;
          line-height: 1.3;
          position: relative;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          margin-bottom: 0.15rem;
          animation: fadeInUp 0.3s ease;
          word-wrap: break-word;
        }

        .received {
          background-color: #ffffff;
          align-self: flex-start;
          border-bottom-left-radius: 0.25rem;
        }

        .sent {
          background-color: #dcf8c6;
          align-self: flex-end;
          border-bottom-right-radius: 0.25rem;
        }

        /* Image Messages */
        .image-msg {
          padding: 0.25rem;
          border-radius: 0.8rem;
        }

        .image-msg img {
          width: 100%;
          border-radius: 0.7rem;
          display: block;
        }

        .image-overlay {
          position: absolute;
          bottom: 0.5rem;
          right: 0.75rem;
          color: white;
          font-size: 0.6rem;
          background: rgba(0,0,0,0.3);
          padding: 0.1rem 0.3rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }

        /* Meta (Time & Ticks) */
        .meta {
          float: right;
          font-size: 0.6rem;
          color: rgba(0,0,0,0.45);
          margin-top: 0.3rem;
          margin-left: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.15rem;
        }

        .blue-tick {
          color: #34b7f1;
          font-size: 0.55rem;
        }

        .edited {
          font-size: 0.6rem;
          color: rgba(0,0,0,0.45);
          margin-left: 0.25rem;
          font-style: italic;
        }

        /* Typing Indicator */
        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.6rem;
          margin-bottom: 0.2rem;
          animation: fadeInUp 0.3s ease;
          position: absolute;
          bottom: 4rem;
          left: 0.6rem;
        }

        .typing-bubbles {
          background: white;
          padding: 0.5rem 0.7rem;
          border-radius: 0.8rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          display: flex;
          gap: 0.2rem;
        }

        .typing-bubbles .bubble {
          width: 0.4rem;
          height: 0.4rem;
          background: #9e9e9e;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-bubbles .bubble:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-bubbles .bubble:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Footer Input */
        .wa-footer {
          background-color: #f6f6f6;
          padding: 0.4rem 0.6rem 1.2rem 0.6rem;
          display: flex;
          align-items: flex-end;
          border-top: 1px solid #ddd;
        }

        .plus-btn {
          color: #007aff;
          font-size: 1rem;
          padding: 0.3rem 0.5rem 0.3rem 0;
          cursor: pointer;
        }

        .plus-btn i {
          font-size: 1.2rem;
        }

        .input-box {
          flex: 1;
          background: white;
          border-radius: 1rem;
          border: 1px solid #ddd;
          padding: 0.4rem 0.6rem;
          display: flex;
          align-items: center;
          min-height: 1.8rem;
        }

        .input-field {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.8rem;
          background: transparent;
        }

        .sticker-btn {
          margin-left: 0.4rem;
          font-size: 0.9rem;
          opacity: 0.7;
          color: #333;
        }

        .right-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-left: 0.6rem;
          padding-bottom: 0.3rem;
        }

        .right-actions i {
          font-size: 1rem;
          color: #007aff;
          cursor: pointer;
        }

        /* Home Indicator */
        .home-indicator {
          position: absolute;
          bottom: 0.4rem;
          left: 50%;
          transform: translateX(-50%);
          width: 6.5rem;
          height: 0.25rem;
          background-color: #000;
          border-radius: 0.5rem;
          z-index: 30;
        }

        /* Floating Icons Animation */
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(10px) rotate(-2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .hero-icon {
          position: absolute;
          animation: float 6s ease-in-out infinite;
        }

        .hero-icon-1 {
          top: -3rem;
          left: -9rem;
          animation-delay: 0s;
        }

        .hero-icon-2 {
          top: 12rem;
          left: -15rem;
          animation-delay: -1.5s;
        }

        .hero-icon-3 {
          top: -3rem;
          right: -9rem;
          animation-delay: -3s;
        }

        .hero-icon-4 {
          top: 12rem;
          right: -15rem;
          animation-delay: -4.5s;
        }

        /* Hand Wave Animation */
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .hand-wave {
          display: inline-block;
          transform-origin: 70% 70%;
          animation: wave 1s ease-in-out infinite;
        }

        /* Mobile Responsive */
        @media (max-width: 767px) {
          .hero-icon {
            display: none;
          }
          
          .phone {
            width: 16rem;
            height: 32rem;
          }

          .status-bar {
            height: 1.8rem;
            font-size: 0.65rem;
          }

          .wa-header {
            height: 2.5rem;
            padding: 0 0.4rem;
          }

          .avatar {
            width: 1.8rem;
            height: 1.8rem;
          }

          .contact-name {
            font-size: 0.75rem;
          }

          .contact-status {
            font-size: 0.55rem;
          }

          .message {
            font-size: 0.75rem;
            padding: 0.35rem 0.5rem 0.45rem 0.5rem;
          }

          .meta {
            font-size: 0.55rem;
          }

          .hand-wave {
            font-size: 2.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .phone {
            width: 14rem;
            height: 28rem;
          }

          .status-bar {
            height: 1.6rem;
            font-size: 0.6rem;
          }

          .wa-header {
            height: 2.2rem;
            padding: 0 0.3rem;
          }

          .avatar {
            width: 1.6rem;
            height: 1.6rem;
          }

          .contact-name {
            font-size: 0.7rem;
          }

          .contact-status {
            font-size: 0.5rem;
          }

          .message {
            font-size: 0.7rem;
            padding: 0.3rem 0.4rem 0.4rem 0.4rem;
          }

          .meta {
            font-size: 0.5rem;
          }

          .input-field {
            font-size: 0.7rem;
          }

          .hand-wave {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PhoneAnimation;