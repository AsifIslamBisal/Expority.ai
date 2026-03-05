import React, { useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
      console.log("Meta Pixel tracked:", location.pathname);
    }
  
  //  Google Tag Manager dynamic tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_path: location.pathname,
      });
      console.log("GTM tracked:", location.pathname);
    }
  },[location]);

  useEffect(() => {
    //  Script load only once
    if (!customElements.get("elevenlabs-convai")) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    //  Widget attach only once
    if (!document.getElementById("elevenlabs-widget-container")) {
      const container = document.createElement("div");
      container.id = "elevenlabs-widget-container";
      container.className = "fixed bottom-6 right-6 z-[99999]";
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", "agent_2501kg8ada9mfvcasn8rnpf2db6g");
      container.appendChild(widget);
      document.body.appendChild(container);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
