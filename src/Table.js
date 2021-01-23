import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = ({ data }) => {
  return (
    <div>
      <div className="card">
        <DataTable value={data} sortField="amount" scrollable scrollHeight="500px">
          <Column field="technology" header="Technology" ></Column>
          <Column field="amount" header="Offers amount" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Table