import Table from 'react-bootstrap/Table'
import './DataTable.css'

const DataTable = ({ data }) => {
  return (
    <>
      <h3 className="data-header">Technologies popularity</h3>
      <section className="data-table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Offers amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map(techCount => (
              <tr>
                <td>{techCount._id}</td>
                <td>{techCount.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
}

export default DataTable