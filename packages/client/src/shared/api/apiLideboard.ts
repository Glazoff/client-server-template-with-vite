import { baseUrl } from '../loadersApi/loaderProfile';

export const leaderboardAddUser = async (data: any) => {
  try {
    const request = await fetch(`${baseUrl}/leaderboard`, {
      method: 'POST',
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

export const leaderboardGetAll = async (data: any) => {
  try {
    const request = await fetch(`${baseUrl}/leaderboard/all`, {
      method: 'POST',
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

export const leaderboardGetTeam = async (data: any) => {
  try {
    const request = await fetch(`${baseUrl}/leaderboard/${data.teamName}`, {
      method: 'POST',
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
