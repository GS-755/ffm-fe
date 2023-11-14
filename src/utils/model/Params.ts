import { Params } from "react-router-dom";

class ToParams {
  public static getId = (params: Params): number => {
    return Number(params.id);
  }
}

export default ToParams;