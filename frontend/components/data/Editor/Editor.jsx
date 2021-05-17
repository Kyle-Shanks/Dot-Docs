import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import { ComponentContainer, EditorContainer, CodeDisplay } from './Editor.styled';

const BASE_CLASS_NAME = 'Editor';

const Editor = ({ className, content, language }) => {
    const [editorHeight, setEditorHeight] = useState(192); // 12rem
    const outputRef = useRef();

    useLayoutEffect(() => {
        Prism.highlightAll();
        const { clientHeight } = outputRef.current;
        if (clientHeight !== editorHeight) setEditorHeight(clientHeight);
    }, [content]);

    return (
        <ComponentContainer className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <EditorContainer>
                <CodeDisplay className={`${BASE_CLASS_NAME}__Output`} ref={outputRef}>
                    <code className={`language-${language}`}>{content}</code>
                </CodeDisplay>
            </EditorContainer>
        </ComponentContainer>
    );
};

Editor.propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    language: PropTypes.string,
};

Editor.defaultProps = {
    className: '',
    language: 'javascript',
};

export default Editor;
