import React, { useState, useEffect } from "react";

export default function TypeWriter({ style, words }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    // typeWriter
    useEffect(() => {
        if(words && words.length > 0) {
            if (index === words.length - 1 && subIndex === 0 && reverse) {
                setReverse(false);
                setIndex(0);
                return;
            }

            if (subIndex === words[index].length + 1 && !reverse) {
                setReverse(true);
                return;
            }

            if (subIndex === 0 && reverse) {
                setReverse(false);
                setIndex((prev) => prev + 1);
                return;
            }

            const timeout = setTimeout(() => {
                setSubIndex((prev) => prev + (reverse ? -1 : 1));
            }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

            return () => clearTimeout(timeout);
        }
    }, [subIndex, index, reverse, words]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    let displayStyle = { "height": "77px" };
    if(style) {
        Object.assign(displayStyle, style);
    }
    if(words && words.length > 0) {
        return (
            <div style={{ ...displayStyle }}>
                <h1>
                    {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                </h1>
            </div>
        );
    } else {
        return(
            <div style={{ ...displayStyle }}></div>
        )
    }
}