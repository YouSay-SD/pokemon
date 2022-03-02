import Card from '../Card/Card'
import styles from './Grid.module.scss'

const Grid = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items &&
        items.map(item => {
          return <Card key={item.id} {...item} />
        })
      }
    </div>
  )
}

export default Grid
