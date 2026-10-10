import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '../components/BrandIcons';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      desc: 'Direct partner inbox',
      value: 'offical@skywebitsolutions.com',
      link: 'mailto:offical@skywebitsolutions.com',
      color: '#1800ad',
      bg: '#f0f0ff'
    },
    {
      icon: Phone,
      title: 'Call Us',
      desc: 'Mon-Fri from 9am to 6pm IST',
      value: '+91 91214 28210',
      link: 'tel:+919121428210',
      color: '#059669',
      bg: '#ecfdf5'
    },
    {
      icon: MapPin,
      title: 'Visit HQ',
      desc: 'Srinivasa Classic, Geetha Nagar',
      value: 'Malkajgiri, Secunderabad',
      link: '#map-section',
      color: '#1F07BF',
      bg: '#fffbeb'
    },
    {
      icon: InstagramIcon,
      title: 'Follow Us',
      desc: 'Product & culture updates',
      value: '@skyweb_dev',
      link: 'https://instagram.com/skyweb_dev',
      color: '#e11d48',
      bg: '#fff1f2'
    },
    {
      icon: LinkedinIcon,
      title: 'Connect',
      desc: 'Company & careers on LinkedIn',
      value: 'Skyweb IT Solutions',
      link: 'https://www.linkedin.com/company/skyweb-it-solutions-private-limited/posts/?feedView=all',
      color: '#0077b5',
      bg: '#f0f9ff'
    },
    {
      icon: WhatsappIcon,
      title: 'WhatsApp Us',
      desc: 'Instant engineer response',
      value: '+91 91214 28210 (WhatsApp)',
      link: 'https://wa.me/919121428210',
      color: '#25D366',
      bg: '#f0fdf4'
    }
  ];

  return (
    <div className="light-canvas" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      {/* HEADER SECTION */}
      <div
        style={{
          padding: '70px 24px 80px',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '3.4rem',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '14px',
              letterSpacing: '-0.02em'
            }}
          >
            Get In Touch
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', fontWeight: '400', lineHeight: '1.6' }}>
            Let's architect something extraordinary. Initiate a project discovery session with our founding engineering partners.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: '48px auto 0', padding: '0 24px' }}>
        {/* CONTACT CARDS ROW */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '64px'
          }}
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <a
                key={idx}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="card-luxury"
                style={{
                  padding: '32px 20px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: method.bg,
                    color: method.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    border: `1px solid ${method.color}25`
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                  {method.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '14px', lineHeight: '1.4' }}>
                  {method.desc}
                </p>
                <span style={{ fontSize: '0.86rem', fontWeight: '700', color: '#1800ad', wordBreak: 'break-word' }}>
                  {method.value}
                </span>
              </a>
            );
          })}
        </div>

        {/* FIND US HERE MAP SECTION */}
        <div id="map-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-clean badge-amber" style={{ marginBottom: '10px' }}>
            PHYSICAL HEADQUARTERS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: '800',
              color: '#0f172a',
              marginTop: '6px',
              marginBottom: '12px'
            }}
          >
            Find Us Here
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '640px', margin: '0 auto 36px' }}>
            Visit our corporate headquarters at Srinivasa Classic, Geetha Nagar, Malkajgiri, Secunderabad.
          </p>

          {/* Interactive Real-Time Map Container */}
          <div
            className="card-luxury"
            style={{
              overflow: 'hidden',
              position: 'relative',
              height: '480px',
              backgroundColor: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '24px'
            }}
          >
            {/* Real-Time Google Maps Iframe */}
            <iframe
              title="Skyweb Secunderabad Corporate Headquarters"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '480px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=G4+%26+G5,+Srinivasa+Classic,+Geetha+Nagar,+Malkajgiri,+Secunderabad,+Telangana+500047&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />

            {/* Custom Location Overlay Card */}
            <div className="map-location-overlay">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1800ad', fontWeight: '800', fontSize: '0.95rem', marginBottom: '6px' }} className="location-title">
                <MapPin size={18} color="#1800ad" />
                <span>Skyweb Corporate HQ</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.55', marginBottom: '10px' }} className="location-address">
                G4 &amp; G5, Srinivasa Classic, Geetha Nagar, Malkajgiri, Secunderabad, Telangana 500047
              </div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                <Clock size={14} />
                <span>Office Open: Mon–Fri (9:00 AM – 6:00 PM IST)</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=G4+%26+G5,+Srinivasa+Classic,+Geetha+Nagar,+Malkajgiri,+Secunderabad,+Telangana+500047"
                target="_blank"
                rel="noreferrer"
                className="btn-primary-blue"
                style={{
                  fontSize: '0.78rem',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none'
                }}
              >
                <span>Get Live Directions</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
