// src/MathRenderer.tsx
import React, { useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/contrib/auto-render.min.js';
import renderMathInElement from 'katex/dist/contrib/auto-render'; // auto-renderをインポート

interface MathRendererProps {
    content: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ content }) => {
    useEffect(() => {
        // KaTeXで自動レンダリング
        renderMathInElement(document.getElementById('math-content')!, {
            delimiters: [
                { left: '\\(', right: '\\)', display: false }, // インライン数式
                { left: '\\[', right: '\\]', display: true }   // ブロック数式
            ],
            // その他のオプションを追加できます
        });
    }, [content]);

    return (
        <div id="math-content" dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default MathRenderer;
