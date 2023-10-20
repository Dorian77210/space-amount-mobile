import ISpaceUserDTO from "@data/dto/space-user.dto";

export default interface ISpaceUserModel {
    name: string;
    id: string;
}

export const toDTO = (user: ISpaceUserModel): ISpaceUserDTO => {
    return {
        ...user
    };
}