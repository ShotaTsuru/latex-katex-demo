// src/App.tsx
import React from 'react';
import MathRenderer from './MathRenderer';

const App: React.FC = () => {
    const content = `
        以下の数式を表示します：
        ピタゴラスの定理：\\( a^2 + b^2 = c^2 \\)
        定積分：\\[ \\int_0^\\infty e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2} \\]
    `;
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>KaTeX Example</h1>
            <MathRenderer content={content} />
        </div>
    );
};

export default App;
