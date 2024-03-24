import CONFIG from "@/config/client";

class News {
  static get = async () => {
    const response = await fetch(CONFIG.NewsURL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch news list');
    }
    return response.json();
  };
}

export default News;
