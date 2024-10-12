import { UploadResponseInterface } from '../interface/media_interface';
import { saveMedia } from '../repository/media_repository';

export const saveMediaService = async (media: UploadResponseInterface, type: string) => {
  const payload = {
    type,
    imgbb_id: media?.id,
    url: media?.display_url,
    meta: media,
  }

  return await saveMedia(payload);
};
