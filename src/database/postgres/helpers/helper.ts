import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
import { Table } from 'typeorm';

export const timestampColumns = [
  {
    name: 'created_at',
    type: 'timestamp',
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'timestamp',
    default: 'now()',
  },
];

export const generateTableWithTimestamps = (tableInfo: {
  name: string;
  columns: TableColumnOptions[];
}): Table => {
  const { name, columns } = tableInfo;
  return new Table({
    name: name,
    columns: [...timestampColumns, ...columns],
  });
};
