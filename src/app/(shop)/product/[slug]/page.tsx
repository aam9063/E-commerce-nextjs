import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { inter } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";



interface Props {
    params: {
        slug: string;
    }
}

export default function ProductPage({ params }: Props) {

    const { slug } = params;
    const product = initialData.products.find(product => product.slug === slug);

    if (! product) {
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
            {/* Slideshow */}
            <div className="col-span-1 md:col-span-2">
                {/*Mobile*/}
                <ProductMobileSlideshow 
                    title={product.title}
                    images={product.images}
                    className="block md:hidden"
                />

                {/*Desktop*/}
                <ProductSlideshow 
                    title={product.title}
                    images={product.images}
                    className="hidden md:block"
                />

            </div>


            {/* Product details */}
            <div className="col-span-1 px-5">
                <h1 className={`${inter.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">€{product.price}</p>

                {/* Selector de Tallas */}
                <SizeSelector 
                    selectedSize={product.sizes[0]}
                    availableSizes={product.sizes}
                />

                {/* Selector de Cantidad */}
                <QuantitySelector
                    quantity={1}
                />


                {/* Botón de añadir al carrito */}
                <button className="btn-primary my-5">
                    Añadir al carrito
                </button>

                {/* Descripción */}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-light">
                    {product.description}
                </p>
            </div>
        </div>
    );
}