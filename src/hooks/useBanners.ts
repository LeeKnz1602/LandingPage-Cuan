import { useState, useEffect } from 'react';
import { bannerAPI, Banner } from '../services/apiService';

interface UseBannersReturn {
  banners: Banner[];
  loading: boolean;
  error: string | null;
  handleBannerClick: (bannerId: number) => Promise<void>;
  refetch: () => Promise<void>;
}

export function useBanners(): UseBannersReturn {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await bannerAPI.list();
      setBanners(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Network error occurred';
      setError(errorMessage);
      console.error('Error fetching banners:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBannerClick = async (bannerId: number) => {
    try {
      const data = await bannerAPI.click(bannerId);
      const { action_type, action_data } = data;
      
      // Handle different action types
      switch (action_type) {
        case 'external_url':
          window.open(action_data, '_blank');
          break;
        case 'route':
          window.location.href = action_data;
          break;
        case 'promotion':
          // Handle promotion action - you can customize this
          console.log('Promotion clicked:', data.promotion);
          // Could show modal, redirect to promotion page, etc.
          break;
        default:
          console.log('Banner clicked:', data);
      }
    } catch (err) {
      console.error('Error handling banner click:', err);
      // Optionally show user-friendly error message
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return {
    banners,
    loading,
    error,
    handleBannerClick,
    refetch: fetchBanners,
  };
}