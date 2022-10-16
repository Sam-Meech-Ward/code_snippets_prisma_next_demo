// import hljs from 'highlight.js/lib/core';
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('js', javascript);
import markdown from 'highlight.js/lib/languages/markdown';
hljs.registerLanguage('markdown', markdown);


export default function highlight(code, language) {
  const languageObject = language && { language }
  if (language === 'markdown') {
    let highlighted = hljs.highlight(code, languageObject).value

    const blocks = []
    function replacer(match, p1, p2, p3, offset, string) {
      blocks.push("```" + p2 + "" + hljs.highlight(p3, { language: p2 }).value + "```")
    }
    const regex = /(```(.+?)(?=[\n\r\s])([.\n\r\s\S]*?)(?=`)```)/g
    code.replace(regex, replacer)
    highlighted = highlighted.replace(regex, () => blocks.shift())
    return highlighted
  }

  return hljs.highlight(code, languageObject).value
}