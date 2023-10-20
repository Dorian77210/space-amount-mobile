import ISpaceAmountModel from "@data/model/space-amount.model";
import BaseModelDTO from "./base-model.dto";
import ISpaceUserDTO from "./space-user.dto";

export default interface ISpaceAmountDTO extends BaseModelDTO {
    name: string;
    currency: string;
    users: ISpaceUserDTO[];
    description: string;
    created_by: ISpaceUserDTO;
    share_link: string;
};

export const spaceAmountToModel = (dto: ISpaceAmountDTO): ISpaceAmountModel => {
    return {
        createdAt: dto.created_at,
        createdBy: dto.created_by,
        currency: dto.currency,
        description: dto.description,
        id: dto._id,
        name: dto.name,
        shareLink: dto.share_link,
        users: dto.users
    }
};