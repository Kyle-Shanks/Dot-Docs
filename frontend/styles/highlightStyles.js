export default `
    code[class*="language-"] {
        box-sizing: unset;
        transition: unset;
        color: #b7c5d3;
        font-size: 13px;
        text-shadow: none;
        font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    code[class*="language-"] span {
        vertical-align: unset;
        transition: 0s;
    }

    pre[class*="language-"]::selection,
    code[class*="language-"]::selection,
    pre[class*="language-"] *::selection,
    code[class*="language-"] *::selection {
        text-shadow: none;
        background: #75a7ca40;
    }

    @media print {
        pre[class*="language-"],
        code[class*="language-"] {
            text-shadow: none;
        }
    }

    :not(pre) > code[class*="language-"] {
        padding: .1em .3em;
        border-radius: .3em;
        color: #db4c69;
        background: #f9f2f4;
    }

    .namespace {
        opacity: .7;
    }

    .token.doctype,
    .token.doctype .token.doctype-tag,
    .token.doctype .token.name {
        color: #718ca1;
    }

    .token.comment,
    .token.prolog {
        color: #41505e;
    }

    .token.punctuation,
    .language-html .language-css .token.punctuation,
    .language-html .language-javascript .token.punctuation {
        color: #718ca1;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.inserted,
    .token.unit {
        color: #e27e8d;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.deleted {
        color: #68a1f0;
    }

    .language-css .token.string.url {
        text-decoration: underline;
    }

    .token.operator,
    .token.entity {
        color: #008b94;
    }

    .token.operator.arrow {
        color: #569CD6;
    }

    .token.atrule {
        color: #698296;
    }

    .token.atrule .token.rule {
        color: #008b94;
    }

    .token.atrule .token.url {
        color: #ebbf83;
    }

    .token.atrule .token.url .token.function {
        color: #70e1e8;
    }

    .token.atrule .token.url .token.punctuation {
        color: #718ca1;
    }

    .token.keyword {
        color: #008b94;
    }

    .token.keyword.module,
    .token.keyword.control-flow {
        color: #5ec4ff;
        font-style: italic;
    }

    .token.keyword.nil {
        color: #e27e8d;
    }

    .token.function,
    .token.function .token.maybe-class-name {
        color: #70e1e8;
    }

    .token.regex {
        color: #d16969;
    }

    .token.important {
        color: #5ec4ff;
    }

    .token.italic {
        font-style: italic;
    }

    .token.bold {
        font-weight: 700;
    }

    .token.constant {
        color: #8bd49c;
    }

    .token.class-name,
    .token.maybe-class-name {
        color: #70e1e8;
    }

    .token.console {
        color: #698296;
    }

    .token.parameter {
        color: #ebbf83;
    }

    .token.interpolation {
        color: #b7c5d3;
    }

    .token.punctuation.interpolation-punctuation {
        color: #569cd6;
    }

    .token.boolean {
        color: #e27e8d;
    }

    .token.property,
    .token.variable,
    .token.imports .token.maybe-class-name,
    .token.exports .token.maybe-class-name {
        color: #93a5b6;
    }

    .token.escape {
        color: #d7ba7d;
    }

    .token.tag {
        color: #008b94;
    }

    .token.cdata {
        color: #808080;
    }

    .token.attr-name {
        color: #70e1e8;
    }

    .token.attr-value,
    .token.attr-value .token.punctuation {
        color: #68a1f0;
    }

    .token.attr-value .token.punctuation.attr-equals {
        color: #718ca1;
    }

    .token.entity {
        color: #569cd6;
    }

    .token.namespace {
        color: #4ec9b0;
    }

    pre[class*="language-javascript"],
    code[class*="language-javascript"] {
        color: #698296;
    }
`;
