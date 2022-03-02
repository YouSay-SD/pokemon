import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Searcher.module.scss'
import { useRef, useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import Title from 'atoms/Title/Title'
import P from 'atoms/P/P'

const Searcher = () => {
  const [searchedPokemon, setSearchedPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    const value = inputRef.current.value

    if (value !== '') {
      setLoading(true)
      const { data } = await axios.get(`http://localhost:3000/api/pokemon/${value}`).then((data) => {
        setLoading(false)
        return data
      })

      setSearchedPokemon({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other['official-artwork'].front_default
      })
    } else {
      setSearchedPokemon(null)
    }
  }

  // Input Handler
  const handleInputChange = ({ target: { value } }) => {
    if (value === '') {
      setSearchedPokemon(null)
    }
  }

  return (
    <div className={styles.searcher}>
      <Title className={styles.title} size='lg'>Search your Pokemon</Title>

      <Form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Form.Control
          type='number'
          step="any"
          min="1"
          max="20"
          maxLength={2}
          ref={inputRef}
          placeholder='1-20'
          onChange={handleInputChange}
        />

        <Button variant="primary" disabled={loading}>
          {loading &&
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          }

          {loading ? '  Loading...' : 'Search'}
        </Button>
      </Form>

      {searchedPokemon &&
        <Link href={`/pokemon/${searchedPokemon.name}`}>
          <a className={styles.link}>
            <Image
              src={searchedPokemon.sprite}
              width={40}
              height={40}
              alt={searchedPokemon.name}
            />
            <P>{searchedPokemon.name}</P>
          </a>
        </Link>
      }
    </div>
  )
}

export default Searcher
