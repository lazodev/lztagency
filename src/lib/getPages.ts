export const getAllPages = async (): Promise<string[]> => {
    // Aqui você pode buscar dinamicamente suas URLs, por exemplo:
    return [
      '/',
      '/about',
      '/blog',
      '/contact',
      '/pricing',
      '/portfolio',
      '/cookies-policy',
      '/privacy-policy',
      '/terms-of-use'
    ];
  };
  