import FbEngine from './../../src/index';

describe('jsFile-fb', () => {
    describe('Library imports', () => {
        it('should import JS module', () => {
            assert.isFunction(FbEngine);
        });

        it('should exist in global scope', () => {
            assert.isFunction(window.JsFileFb.default);
        });
    });
});