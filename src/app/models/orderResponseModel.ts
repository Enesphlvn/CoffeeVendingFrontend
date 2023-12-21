import { Order } from "./order";
import { ResponseModel } from "./responseModel";

export interface OrderResponseModel extends ResponseModel{
    data: Order[];
}