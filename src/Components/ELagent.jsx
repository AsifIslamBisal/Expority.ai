import { useEffect } from "react";

const ELagent = () => {

    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
    }, []);


    return (
            
        <div>
            <elevenlabs-convai agent-id="agent_2501kg8ada9mfvcasn8rnpf2db6g"></elevenlabs-convai>
        </div>
    );
};

export default ELagent;