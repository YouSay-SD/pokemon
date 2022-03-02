import Table from 'react-bootstrap/Table'

const Skills = ({ skills, className = '' }) => {
  return (
    <Table striped bordered hover className={className}>
      <thead>
        <tr>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {skills &&
          skills.map(({ move }, index) => {
            return (
              <tr key={index}>
                <td>{ move.name }</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default Skills
