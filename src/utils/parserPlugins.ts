import React from 'react';
import svgMap from './svgMap';
import MarkdownIt from 'markdown-it';
import MdEmoji from 'markdown-it-emoji';
import MdContainer from 'markdown-it-container';


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
.use(MdContainer,'left',{
    render: function (tokens:any, idx:any) {
        if (tokens[idx].nesting === 1) {
            // opening tag
            return '<div class="lr-container"><div class="left">';
        } else {
            // closing tag
            return '</div>'
        }
      }
})
.use(MdContainer, 'right', {
    render: function (tokens: any, idx: any) {
        if (tokens[idx].nesting === 1) {
            // opening tag
            return '<div class="right">';
        } else {
            // closing tag
            return '</div></div>';
        }
    }

});

export default markdownParserResume;