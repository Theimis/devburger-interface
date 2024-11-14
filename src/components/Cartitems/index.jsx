import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/forrmatPrice';
import TrashIcon from '../../assets/trash.svg';
import {
  ButtonGroup,
  EmptyCart,
  ProductImage,
  ProductTotalPrice,
  TrashImage,
} from './styles';
export function Cartitems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  return (
    <>
      {cartProducts?.length ? (
        <Table.Root>
          <Table.Header>
            <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th>Items</Table.Th>
              <Table.Th>Preço</Table.Th>
              <Table.Th>Quantidade</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Header>
          <Table.Body>
            {cartProducts.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td>
                  <ProductImage src={product.url} />
                </Table.Td>
                <Table.Td>{product.name}</Table.Td>
                <Table.Td>{product.currencyValue}</Table.Td>
                <Table.Td>
                  <ButtonGroup>
                    <button onClick={() => decreaseProduct(product.id)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => increaseProduct(product.id)}>
                      +
                    </button>
                  </ButtonGroup>
                </Table.Td>
                <Table.Td>
                  <ProductTotalPrice>
                    {formatPrice(product.quantity * product.price)}
                  </ProductTotalPrice>
                </Table.Td>
                <Table.Td>
                  <TrashImage
                    src={TrashIcon}
                    alt="lixeira"
                    onClick={() => deleteProduct(product.id)}
                  />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <EmptyCart>carrinho vazio</EmptyCart>
      )}
    </>
  );
}
