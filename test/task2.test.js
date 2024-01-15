import { getParts } from "../task2.js";
import * as assert from 'assert';


describe("getParts", ()=>{
    it("считает количество движений 1", ()=>{
        assert.equal(getParts('6'), 3)
    })

    it("считает количество движений 2", ()=>{
        assert.equal(getParts('5'), 3)
    })

    it("считает количество движений 3", ()=>{
        assert.equal(getParts('8'), 3)
    })

    it("считает количество движений 4", ()=>{
        assert.equal(getParts('4'), 2)
    })

    it("считает количество движений 5", ()=>{
        assert.equal(getParts('14'), 4)
    })
})