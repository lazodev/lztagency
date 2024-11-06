import React, { useEffect } from 'react';

const GoogleTagManager: React.FC<{ gtmId: string }> = ({ gtmId }) => {
  useEffect(() => {
    // Adicionar o script personalizado no cabeçalho
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://load.capi.lazotec.com/481rpbpgolxfz.js?b8jk=aWQ9R1RNLVRIS05RWDRTJmFzPXk%3D&page=3`;
    document.head.appendChild(script);

    // Adicionar o script padrão do GTM no cabeçalho
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(gtmScript);

    // Adicionar o noscript no corpo
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://load.capi.lazotec.com/ns.html?id=GTM-THKNQX4S"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  }, [gtmId]);

  return null;
};

export default GoogleTagManager;
