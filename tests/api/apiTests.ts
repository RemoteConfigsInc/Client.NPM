import { expect } from 'chai';
import { RemoteConfigsRepository } from '../../index';
import { IRemoteConfigsRepository } from '../../interface/IRemoteConfigsRepository';
import { IConfiguration } from '../../contracts/IConfiguration';
import { INewConfiguration } from '../../contracts/INewConfiguration';

const apiKey = 'API_TOKEN';
let newConfigId = '';

describe('Api Service', () => {
    it('can be initialized with', () => {
        const rcRepo: IRemoteConfigsRepository = new RemoteConfigsRepository('');
        expect(rcRepo).to.not.be.null;
    });
    it('returns configs from Kurt\'s config', async () => {
        const rcRepo = new RemoteConfigsRepository(apiKey);
        const allConfigurations: IConfiguration[] = await rcRepo.GetAllConfigurations();
        expect(allConfigurations).to.not.be.null;
        expect(allConfigurations).to.not.be.undefined;
        expect(allConfigurations).to.be.an('array');
        expect(allConfigurations.length).to.be.greaterThan(0);
    });
    it('returns a specific config from Kurt\'s configs', async () => {
        const configId = 'be4671bc';
        const rcRepo: IRemoteConfigsRepository = new RemoteConfigsRepository(apiKey);
        const specificConfig = await rcRepo.GetConfiguration(configId);
        expect(specificConfig).to.not.be.null;
        expect(specificConfig).to.not.be.undefined;
        expect(specificConfig).to.have.property('uniqueID', configId);
    });
    it('returns a specific config as an object from Kurt\'s configs', async () => {
        const configId = 'be4671bc';
        const rcRepo: IRemoteConfigsRepository = new RemoteConfigsRepository(apiKey);
        const specificConfig = await rcRepo.GetConfigurationObject<object>(configId);
        expect(specificConfig).to.not.be.null;
        expect(specificConfig).to.not.be.undefined;
        expect(specificConfig).to.have.property('uniqueID', configId);
    });
    it('can create a config', async () => {
        const rcRepo: IRemoteConfigsRepository = new RemoteConfigsRepository(apiKey);
        const newConfig: INewConfiguration = {
            name: 'Created From NPM📦',
            description: 'Created From NPM package',
            settings: [{
                key: 'test',
                value: 'tester'
            }]
        };
        const createdConfig = await rcRepo.CreateConfiguration(newConfig);
        expect(createdConfig).to.not.be.null;
        expect(createdConfig).to.not.be.undefined;
        expect(createdConfig).to.have.property('uniqueID');
        newConfigId = createdConfig.uniqueID;
    });
    it('returns newly created config from Kurt\'s configs', async () => {
        const rcRepo: IRemoteConfigsRepository = new RemoteConfigsRepository(apiKey);
        const specificConfig = await rcRepo.GetConfiguration(newConfigId);
        expect(specificConfig).to.not.be.null;
        expect(specificConfig).to.not.be.undefined;
        expect(specificConfig).to.have.property('uniqueID', newConfigId);
    });
    it('updates newly created config in Kurt\'s configs', async () => {
        const rcRepo: IRemoteConfigsRepository = new RemoteConfigsRepository(apiKey);
        const newConfig: INewConfiguration = {
            name: 'Updated From NPM📦',
            description: 'Updated From NPM package',
            settings: [{
                key: 'new',
                value: 'improved'
            }]
        };
        const specificConfig = await rcRepo.UpdateConfiguration(newConfigId, newConfig);
        expect(specificConfig).to.not.be.null;
        expect(specificConfig).to.not.be.undefined;
        expect(specificConfig).to.have.property('uniqueID', newConfigId);
    });
    it('deletes newly created config in Kurt\'s configs', async () => {
        const rcRepo = new RemoteConfigsRepository(apiKey);
        const specificConfig = await rcRepo.DeleteConfiguration(newConfigId);
        expect(specificConfig).to.not.be.null;
        expect(specificConfig).to.not.be.undefined;
    });
});