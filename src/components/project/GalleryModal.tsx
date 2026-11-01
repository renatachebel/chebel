import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project } from '../../data/types';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '../ui/dialog';

interface GalleryModalProps {
  project: Project;
  galleryOpen: boolean;
  galleryIndex: number;
  onOpenChange: (open: boolean) => void;
  onPrevImage: () => void;
  onNextImage: () => void;
  onImageSelect: (index: number) => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  project,
  galleryOpen,
  galleryIndex,
  onOpenChange,
  onPrevImage,
  onNextImage,
  onImageSelect,
}) => {
  const images = project.images ?? [];

  useEffect(() => {
    if (!galleryOpen || images.length <= 1) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') onPrevImage();
      if (event.key === 'ArrowRight') onNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, images.length, onNextImage, onPrevImage]);

  if (!images.length) return null;

  return (
    <Dialog open={galleryOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="fixed inset-0 left-0 top-0 z-50 flex h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden border-0 bg-black p-0 shadow-none sm:rounded-none"
      >
        <DialogTitle className="sr-only">{project.title} image gallery</DialogTitle>

        <DialogClose
          className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/70 text-white backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:top-5 sm:h-12 sm:w-12"
          aria-label="Close gallery"
        >
          <X className="h-5 w-5" />
        </DialogClose>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-2 pt-2 sm:px-5 sm:pb-4 sm:pt-4 lg:px-8">
          <img
            src={images[galleryIndex]}
            alt={`${project.title} view ${galleryIndex + 1}`}
            className="h-full w-full select-none object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={onPrevImage}
                className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/65 text-white backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5 sm:h-12 sm:w-12"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={onNextImage}
                className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/65 text-white backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:h-12 sm:w-12"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        <div className="shrink-0 border-t border-white/15 bg-black px-3 py-2 sm:px-5 sm:py-3">
          <div className="mx-auto flex max-w-6xl items-center gap-3">
            <span className="w-12 shrink-0 text-center text-[0.65rem] tracking-[0.12em] text-white/60">
              {String(galleryIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            {images.length > 1 && (
              <div className="scrollbar-hidden flex min-w-0 flex-1 gap-2 overflow-x-auto py-1">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    onClick={() => onImageSelect(index)}
                    className={`relative h-10 w-14 shrink-0 overflow-hidden border transition-opacity sm:h-12 sm:w-16 ${
                      index === galleryIndex
                        ? 'border-white opacity-100'
                        : 'border-transparent opacity-45 hover:opacity-80'
                    }`}
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === galleryIndex ? 'true' : undefined}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
