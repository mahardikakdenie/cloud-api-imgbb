import { UploadResponseInterface } from "../interface/media_interface";
import Media from "../model/media";

export const saveMedia = async (media: { url: string; type: string; meta: UploadResponseInterface }) => {
    return await Media.create(media);
};
