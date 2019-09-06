
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      let rocket = new Rocket();

      expect(rocket.name).toBeTruthy();
      expect(rocket.colour).toBeTruthy();
      expect(rocket.flying).toEqual(false);
    });

    test("it should set the rocket's name if provided", () => {
      let rocket = new Rocket({ name: 'apollo', colour: 'red', flying: true});

      expect(rocket.name).toEqual('apollo');
      expect(rocket.colour).toEqual('red');
      expect(rocket.flying).toEqual(true);
    });
  });

  describe('liftOff', () => {
    test('if initialized with default valuse will set to true ', () => {
      let rocket = new Rocket();

      rocket.liftOff();
      expect(rocket.flying).toEqual(true);
    });

    test('if initalized with flying is true returns false', () => {
      let rocket = new Rocket({flying: true});

      rocket.liftOff();
      expect(rocket.flying).toEqual(true);
      expect(rocket.liftOff()).toEqual(false);
    })

  })
    describe('land', () => {
      test('if initalized with default  returns false', () => {         
        let rocket = new Rocket();

        rocket.land();
        expect(rocket.flying).toEqual(false);
      });
      
      test('if initalized with flying is false returns true', () => {
        let rocket = new Rocket({flying: true});

        rocket.land();
        expect(rocket.flying).toEqual(false);
      });
  });

  describe('status', () => {
    test('if initalized  with flying is true the returns rokets name an is flying', () => {
      let rocket = new Rocket({flying: true, name: 'Raccoon'});

      let result = rocket.status();
      expect(result).toEqual(`Rocket ${rocket.name} is flying through the sky!`)
    });

    test('if rocket is not flying returns Rocket name is ready for liftoff!', () => {
      let rocket = new Rocket({name: 'Raccoon'});
      
      let result = rocket.status();
      expect(result).toEqual(`Rocket ${rocket.name} is ready for liftoff!`)
    });
  });

  describe('sendCodedSignal', () => {
    test
  })

  // ...

});
