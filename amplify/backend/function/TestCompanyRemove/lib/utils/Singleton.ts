type SingletonConstructor = { newInstance: boolean }

class Singleton {
  private static instance: Singleton

  private users: string[]

  private constructor() {
    this.users = []
  }

  public static getInstance(options?: SingletonConstructor): Singleton {
    if (options?.newInstance) {
      Singleton.instance = new Singleton()

      return Singleton.instance
    }

    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

  getUsers(): string[] {
    return this.users
  }

  setUsers(name: string) {
    const now = new Date()
    const options = { timeZone: 'America/Bogota' }
    const colombiaTime = now.toLocaleString('es-CO', options)

    this.users.push(`🇨🇴 User.${name}  - ${colombiaTime}`)
  }
}

export default Singleton
