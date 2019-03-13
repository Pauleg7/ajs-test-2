export default function getSortHeroes (heroes) {
  return heroes.sort((a, b) => {
    return  b.health - a.health;
  })
}