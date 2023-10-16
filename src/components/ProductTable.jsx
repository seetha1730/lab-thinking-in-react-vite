
import ProductRow from "./ProductRow"

function ProductTable(){
return(

    <table className="styled-table"> 
    <thead> 
    <tr>
    <th>Index</th>
     
      <th> Name </th>
      <th>Price</th>
      <th>Stock</th>
     
      </tr>
    </thead>
    <tbody>

  <ProductRow/>
    
    </tbody>

    </table>
)

}
export default ProductTable