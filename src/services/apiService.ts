const API_BASE_URL = 'https://api.hidupcuan.org/api';
// const API_BASE_URL = 'https://staging-api.hidupcuan.org/api';

// Types
export interface Banner {
  id: number;
  banner: string;
  action_type: string;
  action_data: string;
  start_date: string;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface BannerResponse {
  status: string;
  message: string;
  data: Banner[];
}

export interface BannerClickResponse {
  status: string;
  message: string;
  data: {
    action_type: string;
    action_data: string;
    promotion?: any; // Include promotion data if action_type is 'promotion'
  };
}

export interface ApiError {
  status: string;
  message: string;
}

// API Service Class
class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // Generic fetch method with error handling
  private async fetchAPI<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw error;
    }
  }

  // Banner Methods
  async getBanners(): Promise<BannerResponse> {
    return this.fetchAPI<BannerResponse>('/web-banner-list', {
      method: 'POST', // Using POST as per your route
    });
  }

  async clickBanner(bannerId: number): Promise<BannerClickResponse> {
    return this.fetchAPI<BannerClickResponse>('/web-banner-click', {
      method: 'POST',
      body: JSON.stringify({ id: bannerId }),
    });
  }

  // Health check
  async healthCheck(): Promise<{ status: string; message: string }> {
    return this.fetchAPI('/greeting');
  }
}

// Create and export instance
export const apiService = new ApiService(API_BASE_URL);

// Convenience methods for direct import
export const bannerAPI = {
  /**
   * Get list of active banners
   */
  async list(): Promise<Banner[]> {
    try {
      const response = await apiService.getBanners();
      if (response.status === 'success') {
        return response.data;
      } else {
        throw new Error(response.message || 'Failed to fetch banners');
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
      throw error;
    }
  },

  /**
   * Handle banner click and return action data
   */
  async click(bannerId: number): Promise<BannerClickResponse['data']> {
    try {
      const response = await apiService.clickBanner(bannerId);
      if (response.status === 'success') {
        return response.data;
      } else {
        throw new Error(response.message || 'Failed to process banner click');
      }
    } catch (error) {
      console.error('Error clicking banner:', error);
      throw error;
    }
  },
};

// Export default
export default apiService;