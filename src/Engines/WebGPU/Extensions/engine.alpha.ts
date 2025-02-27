import { Constants } from "../../constants";
import { Engine } from "../../engine";
import { WebGPUEngine } from "../../webgpuEngine";

WebGPUEngine.prototype.setAlphaMode = function (mode: number, noDepthWriteChange: boolean = false): void {
    if (this._alphaMode === mode) {
        return;
    }

    switch (mode) {
        case Constants.ALPHA_DISABLE:
            this._alphaState.alphaBlend = false;
            break;
        case Constants.ALPHA_PREMULTIPLIED:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(1, 0x0303, 1, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_PREMULTIPLIED_PORTERDUFF:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.setAlphaBlendFunctionParameters(1, 0x0303, 1, 0x0303);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_COMBINE:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(0x0302, 0x0303, 1, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_ONEONE:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ZERO, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(1, 1, 0, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_ADD:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE, this._gl.ZERO, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(0x0302, 1, 0, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_SUBTRACT:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.ZERO, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(0, 0x0301, 1, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_MULTIPLY:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.DST_COLOR, this._gl.ZERO, this._gl.ONE, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(0x0306, 0, 1, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_MAXIMIZED:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(0x0302, 0x0301, 1, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_INTERPOLATE:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.CONSTANT_COLOR, this._gl.ONE_MINUS_CONSTANT_COLOR, this._gl.CONSTANT_ALPHA, this._gl.ONE_MINUS_CONSTANT_ALPHA);
            this._alphaState.setAlphaBlendFunctionParameters(0x8001, 0x8002, 0x8003, 0x8004);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_SCREENMODE:
            // this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.setAlphaBlendFunctionParameters(1, 0x0301, 1, 0x0303);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_ONEONE_ONEONE:
            //this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ONE, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(1, 1, 1, 1);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_ALPHATOCOLOR:
            //this._alphaState.setAlphaBlendFunctionParameters(this._gl.DST_ALPHA, this._gl.ONE, this._gl.ZERO, this._gl.ZERO);
            this._alphaState.setAlphaBlendFunctionParameters(0x0304, 1, 0, 0);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_REVERSEONEMINUS:
            //this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE_MINUS_DST_COLOR, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ONE_MINUS_DST_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.setAlphaBlendFunctionParameters(0x0307, 0x0301, 0x0305, 0x0303);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_SRC_DSTONEMINUSSRCALPHA:
            //this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA);
            this._alphaState.setAlphaBlendFunctionParameters(1, 0x0303, 1, 0x0303);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_ONEONE_ONEZERO:
            //this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE, this._gl.ONE, this._gl.ONE, this._gl.ZERO);
            this._alphaState.setAlphaBlendFunctionParameters(1, 1, 1, 0);
            this._alphaState.alphaBlend = true;
            break;
        case Constants.ALPHA_EXCLUSION:
            //this._alphaState.setAlphaBlendFunctionParameters(this._gl.ONE_MINUS_DST_COLOR, this._gl.ONE_MINUS_SRC_COLOR, this._gl.ZERO, this._gl.ONE);
            this._alphaState.setAlphaBlendFunctionParameters(0x0307, 0x0301, 0, 1);
            this._alphaState.alphaBlend = true;
            break;
    }
    if (!noDepthWriteChange) {
        this.setDepthWrite(mode === Engine.ALPHA_DISABLE);
        this._cacheRenderPipeline.setDepthWriteEnabled(mode === Engine.ALPHA_DISABLE);
    }
    this._alphaMode = mode;
    this._cacheRenderPipeline.setAlphaBlendEnabled(this._alphaState.alphaBlend);
    this._cacheRenderPipeline.setAlphaBlendFactors(this._alphaState._blendFunctionParameters, this._alphaState._blendEquationParameters);
};

WebGPUEngine.prototype.setAlphaEquation = function (equation: number): void {
    Engine.prototype.setAlphaEquation(equation);

    this._cacheRenderPipeline.setAlphaBlendFactors(this._alphaState._blendFunctionParameters, this._alphaState._blendEquationParameters);
};
