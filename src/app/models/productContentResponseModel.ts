import { ProductContent } from "./productContent";
import { ResponseModel } from "./responseModel";

export interface ProductContentResponseModel extends ResponseModel{
    data: ProductContent[];
}