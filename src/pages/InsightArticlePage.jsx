import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight,
  BookOpen, 
  Sparkles, 
  Compass,
  ExternalLink,
  Maximize2,
  X
} from 'lucide-react';
import { insightsArticles, insightArticleBySlug } from '../data/insightsArticles';
import SubpageView from './SubpageView';

export default function InsightArticlePage({ onOpenModal }) {
  const { slug } = useParams();
  const article = insightArticleBySlug[slug];
  const [activeSection, setActiveSection] = useState(0);
  const [selectedClipping, setSelectedClipping] = useState(null);

  // SEO & Head Metadata
  useEffect(() => {
    if (!article) return undefined;

    const previousTitle = document.title;
    document.title = `${article.seoTitle || article.title} | SkyWeb Insights`;

    let descriptionTag = document.querySelector('meta[name="description"]');
    const createdDescriptionTag = !descriptionTag;
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    const previousDescription = descriptionTag.getAttribute('content');
    descriptionTag.setAttribute('content', article.metaDescription || article.description);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const createdCanonicalTag = !canonicalTag;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    const previousCanonical = canonicalTag.getAttribute('href');
    canonicalTag.setAttribute('href', article.canonicalUrl || `${window.location.origin}/insights/${article.slug}`);

    // Scroll to top on slug change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = previousTitle;
      if (previousDescription === null) descriptionTag.removeAttribute('content');
      else descriptionTag.setAttribute('content', previousDescription);
      if (createdDescriptionTag) descriptionTag.remove();
      if (previousCanonical === null) canonicalTag.removeAttribute('href');
      else canonicalTag.setAttribute('href', previousCanonical);
      if (createdCanonicalTag) canonicalTag.remove();
    };
  }, [article, slug]);

  if (!article) {
    return <SubpageView category="insights" onOpenModal={onOpenModal} />;
  }

  // Calculate currentIndex, prev & next articles for navigation
  const currentIndex = insightsArticles.findIndex((item) => item.slug === article.slug);
  const prevArticle = currentIndex > 0 ? insightsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < insightsArticles.length - 1 ? insightsArticles[currentIndex + 1] : null;

  // Filter 3 related articles
  const relatedArticles = insightsArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fafbfc] text-slate-900 font-['DM_Sans'] pt-32 sm:pt-36 pb-20">
      {/* ================= ARTICLE HEADER ================= */}
      <header className="max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.18] tracking-tight text-[#0f172a]">
          {article.title}
        </h1>
      </header>

      {/* ================= HERO COVER IMAGE (FULL UN-CROPPED DISPLAY) ================= */}
      <figure className="max-w-5xl mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm bg-gradient-to-b from-slate-50 to-slate-100/60 overflow-hidden flex items-center justify-center p-3 sm:p-6">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-auto max-w-full h-auto max-h-[820px] object-contain rounded-xl sm:rounded-2xl shadow-sm"
          />
        </div>
        {article.imageCaption && (
          <figcaption className="mt-3 text-center text-xs text-slate-500 italic max-w-2xl mx-auto">
            {article.imageCaption}
          </figcaption>
        )}
      </figure>

      {/* ================= 2-COLUMN EDITORIAL CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Sticky Left Sidebar (TOC & Advisory Quick Links) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-32 space-y-6">
              
              {/* External Source Link Box if applicable */}
              {article.externalSource && (
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded">
                    Official Press Source
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-2 leading-snug">
                    {article.externalSource.publisher}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {article.externalSource.edition} • {article.externalSource.date}
                  </p>
                  <a
                    href={article.externalSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-bold transition-all w-full justify-center shadow-xs"
                  >
                    <span>Read on The Hans India</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Table of Contents */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 pb-2 border-b border-slate-100">
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1.5" aria-label="Table of contents">
                  {article.sections.map((section, idx) => (
                    <a
                      key={idx}
                      href={`#section-${idx}`}
                      onClick={() => setActiveSection(idx)}
                      className={`block py-1.5 px-2.5 rounded-lg text-xs transition-colors leading-snug ${
                        activeSection === idx
                          ? 'bg-[#004AAD]/10 text-[#004AAD] font-bold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Reading Column */}
          <article className="lg:col-span-8 order-1 lg:order-2">
            {/* Lead Paragraph */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-10">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-800">
                {article.description}
              </p>
            </div>

            {/* In-depth Sections */}
            <div className="space-y-12 sm:space-y-14">
              {article.sections.map((section, idx) => (
                <section
                  key={idx}
                  id={`section-${idx}`}
                  className="scroll-mt-28"
                  onMouseEnter={() => setActiveSection(idx)}
                >
                  {/* Section Title */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight mb-2 tracking-tight">
                    {section.heading}
                  </h2>

                  {/* Section Subheading */}
                  {section.subheading && (
                    <p className="text-sm sm:text-base font-semibold text-[#004AAD] mb-5">
                      {section.subheading}
                    </p>
                  )}

                  {/* Paragraphs */}
                  <div className="space-y-5 text-slate-700 leading-relaxed text-base sm:text-[17px]">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Highlight Box if present */}
                  {section.highlightBox && (
                    <div className="mt-7">
                      {section.highlightBox.type === 'spotlight' && (
                        <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 shadow-xs">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#004AAD] mb-2">
                            <Sparkles className="w-4 h-4 text-[#004AAD]" />
                            <span>{section.highlightBox.title}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-700 font-medium">
                            {section.highlightBox.text}
                          </p>
                        </div>
                      )}

                      {section.highlightBox.type === 'quote' && (
                        <blockquote className="my-6 p-6 sm:p-7 rounded-2xl bg-slate-900 text-white border-l-4 border-[#004AAD] shadow-sm">
                          <p className="text-base sm:text-lg italic font-normal leading-relaxed text-slate-200">
                            "{section.highlightBox.text}"
                          </p>
                          <div className="mt-3 text-xs font-bold text-sky-400 uppercase tracking-wider">
                            — SkyWeb Engineering Philosophy
                          </div>
                        </blockquote>
                      )}

                      {section.highlightBox.type === 'framework' && section.highlightBox.points && (
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004AAD] mb-4 pb-2 border-b border-slate-100">
                            <Compass className="w-4 h-4 text-[#004AAD]" />
                            <span>{section.highlightBox.title}</span>
                          </div>
                          <div className="grid grid-cols-1 gap-3.5">
                            {section.highlightBox.points.map((point, ptIdx) => {
                              const [title, desc] = point.includes(':') 
                                ? point.split(':') 
                                : [null, point];
                              return (
                                <div key={ptIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#004AAD] mt-2 shrink-0" />
                                  <div>
                                    {title && <strong className="text-slate-900 font-bold">{title}: </strong>}
                                    <span className="text-slate-600 leading-relaxed">{desc || point}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Press Clippings Gallery (if article has newspaper clippings) */}
            {article.pressClippings && article.pressClippings.length > 0 && (
              <div className="mt-14 pt-10 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#004AAD]">Press Coverage Archive</span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">Regional Newspaper Clippings</h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">Click any clipping to enlarge</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {article.pressClippings.map((clip, cIdx) => (
                    <div
                      key={cIdx}
                      onClick={() => setSelectedClipping(clip)}
                      className="group cursor-pointer rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-[#004AAD]/50 hover:shadow-lg transition-all"
                    >
                      <div className="h-60 sm:h-64 bg-slate-50 flex items-center justify-center p-3 relative overflow-hidden">
                        <img
                          src={clip.image}
                          alt={clip.headline}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                          <span className="text-white text-xs font-bold inline-flex items-center gap-1.5 bg-black/75 px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                            <Maximize2 className="w-3.5 h-3.5 text-sky-400" /> Click to Enlarge Clipping
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-[#004AAD]">{clip.publication}</span>
                          <span className="text-slate-400 text-[11px]">{clip.date}</span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                          {clip.headline}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{clip.edition}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prev / Next Article Pagination */}
            <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/insights/${prevArticle.slug}`}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#004AAD]/40 hover:shadow-xs transition-all group flex flex-col justify-between"
                >
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-[#004AAD] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Previous Insight
                  </span>
                  <span className="mt-2 text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-[#004AAD]">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextArticle && (
                <Link
                  to={`/insights/${nextArticle.slug}`}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#004AAD]/40 hover:shadow-xs transition-all group flex flex-col justify-between text-right"
                >
                  <span className="inline-flex items-center justify-end gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-[#004AAD] transition-colors">
                    Next Insight <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="mt-2 text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-[#004AAD]">
                    {nextArticle.title}
                  </span>
                </Link>
              )}
            </div>
          </article>
        </div>
      </div>

      {/* ================= CLIPPING LIGHTBOX MODAL ================= */}
      {selectedClipping && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedClipping(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#004AAD]">
                  {selectedClipping.publication}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">{selectedClipping.headline}</h4>
                <p className="text-[11px] text-slate-500">{selectedClipping.edition} • {selectedClipping.date}</p>
              </div>
              <button
                onClick={() => setSelectedClipping(null)}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
                aria-label="Close clipping modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto p-4 max-h-[calc(90vh-100px)] flex justify-center bg-slate-100">
              <img
                src={selectedClipping.image}
                alt={selectedClipping.headline}
                className="max-w-full h-auto object-contain rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= RELATED INSIGHTS SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 mt-16 sm:mt-24 pt-12 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#004AAD]">Editorial Recommendations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-1">Related Technology Insights</h2>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004AAD] hover:text-[#003B8A]"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((related) => (
            <article
              key={related.slug}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col group hover:shadow-lg hover:border-[#004AAD]/30 transition-all"
            >
              <Link to={`/insights/${related.slug}`} className="block aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={related.image}
                  alt={related.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#004AAD]">
                    {related.category}
                  </span>
                  <span className="text-slate-400 text-[11px]">{related.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004AAD] transition-colors leading-snug mb-2">
                  <Link to={`/insights/${related.slug}`}>
                    {related.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-1">
                  {related.description}
                </p>
                <Link
                  to={`/insights/${related.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FINAL ENTERPRISE ADVISORY CALL TO ACTION ================= */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 mt-16 sm:mt-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-[#0a192f] to-[#002855] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Technology Without Boundaries
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
              Ready to architect your next digital initiative?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              Explore how SkyWeb IT Solutions helps enterprises and creative organizations design custom software, scale cloud environments, implement pragmatic AI, and engineer digital platforms.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenModal}
              className="px-7 py-3.5 rounded-full bg-[#004AAD] hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Our Practice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/insights"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center text-center"
            >
              Explore More Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
