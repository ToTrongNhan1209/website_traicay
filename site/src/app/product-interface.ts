// định dạng dữ liệu cho sản phẩm
export interface ProductInterface {
    _id: string;
    name: string;
    price: number;
    sale: number;
    categoryId: {
        _id: string;
        name: string;
    };
    img: string;
    description: string;
    hot: number;
}
