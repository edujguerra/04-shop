import { useRouter  } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79.90</span>  
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit blanditiis voluptas sit vel suscipit perferendis illum est deserunt laborum accusantium, modi maxime dicta et sed tenetur amet obcaecati impedit!</p>              
                <button>
                    Comprar agora
                </button>

            </ProductDetails>

        </ProductContainer>
    )
}