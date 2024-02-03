import moment from 'moment'

export function assignWeek (animeList) {
  const weekMap = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  const animeWeek = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }

  const weekEnds = moment().endOf('week').add(1, 'd')

  animeList.map((anime) => {
    let day = moment(anime.startDate).day()
    day !== 0 ? day -= 1 : day = 6

    const dayWeek = weekMap[day]

    if ((anime.status === 'upcoming' && new Date(anime.startDate) < weekEnds) || (anime.status === 'current')) {
      animeWeek[dayWeek].push(anime)
    }

    return animeWeek
  })

  return animeWeek
}
