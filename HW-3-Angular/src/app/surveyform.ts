export class Surveyform {
    Gid: string;
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    telephoneNumber: string;
    email: string;
    dateOfSurvey: string;
    likedMostOptions: string;
    interestedIn: string;
    likelihoodToRecommend: string;
    additionalComments: string;
    constructor() {
        this.Gid="";
        this.firstName = "";
        this.lastName = "";
        this.streetAddress = "";
        this.city = "";
        this.state = "";
        this.zip = "";
        this.telephoneNumber = "";
        this.email = "";
        this.dateOfSurvey = "";
        this.likedMostOptions = "";
        this.interestedIn = "";
        this.likelihoodToRecommend = "";
        this.additionalComments = "";
    }
}
