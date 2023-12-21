import { GeneralContent } from "./generalContent";
import { ResponseModel } from "./responseModel";

export interface GeneralContentResponseModel extends ResponseModel {
    data: GeneralContent[];
}
