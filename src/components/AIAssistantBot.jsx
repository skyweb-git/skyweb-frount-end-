import React, { useState } from 'react';
import { Bot, X, Send, ArrowRight } from 'lucide-react';

export default function AIAssistantBot({ setActivePage, onOpenQuoteModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm SkyBot, Skyweb's executive concierge. How can we assist your engineering or product strategy today?"
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  const quickPrompts = [
    {
      q: 'Why partner with Skyweb over typical agencies?',
      a: 'Most agencies deliver bloated templates and charge for idle billing hours. Skyweb engineers clean, modular, high-throughput systems with zero legacy debt, daily staging observability, and full IP ownership.'
    },
    {
      q: "What is your typical project delivery timeline?",
      a: "Accelerated production MVPs deploy in 2–5 days. Custom enterprise architectures and bespoke digital ecosystems typically ship within 1–3 weeks under strict milestone tracking."
    },
    {
      q: 'Do we own 100% of the source code?',
      a: 'Always. You maintain 100% intellectual property ownership of your repositories, deployment keys, Docker configs, and design system tokens upon milestone completion.'
    },
    {
      q: 'How do I start a project with Skyweb?',
      a: "Click 'Initiate Project' in the header or use our interactive Project Builder on the Contact page. You can also connect directly with our founding team via phone/WhatsApp at +91 91214 28210 or email offical@skywebitsolutions.com."
    }
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputVal('');

    setTimeout(() => {
      const match = quickPrompts.find(
        (p) => p.q.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes(p.q.toLowerCase())
      );

      const botReply = match
        ? match.a
        : `Understood. For a tailored architectural assessment regarding "${query}", our founders are ready to review your requirements. Would you like to initiate a project scope?`;

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 350);
  };

  return (
    <>
      {/* Floating Trigger */}
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '24px',
          zIndex: 950
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="animate-float-soft"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.2s ease'
          }}
          title="Skyweb Assistant"
        >
          {/* Crisp Bot Icon */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#f0f0ff',
              color: '#1800ad',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Bot size={22} />
          </div>

          {/* Green Online Dot */}
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '12px',
              height: '12px',
              backgroundColor: '#059669',
              borderRadius: '50%',
              border: '2px solid #ffffff'
            }}
          />
        </button>
      </div>

      {/* Flyout Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '148px',
            right: '24px',
            width: '380px',
            maxWidth: 'calc(100vw - 48px)',
            height: '520px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            boxShadow: '0 25px 60px rgba(15, 23, 42, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 960,
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: '#1800ad',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '0.92rem', color: '#0f172a' }}>
                  SkyBot Concierge
                </div>
                <div style={{ fontSize: '0.72rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#059669' }} />
                  Online • Enterprise Ready
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  backgroundColor: m.sender === 'user' ? '#0f172a' : '#f1f5f9',
                  color: m.sender === 'user' ? '#ffffff' : '#1e293b',
                  fontSize: '0.85rem',
                  lineHeight: '1.55',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                }}
              >
                {m.text}
              </div>
            ))}

            {/* Quick Suggestions */}
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                SUGGESTED TOPICS:
              </span>
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p.q)}
                  style={{
                    textAlign: 'left',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    color: '#334155',
                    fontSize: '0.78rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#eff6ff';
                    e.currentTarget.style.borderColor = '#bfdbfe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  ⚡ {p.q}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Action Footer */}
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '0.74rem', color: '#64748b' }}>Need an accurate proposal?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuoteModal();
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#1800ad',
                fontWeight: '700',
                fontSize: '0.76rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Build Scope</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '12px',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about our capabilities..."
              style={{
                flex: 1,
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '9px 14px',
                color: '#0f172a',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#0f172a',
                border: 'none',
                borderRadius: '10px',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
