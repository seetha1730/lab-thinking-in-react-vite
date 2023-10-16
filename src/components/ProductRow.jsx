
import productData from "./../data.json";

function ProductRow(){
    return(
        <>
    {productData.map((product,index) => (
      
        <tr key={index} className="active-row">
        <td>{index+1}</td>
        {product.inStock === true ?  <td>{product.name}</td>:<td style={{backgroundColor:"red",color:"white"}}>{product.name}</td>}
         
          <td>{product.price}</td>
          {product.inStock === true ? <td>in Stock</td>  :<td>Out of Stock</td>   }
        </tr> 
        ))}
        </>
    )

}
export default ProductRow;