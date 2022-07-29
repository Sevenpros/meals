/**
 * @jest-environment jsdom
 */

import Fetch from "../__mocks__/display.js";

const mealList = new Fetch();
describe('Count Items ', () => {
    it('Should return Number', async () => {
       await mealList.countItems().then(meal => {
        expect(typeof meal.length).toEqual('number');
       })
    })
    it('Should return 5', async () => {
        await mealList.countItems().then(meal => {
         expect(meal.length).toBe(5);
        })
     })
})
