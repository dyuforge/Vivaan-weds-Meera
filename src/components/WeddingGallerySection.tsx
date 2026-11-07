import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  Sparkles,
  Camera,
  MapPin,
} from 'lucide-react';
import { GalleryPhoto } from '../data/weddingData';
import { PeacockFeatherDivider, KundanCornerFiligree } from './OrnamentalSVGs';
import { WeddingArtScene } from './WeddingArtScene';

export const WeddingGallerySection: React.FC<{ photos: GalleryPhoto[] }> = ({ photos }) => {
  const [galleryItems, setGalleryItems] = useState<GalleryPhoto[]>(() => photos.slice(0, 5));
  const [failedImageIds, setFailedImageIds] = useState<Record<number, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [replacingPhotoId, setReplacingPhotoId] = useState<number | null>(null);

  useEffect(() => {
    setGalleryItems(photos.slice(0, 5));
  }, [photos]);

  const triggerReplacePhoto = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setReplacingPhotoId(id);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || replacingPhotoId === null) return;
    const objectUrl = URL.createObjectURL(file);
    setGalleryItems((prev) =>
      prev.map((item) => (item.id === replacingPhotoId ? { ...item, imageUrl: objectUrl } : item))
    );
    setFailedImageIds((prev) => ({ ...prev, [replacingPhotoId]: false }));
    setReplacingPhotoId(null);
  };

  return (
    <section id="gallery-section" className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelected} className="hidden" />

      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#10B981]/15 border border-[#E5C158]/45 text-xs font-sans uppercase tracking-[0.25em] text-[#FBF0C4]">
          <Camera className="w-3.5 h-3.5 text-[#34D399]" />
          <span>Falaknuma &amp; Chowmahalla Chronicles • 5 Signature Frames</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-champagne-foil mt-3">
          Royal Mayura Photo Gallery
        </h2>
        <PeacockFeatherDivider />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {galleryItems.map((photo, index) => {
          const gridSpanClass =
            index < 2 ? 'md:col-span-3 h-[350px] sm:h-[410px]' : 'md:col-span-2 h-[310px] sm:h-[350px]';
          return (
            <motion.div
              key={photo.id}
              whileHover={{ y: -8, scale: 1.015 }}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-t-[60px] rounded-b-3xl overflow-hidden border-2 border-[#E5C158]/65 bg-[#04241C] emerald-gold-glow cursor-pointer ${gridSpanClass}`}
            >
              <KundanCornerFiligree position="bottom-left" className="absolute bottom-2 left-2 z-20 w-10 h-10 opacity-85" />
              <KundanCornerFiligree position="bottom-right" className="absolute bottom-2 right-2 z-20 w-10 h-10 opacity-85" />

              {failedImageIds[photo.id] ? (
                <WeddingArtScene scene={photo.fallbackScene} className="w-full h-full" />
              ) : (
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  onError={() => setFailedImageIds((p) => ({ ...p, [photo.id]: true }))}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              <div className="absolute top-5 inset-x-5 z-20 flex items-center justify-between gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#02120E]/85 border border-[#E5C158]/60 text-[11px] font-sans font-semibold tracking-wider uppercase text-[#FBF0C4]">
                  {photo.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => triggerReplacePhoto(photo.id, e)}
                    className="px-2.5 py-1 rounded-full bg-[#02120E]/85 hover:bg-[#E5C158] text-[#FBF0C4] hover:text-[#031A15] border border-[#E5C158]/50 text-[11px] font-sans inline-flex items-center gap-1"
                  >
                    <Upload className="w-3 h-3" />
                    <span className="hidden sm:inline">Replace</span>
                  </button>
                  <span className="p-2 rounded-full bg-[#02120E]/85 border border-[#E5C158]/50 text-[#FBF0C4]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-14 bg-gradient-to-t from-[#02100C] via-[#031A15]/90 to-transparent">
                <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#34D399] uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  <span>{photo.dateLocation}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#F4FBF7] mt-0.5">{photo.title}</h3>
                <p className="text-xs sm:text-sm font-serif text-[#F4FBF7]/80 line-clamp-2 mt-1">{photo.caption}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && galleryItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-[#010B09]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#0A3C30] text-[#FBF0C4] border border-[#E5C158]"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
              }}
              className="absolute left-3 sm:left-8 z-50 p-3 rounded-full bg-[#031A15]/90 text-[#FBF0C4] border border-[#E5C158]/60"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
              }}
              className="absolute right-3 sm:right-8 z-50 p-3 rounded-full bg-[#031A15]/90 text-[#FBF0C4] border border-[#E5C158]/60"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border-2 border-[#E5C158] bg-[#031A15]"
            >
              <div className="relative h-[52vh] sm:h-[64vh] w-full bg-[#02100C]">
                {failedImageIds[galleryItems[lightboxIndex].id] ? (
                  <WeddingArtScene scene={galleryItems[lightboxIndex].fallbackScene} className="w-full h-full" />
                ) : (
                  <img
                    src={galleryItems[lightboxIndex].imageUrl}
                    alt={galleryItems[lightboxIndex].title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="p-5 sm:p-7 bg-[#031A15] border-t border-[#E5C158]/40 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#34D399] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Frame {lightboxIndex + 1} of {galleryItems.length}
                  </span>
                  <h3 className="font-display text-xl font-bold text-champagne-foil mt-1">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
