import getSortHeroes from '../src/js/app';

test('should sort heroes', () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
  ];

  const expected =  [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10}
  ];

  const received = getSortHeroes(heroes);

  expect(received).toEqual(expected);
});
