import { useEffect, useState } from "react";

export default function ProductDetailModal({ onHide, id }) {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const handleKeyUpEsc = (e) => {
      if (e.key === "Escape") {
        onHide();
      }
    };
    document.addEventListener("keyup", handleKeyUpEsc);

    const getProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();

    const disableScroll = () => {
      document.body.className = `disable-scroll`;
    };
    disableScroll();

    const visibleScroll = () => {
      document.body.className = "";
    };

    return () => {
      document.removeEventListener("keyup", handleKeyUpEsc);
      visibleScroll();
    };
  }, []);

  const handleClickImage = (image) => {
    setProduct({ ...product, thumbnail: image });
  };

  const handleNextImage = () => {
    if (currentImageIndex + 1 < product.images.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(product.images.length - 1);
    }
  };

  useEffect(() => {
    const changeImageByIndex = () => {
      if (isLoading) {
        return;
      }
      if (currentImageIndex < product.images.length) {
        handleClickImage(product.images[currentImageIndex]);
      }
    };
    changeImageByIndex();
  }, [currentImageIndex]);

  return (
    <div className="modal">
      <span className="close" onClick={onHide}>
        &times;
      </span>
      <div className="modal-dialog">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2>{product.title}</h2>
            <h3>Giá: {product.price}</h3>
            <div>
              <img src={product.thumbnail} width={200} alt="" />
            </div>
            <div>
              <button onClick={handlePrevImage}>Prev</button>
              {product.images?.map((item, index) => (
                <img
                  style={{
                    border: "1px solid #ccc",
                  }}
                  width={80}
                  src={item}
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                  }}
                  className={index === currentImageIndex ? "active" : ""}
                />
              ))}
              <button onClick={handleNextImage}>Next</button>
            </div>
            <p>{product.description}</p>
          </>
        )}
      </div>
      <div className="modal-overlay" onClick={onHide}></div>
    </div>
  );
}
