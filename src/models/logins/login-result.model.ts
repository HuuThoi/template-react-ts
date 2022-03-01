interface ILoginResultModel {
    accessToken: string,
    basicInfo: {
        userId: string,
        email: string
    }
    companies: []
    email: string,
    firstName: string,
    lastName: string,
    urlAvatar: string,
}

export default ILoginResultModel;