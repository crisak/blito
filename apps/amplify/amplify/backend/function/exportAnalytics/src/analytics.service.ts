export default class AnalyticsService {
  async getAll() {
    return [
      {
        page: '/contacto',
        params: null,
        total: 50,
        mobile: { total: 30, android: 20, ios: 10 },
        desktop: { total: 20, chrome: 10, safari: 10 }
      },
      {
        page: '/projects/234234jlk23-23423jj234-24',
        params: {
          projectId: '234234jlk23-23423jj234-24'
        },
        total: 50,
        mobile: { total: 30, android: 20, ios: 10 },
        desktop: { total: 20, chrome: 10, safari: 10 }
      },
      {
        page: '/configuracion',
        params: null,
        total: 50,
        mobile: { total: 30, android: 20, ios: 10 },
        desktop: { total: 20, chrome: 10, safari: 10 }
      },
      {
        page: '/category',
        params: null,
        total: 50,
        mobile: { total: 30, android: 20, ios: 10 },
        desktop: { total: 20, chrome: 10, safari: 10 }
      }
    ]
  }
}
