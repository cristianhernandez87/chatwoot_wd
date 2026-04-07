import { useEffect } from 'react';

const ChatwootWidget = () => {
  useEffect(() => {
    // Configuración visual y de comportamiento del chat
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // Puede ser 'left' o 'right'
      locale: 'es', // Idioma del widget
      type: 'standard', // Opciones: 'standard', 'expanded_bubble'
    };

    // Script de inicialización de Chatwoot
    (function(d, t) {
      var BASE_URL = "<http://localhost:5173/>"; // Ej: http://localhost:3000
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function() {
        window.chatwootSDK.run({
          websiteToken: '<TU_WEBSITE_TOKEN>',
          baseUrl: BASE_URL
        });
      };
    })(document, "script");
  }, []);

  return null; // El componente no renderiza nada en el DOM directamente
};

export default ChatwootWidget;