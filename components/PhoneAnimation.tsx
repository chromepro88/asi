"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './PhoneAnimation.module.css';
import {
  Signal,
  Wifi,
  BatteryMedium,
  ChevronLeft,
  Video,
  Phone,
  CheckCheck,
  Plus,
  StickyNote,
  Camera,
  Mic
} from 'lucide-react';

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
      image: '/property-image.jpg',
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
      <div className={styles.circlesContainer}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
        <div className={`${styles.circle} ${styles.circle4}`}></div>
        <div className={`${styles.circle} ${styles.circle5}`}></div>
      </div>

      {/* Phone Container - WhatsApp Style */}
      <div className={styles.phone}>
        {/* Floating Icons */}
        <div className={`${styles.heroIcon} ${styles.heroIcon1}`}>
          <Image src="/icon-googlecalendar.svg" alt="icon google calendar" width={48} height={48} loading="lazy" />
        </div>
        <div className={`${styles.heroIcon} ${styles.heroIcon2}`}>
          <Image src="/icon-openai.svg" alt="icon openai" width={48} height={48} loading="lazy" />
        </div>
        <div className={`${styles.heroIcon} ${styles.heroIcon3}`}>
          <Image src="/icon-googlesheets.svg" alt="icon googlesheets" width={48} height={48} loading="lazy" />
        </div>
        <div className={`${styles.heroIcon} ${styles.heroIcon4}`}>
          <Image src="/icon-whatsapp.svg" alt="icon whatsapp" width={48} height={48} loading="lazy" />
        </div>

        {/* Phone Screen Wrapper */}
        <div className={styles.phoneScreen}>
        {/* Status Bar */}
        <div className={styles.statusBar}>
          <div className="time">10:35</div>
          <div className={styles.statusRight}>
            <Signal size={12} className="text-black" />
            <Wifi size={12} className="text-black" />
            <BatteryMedium size={12} className="text-black" />
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className={styles.waHeader}>
          <div className={styles.backBtn}>
            <ChevronLeft size={24} className="text-[#007aff]" />
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.avatar}>
              <Image src="/avatar-agent.jpg" alt="Profile" width={32} height={32} className="object-cover" loading="lazy" />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactName}>Property Agent</span>
              <span className={styles.contactStatus}>tap here for contact info</span>
            </div>
          </div>
          <div className={styles.headerActions}>
            <Video size={20} className="text-[#007aff]" />
            <Phone size={18} className="text-[#007aff]" />
          </div>
        </div>

        {/* Chat Content */}
        <div className={styles.chatContent} ref={chatMessagesRef}>
          {messages.map((message, index) => {
            if (message.variant === 'image-msg') {
              return (
                <div key={index} className={`${styles.message} ${message.type === 'user' ? styles.sent : styles.received} ${styles.imageMsg}`}>
                  <Image 
                    src={message.image!} 
                    alt={message.alt || 'Image'} 
                    width={200} 
                    height={150} 
                    className="w-full h-auto rounded-[0.7rem]"
                  />
                  <div className={styles.imageOverlay}>
                    {message.time}
                    {message.readReceipt && (
                      <CheckCheck size={10} className="text-[#34b7f1] ml-[3px]" />
                    )}
                  </div>
                </div>
              );
            }
            
            return (
              <div key={index} className={`${styles.message} ${message.type === 'user' ? styles.sent : styles.received}`}>
                {message.text?.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
                {message.edited && <span className={styles.edited}>Edited</span>}
                <span className={styles.meta}>
                  {message.time}
                  {message.readReceipt && (
                    <CheckCheck size={10} className="text-[#34b7f1]" />
                  )}
                </span>
              </div>
            );
          })}
          
          {/* Typing Indicator */}
          {showTyping && (
            <div className={styles.typingIndicator} ref={typingIndicatorRef}>
              <div className={styles.typingBubbles}>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Input */}
        <div className={styles.waFooter}>
          <div className={styles.plusBtn}>
            <Plus size={20} className="text-[#007aff]" />
          </div>
          <div className={styles.inputBox}>
            <input type="text" className={styles.inputField} placeholder="Message" readOnly />
            <StickyNote size={18} className="text-[#333] opacity-70 ml-2" />
          </div>
          <div className={styles.rightActions}>
            <Camera size={20} className="text-[#007aff]" />
            <Mic size={20} className="text-[#007aff]" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className={styles.homeIndicator}></div>
        </div>
      </div>

      {/* Hand Wave Animation */}
      <div className={styles.handWaveContainer}>
        <div className={`${styles.text4xl} ${styles.handWave}`}>
          👋
        </div>
      </div>
    </div>
  );
};

export default PhoneAnimation;