import Card from '../../molecules/Card/Card'
import styles from './Grid.module.scss'

const Grid = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items &&
        items.map((item, index) => {
          return <Card key={index} {...item} />
        })
      }
    </div>
  )
}

export default Grid
