import { IConfigurationSettings } from "./IConfigurationSettings";

export interface IConfiguration {
    uniqueID: string;
    name: string;
    description: string;
    createDate: Date;
    lastModifiedOn: Date;
    settings: IConfigurationSettings[];
}