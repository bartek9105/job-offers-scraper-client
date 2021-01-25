import { useState } from 'react'
import Table from 'react-bootstrap/Table'
import './DataTableTechs.css'

const DataTableTechs = ({ data }) => {
  return (
    <div id="technologies">
      <h3 className="data-header">Technologies in cities</h3>
      <section className="data-table">
        <Table striped bordered hover variant="dark">
          {data.map(item => (
            <>
              <thead>
                <tr>
                  <th>{item._id}</th>
                </tr>
              </thead>
              <tbody>
                {item.technologies.map(tech => (
                  <tr>
                    <td className="tech-name">{tech.name}</td>
                    <td>{tech.count}</td>
                  </tr>
                ))}
              </tbody>
            </>
          ))}
        </Table>
      </section>
    </div>
  );
}

export default DataTableTechs