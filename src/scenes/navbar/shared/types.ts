export enum SelectedPage {
    Home = "home",
    Services = "services",
    AboutUs = "aboutus",
    ContactUS = "contactus",

}

export interface ServiceType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}