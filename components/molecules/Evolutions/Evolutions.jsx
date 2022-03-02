import Link from 'next/link'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { capitalizeFirstLetter } from 'utils/utils'
import styles from './Evolution.module.scss'

const Evolutions = ({ evolutions }) => {
  const { singlePokemon } = useSelector(state => state.poke)

  return (
    <div className={styles.evolution}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Evolutions</th>
          </tr>
        </thead>
        <tbody>
          {evolutions &&
            evolutions.map(({ name }, index) => {
              return name && (
                <div key={index} className={styles.item}>
                  <Link href={`/pokemon/${name}`} key={index}>
                    <a
                      disabled={singlePokemon.name === name}
                    >
                      <Button
                        variant='link'
                        disabled={singlePokemon.name === name}
                      >
                        {capitalizeFirstLetter(name)}
                      </Button>
                    </a>
                  </Link>
                </div>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Evolutions
