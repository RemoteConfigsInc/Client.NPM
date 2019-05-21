import { IConfiguration } from "../contracts/IConfiguration";
import { INewConfiguration } from "../contracts/INewConfiguration";
import { IConfigurationObject } from "../contracts/IConfigurationObject";

export interface IRemoteConfigsRepository {
    GetAllConfigurations(): Promise<IConfiguration[]>;
    GetConfiguration(configId: string): Promise<IConfiguration>;
    GetConfigurationObject<T>(configId: string): Promise<IConfigurationObject<T>>;
    CreateConfiguration(configuration: INewConfiguration): Promise<IConfiguration>;
    UpdateConfiguration(configId: string, configuration: INewConfiguration): Promise<IConfiguration>;
    DeleteConfiguration(configId: string): Promise<IConfiguration>;
}