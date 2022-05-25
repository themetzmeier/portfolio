import React from "react";

function Iframe({ src, title, height, width, scale, scrolling }) {
    const iframeScale = scale || 0.5;
    const iframeStyle = {
        "width": width || "1000px",
        "height": height || "1400px", 
        "MozTransform": `scale(${iframeScale}, ${iframeScale})`, 
        "WebkitTransform": `scale(${iframeScale}, ${iframeScale})`, 
        "OTransform": `scale(${iframeScale}, ${iframeScale})`,
        "msTransform": `scale(${iframeScale}, ${iframeScale})`,
        "transform": `scale(${iframeScale}, ${iframeScale})`, 
        "MozTransformOrigin": "top left",
        "WebkitTransformOrigin": "top left",
        "OTransformOrigin": "top left",
        "MsTransformOrigin": "top left",
        "TransformOrigin": "top left"
    }
    let calcWidth = width;
    if(!width && height) {
        calcWidth = height * 2;
    }
    return(       
        <div style={{ "maxHeight": (height * iframeScale) || "1400px", "maxWidth": (calcWidth * iframeScale) || "1000px" }}>          
            <iframe className="iframe" style={iframeStyle} src={src} title={title} scrolling={scrolling}>
                <p>Your browser does not support iframes.</p>
            </iframe>        
        </div>
    );
}

export default Iframe;