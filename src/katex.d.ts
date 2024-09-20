// src/katex.d.ts
declare module 'katex' {
    export function render(
        tex: string,
        element: HTMLElement,
        options?: {
            displayMode?: boolean;
            throwOnError?: boolean;
            errorColor?: string;
        }
    ): void;

    export function renderToString(
        tex: string,
        options?: {
            displayMode?: boolean;
            throwOnError?: boolean;
            errorColor?: string;
        }
    ): string;
}

// src/katex.d.ts
declare module 'katex/dist/contrib/auto-render' {
    function renderMathInElement(
        element: HTMLElement,
        options?: {
            delimiters?: Array<{ left: string; right: string; display: boolean }>;
            throwOnError?: boolean;
        }
    ): void;

    export default renderMathInElement; // デフォルトエクスポートとして定義
}
