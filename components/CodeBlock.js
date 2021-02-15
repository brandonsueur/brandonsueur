import React, { PureComponent } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

const preStyle = {
  borderRadius: 6,
  padding: "1.7em",
  lineHeight: "2.3em",
};

const codeProps = {
  style: {
    fontFamily: `ibm-plex-mono, Consolas, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New'`,
    fontSize: "1rem",
  },
};

const CodeBlock = ({ language, value }) => (
  <div>
    <SyntaxHighlighter
      language={language}
      style={dracula}
      customStyle={preStyle}
      codeTagProps={codeProps}
    >
      {value}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlock;
