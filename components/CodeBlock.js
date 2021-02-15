import React, { PureComponent } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ocean, nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

const preStyle = {
  borderRadius: 6,
  padding: "1.7em",
  lineHeight: "2.3em",
  // border: "1px solid rgb(236 236 236)",
};

const codeProps = {
  style: {
    fontFamily: `Consolas, `,
    fontSize: "17px",
  },
};

const CodeBlock = ({ language, value }) => (
  <div className="my-7">
    <SyntaxHighlighter
      language={language}
      style={nord}
      customStyle={preStyle}
      codeTagProps={codeProps}
    >
      {value}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlock;
