import { useEffect } from "react";

const ChatBot = () => {

  useEffect(() => {
    (function (d, m) {
      const kommunicateSettings = {
        appId: `${import.meta.env.VITE_KOMMUNICATE_APP_ID}`,
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      const h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }, []);

  return (
    <></>
  )
}

export default ChatBot;