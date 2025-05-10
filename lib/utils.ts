export function decodeURIComponentSafe(slug: string) {
    try {
      return decodeURIComponent(slug);
    } catch {
      return slug;
    }
  }
  
  export function slugToTitle(slug: string) {
    return slug.replace(/-/g, ' ');
  }