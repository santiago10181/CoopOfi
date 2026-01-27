export const HeaderTableContent = ({ className, data}) => {
  return (
    <th scope="col" className={className}>
         {data}
    </th>
    );
};