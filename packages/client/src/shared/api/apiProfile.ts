import { baseUrl } from '../loadersApi/loaderProfile';
import { FormChangePasswordProfile } from '@/widgets/ProfileContentPage/FormChangePassword';
import { FormProfileType } from '@/widgets/ProfileContentPage/FormMainContent';

export const editProfile = async (data: FormProfileType) => {
  try {
    const request = await fetch(`${baseUrl}/user/profile`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const changePasswordProfile = async (data: FormChangePasswordProfile) => {
  try {
    const request = await fetch(`${baseUrl}/user/password`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const changeAvatarProfile = async (data: string | Blob | null) => {
  if (data == typeof null) {
    return 'Картинка не загружена';
  }
  if (data) {
    const formData = new FormData();
    formData.append('avatar', data);
    try {
      const request = await fetch(`${baseUrl}/user/profile/avatar`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
      const data = await request.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};
