import React, { useState } from 'react';  
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks'; 

const MarkdownPreviewer = () => { 
const placeholder = `
# Sample Markdown Header Level

## Sample Header Level 2

### Link

Here's a link to [Codepen](https://codepen.io).

### Code Block

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

### Inline Code

I think you should use an \`<addr>\` element here instead.

### List

- First item
- Second item

### Blockquote

> Dorothy followed her through many of the beautiful rooms in her castle.

### Image

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")

### Bold Text

I just love **bold text**.
`;
const [markdown, setMarkdown] = useState(placeholder);  

const handleChange = (event) => {  
  setMarkdown(event.target.value);  
};

return (
  <>
  <div id="heading">
    <h1>Markdown Previewer</h1>
    </div>
  <div className="App">
    <textarea id="editor" value={markdown} onChange={handleChange} />
    <div id="preview">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>{markdown}</ReactMarkdown>
    </div>
  </div>
    </>
  );
};
export default MarkdownPreviewer;
