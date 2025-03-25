import { CompilerOptions } from 'https://esm.sh/@vue/compiler-dom@3.5.13/dist/compiler-dom.d.ts';
import { RenderFunction } from 'https://esm.sh/@vue/runtime-dom@3.5.13/dist/runtime-dom.d.ts';
export * from 'https://esm.sh/@vue/runtime-dom@3.5.13/dist/runtime-dom.d.ts';

export declare function compileToFunction(template: string | HTMLElement, options?: CompilerOptions): RenderFunction;

export { compileToFunction as compile };
