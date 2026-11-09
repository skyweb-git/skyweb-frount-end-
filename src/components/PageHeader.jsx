import React from 'react';

export default function PageHeader({ badge, title, subtitle, bgImage }) {
  return (
    <section className="bg-black text-white pt-36 pb-20 px-6 sm:px-8 border-b border-slate-800 relative overflow-hidden">
      {bgImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 filter blur-[0.5px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-500 max-w-4xl leading-tight mb-5 font-['DM_Sans']">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-blue-200 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
