import React from 'react';
import svgMap from './svgMap';
import MarkdownIt from 'markdown-it';
import MdEmoji from 'markdown-it-emoji';


const markdownParserResume = new MarkdownIt({
    html: true,
    breaks: true,
});

markdownParserResume.use(MdEmoji, {
    defs: svgMap,
    shortcuts: Object.keys(svgMap).reduce<Record<string, string>>((obj, item) => {
        obj[item] = `icon:${item}`;
        return obj;
    }, {})
})

export default markdownParserResume;