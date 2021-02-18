const expect = require('chai').expect
const rgbToHexColor = require('../rgbToHex')

/*•	Take three integer numbers, representing the red,
 green and blue values of an RGB color, each within range [0…255]

•	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')

•	Return undefined if any of the input parameters are of invalid
 type or not in the expected range
*/

describe('rgbToHexColor', function() {
    it('convert black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })
})