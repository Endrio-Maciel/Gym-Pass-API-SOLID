import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', ()=>{

  beforeEach(async()=> {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

    it('should be able to fetch nearby gyms', async () => {
    
    await gymsRepository.create({
       title: 'Near Gym', 
       description: null,
       phone: null,
       latitude: -30.0968899,
       longitude: -51.1322256,
    })

    await gymsRepository.create({
        title: 'Far Gym',
        description: null,
        phone: null,
        latitude: -29.9986011,
        longitude: -51.3190281,
    })

    const { gyms } = await sut.execute({
        userLatitude: -30.0968899,
        userLongitude: -51.1322256,
    })

    expect(gyms).toHaveLength(1)

    expect(gyms).toEqual([expect.objectContaining({title: 'Near Gym'})])
     
    })

})
