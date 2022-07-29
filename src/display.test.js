/**
 * @jest-environment jsdom
 */

import Fetch from "./display.js";

const mealList = new Fetch();
describe('Count Items ', () => {
    it('Should return Number', async () => {
       await mealList.countItems('Goat').then(meal => {
        expect(meal.length).toBe(Number);
       })
    })
})
