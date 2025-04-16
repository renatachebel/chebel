
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, ExternalLink, Home } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TumblrPost {
  id: string;
  timestamp: number;
  date: string;
  summary: string;
  photos?: {
    original_size: {
      url: string;
      width: number;
      height: number;
    };
    alt_sizes: {
      url: string;
      width: number;
      height: number;
    }[];
  }[];
}

interface TumblrResponse {
  response: {
    posts: TumblrPost[];
    total_posts: number;
  };
}

const PhotoDiary: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [allPhotos, setAllPhotos] = useState<{url: string, post: TumblrPost}[]>([]);
  
  const fetchTumblrPosts = async () => {
    // Tumblr API v2 endpoint with CORS proxy
    const response = await fetch(`https://api.tumblr.com/v2/blog/chebel.tumblr.com/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&limit=20`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Tumblr posts');
    }
    
    const data: TumblrResponse = await response.json();
    return data;
  };
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['tumblrPosts'],
    queryFn: fetchTumblrPosts,
  });
  
  useEffect(() => {
    if (data?.response?.posts) {
      const photos = data.response.posts.flatMap(post => 
        post.photos ? post.photos.map(photo => ({
          url: photo.original_size.url,
          post
        })) : []
      );
      setAllPhotos(photos);
    }
  }, [data]);
  
  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };
  
  const navigatePrevGallery = () => {
    if (allPhotos.length > 0) {
      setGalleryIndex((prevIndex) => 
        prevIndex === 0 ? allPhotos.length - 1 : prevIndex - 1
      );
    }
  };
  
  const navigateNextGallery = () => {
    if (allPhotos.length > 0) {
      setGalleryIndex((prevIndex) => 
        prevIndex === allPhotos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="container-custom">
          <div className="mb-12">
            <a 
              href="/" 
              className="inline-flex items-center font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </a>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-6 animate-fade-in">PHOTO DIARY</h1>
            <p className="font-body text-lg text-white/80 animate-fade-in" style={{ animationDelay: "100ms" }}>
              A live feed of my photographic journal from Tumblr, capturing moments and inspirations as they happen.
            </p>
            
            <div className="mt-4">
              <a 
                href="https://chebel.tumblr.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                View on Tumblr
                <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>
          
          {isLoading && (
            <div className="flex items-center justify-center py-16">
              <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
          
          {error && (
            <div className="glass-card p-8 text-center">
              <p className="text-red-400 mb-4">Failed to load photos from Tumblr</p>
              <p className="text-sm text-white/70">Please try again later or check your internet connection.</p>
            </div>
          )}
          
          {!isLoading && !error && allPhotos.length === 0 && (
            <div className="glass-card p-8 text-center">
              <p className="text-white/70">No photos found on the Tumblr blog.</p>
            </div>
          )}
          
          {!isLoading && !error && allPhotos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allPhotos.map((photo, index) => (
                <div
                  key={`${photo.post.id}-${index}`}
                  className="overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => openGallery(index)}
                >
                  <div className="relative pb-[100%] overflow-hidden bg-black/20">
                    <img
                      src={photo.url}
                      alt={photo.post.summary || "Tumblr photo"}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-sm text-white/90 line-clamp-2">
                        {photo.post.summary || formatDate(photo.post.timestamp)}
                      </p>
                      <p className="text-xs text-white/60 mt-1">
                        {formatDate(photo.post.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Full-size image gallery dialog */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-6xl p-0 bg-black/90 border-none">
          <div className="absolute right-4 top-4 z-10 flex gap-2">
            <a href="/" className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
              <Home className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </a>
            <DialogClose className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          
          <div className="relative flex items-center justify-center w-full h-full min-h-[50vh] max-h-[80vh]">
            {allPhotos.length > 0 && (
              <img 
                src={allPhotos[galleryIndex].url} 
                alt={allPhotos[galleryIndex].post.summary || "Tumblr photo"}
                className="max-h-full max-w-full object-contain"
              />
            )}
            
            {allPhotos.length > 1 && (
              <>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 border-0 z-10"
                  onClick={navigatePrevGallery}
                >
                  <ArrowLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 border-0 z-10"
                  onClick={navigateNextGallery}
                >
                  <ArrowRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </>
            )}
          </div>
          
          {allPhotos.length > 0 && (
            <div className="p-4 bg-black/80">
              <div className="max-w-3xl mx-auto">
                <p className="text-white font-body text-sm">
                  {allPhotos[galleryIndex].post.summary}
                </p>
                <p className="text-white/60 font-body text-xs mt-1">
                  {formatDate(allPhotos[galleryIndex].post.timestamp)}
                </p>
                <a 
                  href={`https://chebel.tumblr.com/post/${allPhotos[galleryIndex].post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-xs text-white/70 hover:text-white"
                >
                  View on Tumblr
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PhotoDiary;
