import { IConfigurationSettings } from "./IConfigurationSettings";

export interface INewConfiguration {
    name: string;
    description: string;
    settings: IConfigurationSettings[];
}