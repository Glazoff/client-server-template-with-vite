export const statusStore = {
  success: 'success',
  loading: 'loading',
  init: 'init',
  error: 'error',
}

export const initState = () => {
  return {
    user: {
      avatar: '',
      display_name: '',
      email: '',
      first_name: '',
      id: 0,
      login: '',
      phone: '',
      second_name: '',
    },
    leaderboard: {
      dataTeam: [],
      dataAll: [],
      ratingFieldName: 'score',
      total: 0,
      page: 0,
      size: 1,
      fullPagesTeam: false,
      fullPagesAll: false,
      status: statusStore.init,
      error: undefined,
    },
  }
}
