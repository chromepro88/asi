"use client";
import React, { useEffect, useState } from 'react';

interface PhoneAnimationProps {
  className?: string;
}

const PhoneAnimation: React.FC<PhoneAnimationProps> = ({ className = '' }) => {
  const [messageOffset, setMessageOffset] = useState(20); // Start messages below visible area
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Don't run animation when tab is hidden

    const interval = setInterval(() => {
      setMessageOffset(prev => {
        // Reset to start position when messages have scrolled too far
        if (prev <= -72) { // 12 messages * 6rem per message
          return 20;
        }
        return prev - 6; // Move by 6rem per scroll (4rem height + 2rem margin)
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

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

      {/* Phone Container */}
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

        {/* Messages Container */}
        <div className="messages-outer">
          <div 
            className="messages-inner"
            style={{ 
              transition: 'transform 0.4s cubic-bezier(0.5, 2, 0.5, 0.5)',
              transform: `translateY(${messageOffset}rem)` 
            }}
          >
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              Hi! Looking for 3BR condo in SG
              <span className="message-time">14:30</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Great! Budget and location?
              <span className="message-time">14:31</span>
            </div>
            
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              $1.5M, Orchard or Marina Bay
              <span className="message-time">14:32</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Found 12 properties! When to view?
              <span className="message-time">14:33</span>
            </div>
            
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              This weekend works!
              <span className="message-time">14:34</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Saturday 2pm and 4pm slots?
              <span className="message-time">14:35</span>
            </div>
            
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              Perfect! What amenities?
              <span className="message-time">14:36</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Pool, gym, security, parking
              <span className="message-time">14:37</span>
            </div>
            
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              Sounds great! Send details?
              <span className="message-time">14:38</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Will WhatsApp listings now 🏠
              <span className="message-time">14:39</span>
            </div>
            
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              Thanks! Looking forward to it
              <span className="message-time">14:40</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Welcome! Will confirm soon
              <span className="message-time">14:41</span>
            </div>

            {/* Repeat messages for continuous loop */}
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              Hi! Looking for 3BR condo in SG
              <span className="message-time">14:30</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Great! Budget and location?
              <span className="message-time">14:31</span>
            </div>
            
            <div className="message message-left" style={{ marginBottom: '2rem' }}>
              $1.5M, Orchard or Marina Bay
              <span className="message-time">14:32</span>
            </div>
            
            <div className="message message-right" style={{ marginBottom: '2rem' }}>
              Found 12 properties! When to view?
              <span className="message-time">14:33</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hand Wave Animation - Positioned to avoid phone overlap */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl hand-wave">
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

        /* Phone Container - Scaled down for better fit */
        .phone {
          position: relative;
          width: 18rem;
          height: 34rem;
          border: 0.6rem solid #333;
          border-radius: 3.2rem;
          background-color: #e5dcd5;
          overflow: visible;
          z-index: 1;
          margin-bottom: -3rem;
        }

        .phone:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          background-image: url(/pattern.png);
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
          z-index: -1;
        }

        /* Floating Icons Animation - Exact match from original */
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

        /* Messages Container - Centered within phone */
        .messages-outer {
          overflow: hidden;
          height: 30rem; /* Fit within 34rem phone height minus borders and padding */
          position: absolute;
          width: 16rem; /* Fit within 18rem phone width minus borders */
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .messages-inner {
          display: flex;
          flex-direction: column;
          will-change: transform;
        }

        /* Messages - Fit within phone container */
        .message {
          width: 14rem;
          height: 4rem;
          padding: 0.6rem 1rem;
          border-radius: 0.8rem;
          background: #fff;
          font-size: 0.9rem;
          text-align: left;
          box-shadow: 0 0.12rem 0 rgba(0, 0, 0, 0.05);
          z-index: 2;
          position: relative;
          opacity: 1;
        }

        .message-left {
          align-self: flex-start;
          margin-left: 0;
          background: #fff;
        }

        .message-right {
          align-self: flex-end;
          margin-right: 0;
          background: #dcf7c5;
        }

        .message-time {
          position: absolute;
          bottom: 0.3rem;
          right: 0.8rem;
          font-size: 0.7rem;
          color: #73838c;
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
            height: 30rem;
          }
          
          .messages-outer {
            width: 14rem;
            height: 26rem;
            left: 50%;
            transform: translateX(-50%);
          }
          
          .message {
            width: 12rem;
            height: 3.5rem;
            font-size: 0.8rem;
            padding: 0.5rem 0.8rem;
          }
          
          .message-time {
            font-size: 0.6rem;
            bottom: 0.2rem;
            right: 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .phone {
            width: 14rem;
            height: 28rem;
          }
          
          .messages-outer {
            width: 12rem;
            height: 24rem;
            left: 50%;
            transform: translateX(-50%);
          }
          
          .message {
            width: 10rem;
            height: 3rem;
            font-size: 0.7rem;
            padding: 0.4rem 0.6rem;
          }
          
          .message-time {
            font-size: 0.5rem;
            bottom: 0.1rem;
            right: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PhoneAnimation;