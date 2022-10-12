export interface AuthBase{
    logout(): Promise<boolean>
}