import got from "got"
import { strict as assert } from 'node:assert';


describe ('User can', function () {
    it ('Receive pet by his id', async function () {
        const response = await got ('https://petstore.swagger.io/v2/pet/1')
        const body = JSON.parse(response.body)

        assert(body.id == 1, `Expected id = 1, return other`)
    })
})