import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";

describe('Search Gyms (e2e)', () => {

    beforeAll(async ()=>{
        await app.ready()
    })

    afterAll(async ()=> {
        await app.close()
    })

    it('should be able to search gyms by title', async () =>{   
    const { token } = await createAndAuthenticateUser(app, true)
    
     await request(app.server)
    .post('/gyms')
    .set('Authorization', `Bearer ${token}`)
    .send({
        title: 'Javascript Gym',
        description: 'Some description',
        phone: '51999999',
        latitude: -30.0968899,
        longitude: -51.1322256,
    })

    await request(app.server)
    .post('/gyms')
    .set('Authorization', `Bearer ${token}`)
    .send({
        title: 'Typescript Gym',
        description: 'Some description',
        phone: '51999999',
        latitude: -30.0968899,
        longitude: -51.1322256,
    })

    const response = await request(app.server)
        .get('/gyms/search')
        .query({
            q: 'Javascript' ,
        })
        .set('Authorization', `Bearer ${token}`)
        .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
        expect.objectContaining({
            title: 'Javascript Gym',
        })
    ])

})
})