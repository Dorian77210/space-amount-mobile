import ISpaceAmountDTO from "@data/dto/space-amount.dto";
import http from "@data/http/http";

const endpoint = "space-amount";

const create = async (
  name: string,
  description: string,
  currency: string,
  username: string,
  userId: string
) => {
  return await http.post<{ created: boolean, spaceAmount: ISpaceAmountDTO}>(
    endpoint,
    {
      name,
      description,
      currency,
      users: [
        {
          name: username,
          id: userId,
        },
      ],
    }
  )
};

const SpaceAmountService = {
  create,
};

export default SpaceAmountService;
