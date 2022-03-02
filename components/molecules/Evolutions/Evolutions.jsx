import Link from 'next/link'
import { Button, Table } from 'react-bootstrap'
import { capitalizeFirstLetter } from '../../../utils/utils'
import styles from './Evolution.module.scss'

const Evolutions = ({ evolutions }) => {
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
                    <a><Button variant='link'>{capitalizeFirstLetter(name)}</Button></a>
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
