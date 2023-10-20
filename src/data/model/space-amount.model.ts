import ISpaceAmountDTO from "@data/dto/space-amount.dto";
import IBaseModel from "./base-model.model";
import ISpaceUserModel from "./space-user.model";
import { toDTO as userToDTO } from '@data/model/space-user.model';

export default interface ISpaceAmountModel extends IBaseModel {
    name: string;
    currency: string;
    description: string;
    users: ISpaceUserModel[];
    shareLink: string;
    createdBy: ISpaceUserModel;
}

export const spaceAmountToDTO = (model: ISpaceAmountModel): ISpaceAmountDTO => {
    return {
        _id: model.id,
        created_at: model.createdAt,
        created_by: userToDTO(model.createdBy),
        currency: model.currency,
        description: model.description,
        name: model.name,
        share_link: model.shareLink,
        users: model.users
    }
}