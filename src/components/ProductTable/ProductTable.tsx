import {useEffect, useState} from 'react'
import { Product } from '../../types/Product'
import { ProductService } from '../../services/ProductService';
import Loader from '../Loader/Loader';
import { Button, Table } from 'react-bootstrap';
import { ModalType } from '../../types/ModalType';
import ProductModal from '../ProductModal/ProductModal';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';


const ProductTable = () => {

  //Variable que va a tener todos los datos recibidos por la API
  const [products, setProducts] = useState<Product[]>([]);
  
  //LOADER
  const [isLoading, setIsLoading] = useState(true);

  //Variable para actualizar la tabla automaticamente
  const [refreshData, setRefreshData] = useState(false);

  //Eefecto cada vez que se renderice un componente
  useEffect( () => {
    //Llamamos a la funcion para obtener todos los productos
    const fetchProducts =async () => {
        const products = await ProductService.getProducts();
        setProducts(products);
        setIsLoading(false);
    };

    fetchProducts();
  }, [refreshData]);

  console.log(JSON.stringify(products, null, 2));

//Constante para inicializar un producto por defecto
const initializableNewProduct = (): Product => {
    return {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
    };
};

//Variable para tener como prop al producto
const [product, setProduct] = useState<Product>(initializableNewProduct);

//Constantes para manejar el estado del modal
const [showModal, setShowModal] = useState(false);
const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
const [title, setTitle] = useState("");

//Logica del modal
const handleClick = (newTitle: string, prod: Product, modal:ModalType) => {
        setTitle(newTitle);
        setProduct(prod);
        setModalType(modal);
        setShowModal(true);
};

  return (
   <>
        <Button onClick={() => handleClick("Nuevo producto", initializableNewProduct(), ModalType.CREATE)}> Nuevo Producto</Button>
        {isLoading ? <Loader/> : (
            <Table hover>
                <thead>
                    <tr>
                        <th>TITULO</th>
                        <th>PRECIO</th>
                        <th>DESCRIPCION</th>
                        <th>CATEGORIA</th>
                        <th>IMAGEN</th>
                        <th>EDITAR</th>
                        <th>BORRAR</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} alt={product.title} 
                            style={{width: '50px'}}/></td>
                            <td><EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}/></td>
                            <td><DeleteButton onClick={() => handleClick("Borrar producto", product, ModalType.DELETE)}/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}

        {showModal && (
            <ProductModal
            show={showModal}
            onHide={() => setShowModal(false)}
            title={title}
            modalType={modalType}
            prod={product}
            refreshData={setRefreshData}
            />

        )}

   </>
  )

}

export default ProductTable