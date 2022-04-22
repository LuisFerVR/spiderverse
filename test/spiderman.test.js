const SpiderMan = require('./../app/SpiderMan');

describe("Unit test for SpiderMan class", () => {
    test('Case 1  create an SpiderMan object', () => {
        //codigo que queremos usar tal cual
        //quiero instanciar un objeto SpiderMan con esta información:
        const andreGrfield = new SpiderMan( "Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        //validamos que este codigo este funcionando como se espera:
        expect(andreGrfield.name).toBe("Spiderman Sony");
        expect(andreGrfield.age).toBe(31);
        expect(andreGrfield.actor).toBe("Andrew Garfield");
        expect(andreGrfield.movies).toBe(2);
        expect(andreGrfield.studio).toBe("Sony");
    }),
    test('Case 2:  create an method getInfo', () => {
        //codigo que queremos usar tal cual
        //quiero instanciar un objeto SpiderMan con esta información:
        const tomHalland = new SpiderMan( "Spiderman Marvel", 25, "Tom Halland", 5, "Marvel studio")
        //validamos que este codigo este funcionando como se espera:
        expect(tomHalland.getInfo()).toBe("Hey, i'm Tom Halland from Marvel studio");
    });
  })