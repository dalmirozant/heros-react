
import { getHeroesByPublisher } from '../helpers'

export const HerosList = ({publisher}) => {

    const list = getHeroesByPublisher(publisher)


  return (
    <ul>{
            list.map(h => <li key={h.id}>{h.superhero}</li>)
        }
    </ul>    
  )
}
