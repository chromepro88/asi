import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(45deg, #f0f9ff 0%, #e0f2fe 100%)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#0066cc',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <span style={{ fontSize: '40px', color: 'white' }}>AI</span>
          </div>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1a1a1a',
            }}
          >
            AI Super
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #0066cc 0%, #0052a3 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            marginBottom: '30px',
            lineHeight: 1.1,
          }}
        >
          WhatsApp AI Chatbot
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '36px',
            color: '#4a5568',
            textAlign: 'center',
            marginBottom: '40px',
            maxWidth: '900px',
          }}
        >
          Singapore's #1 Business Automation Solution
        </div>

        {/* Key Features */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            maxWidth: '800px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '32px',
                marginBottom: '10px',
              }}
            >
              🚀
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0066cc',
              }}
            >
              40% Sales Boost
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '32px',
                marginBottom: '10px',
              }}
            >
              🤖
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0066cc',
              }}
            >
              24/7 Automation
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '32px',
                marginBottom: '10px',
              }}
            >
              ⚡
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0066cc',
              }}
            >
              5min Setup
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}