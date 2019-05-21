import { IRemoteConfigsRepository } from "./interface/IRemoteConfigsRepository";
import { IConfiguration } from "./contracts/IConfiguration";
import axios from 'axios'
import { INewConfiguration } from "./contracts/INewConfiguration";
import { IConfigurationObject } from "./contracts/IConfigurationObject";

export function Hello(): void {
    console.log('hello');
}

export class RemoteConfigsRepository implements IRemoteConfigsRepository {

    private _apiKey: string = '';
    private _configurationsUrl: string = '';

    private _remoteConfigsUrl: string = 'https://api.remoteconfigs.com/';
    private _configurationsEndpoint: string = 'Configurations';
    //private _configurationsObjectEndpoint: string = 'Object';
    private _headerKey: string = 'apikey';


    constructor(apiKey: string) {
        this._apiKey = apiKey;

        this._configurationsUrl = `${this._remoteConfigsUrl}${this._configurationsEndpoint}`;
    }


    GetAllConfigurations = async (): Promise<IConfiguration[]> => {
        try {
            const response = await axios({
                baseURL: this._remoteConfigsUrl,
                url: this._configurationsEndpoint,
                method: 'get',
                headers: {
                    'apiKey': this._apiKey
                }
            });
            const data: IConfiguration[] = response.data;
            return data;
        } catch (error) {
            return [];
        }
    }

    GetConfiguration = async (configId: string): Promise<IConfiguration> => {
        try {
            const response = await axios({
                baseURL: this._remoteConfigsUrl,
                url: `${this._configurationsEndpoint}/${configId}`,
                method: 'get',
                headers: {
                    'apiKey': this._apiKey
                }
            });
            const data: IConfiguration = response.data;
            return data;
        } catch (error) {
            const emptyObj: any = {};
            return emptyObj;
        }
    }

    GetConfigurationObject = async <T>(configId: string): Promise<IConfigurationObject<T>> => {
        try {
            const response = await axios({
                baseURL: this._remoteConfigsUrl,
                url: `${this._configurationsEndpoint}/${configId}/Object`,
                method: 'get',
                headers: {
                    'apiKey': this._apiKey
                }
            });
            const data: IConfigurationObject<T> = response.data;
            return data;
        } catch (error) {
            const emptyObj: any = {};
            return emptyObj;
        }
    }

    CreateConfiguration = async (configuration: INewConfiguration): Promise<IConfiguration> => {
        try {
            const response = await axios({
                baseURL: this._remoteConfigsUrl,
                url: this._configurationsEndpoint,
                method: 'post',
                headers: {
                    'apiKey': this._apiKey
                },
                data: { ...configuration }
            });
            const data: IConfiguration = response.data;
            return data;
        } catch (error) {
            const emptyObj: any = {};
            return emptyObj;
        }
    }

    UpdateConfiguration = async (configId: string, configuration: INewConfiguration): Promise<IConfiguration> => {
        try {
            const response = await axios({
                baseURL: this._remoteConfigsUrl,
                url: `${this._configurationsEndpoint}/${configId}`,
                method: 'put',
                headers: {
                    'apiKey': this._apiKey
                },
                data: { ...configuration }
            });
            const data: IConfiguration = response.data;
            return data;
        } catch (error) {
            const emptyObj: any = {};
            return emptyObj;
        }
    }

    DeleteConfiguration = async (configId: string): Promise<IConfiguration> => {
        try {
            const response = await axios({
                baseURL: this._remoteConfigsUrl,
                url: `${this._configurationsEndpoint}/${configId}`,
                method: 'delete',
                headers: {
                    'apiKey': this._apiKey
                }
            });
            const data: IConfiguration = response.data;
            return data;
        } catch (error) {
            const emptyObj: any = {};
            return emptyObj;
        }
    }
}
