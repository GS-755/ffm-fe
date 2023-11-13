import { Params } from "react-router-dom";

class FoodProps {
  public static getId = (params: Params): number => {
    return Number(params.id);
  }
}

export default FoodProps;