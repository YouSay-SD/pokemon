import { Pagination } from 'react-bootstrap'
import { useRouter } from 'next/router'
import styles from './Pagination.module.scss'

const Paginator = () => {
  const router = useRouter()
  const pageQuantity = 3
  const currentPage = router.query.page ? +router.query.page : 1

  const handleClick = (index) => {
    router.push(`/?page=${index}`)
  }

  return (
      <Pagination className={styles.pagination}>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => router.push(`/?page=${currentPage - 1}`)}
        />
          {
            [...Array(pageQuantity)].map((x, i) => {
              const page = i + 1
              return (
                <Pagination.Item
                  key={i}
                  active={parseInt(page) === currentPage}
                  onClick={() => handleClick(page)}
                >
                  {page}
                </Pagination.Item>
              )
            })
          }
        <Pagination.Next
          disabled={currentPage >= pageQuantity}
          onClick={() => router.push(`/?page=${currentPage + 1}`)}
        />
      </Pagination>
  )
}

export default Paginator
