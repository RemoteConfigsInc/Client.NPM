<img src="https://remoteconfigs.com/app/images/logo.svg" style="display: block; margin-left: auto; margin-right: auto; height: 80px; color: #BF2026;"/>
<div align="center">
  Take the pain out of managing all your app configurations that are scattered all over the Internet. With RemoteConfigs, you can manage all your app configurations from a central dashboard and reference them in your applications using our simple REST API.
</div>

<br />

<div align="center">
  <h3>
    <a href="https://remoteconfigs.com">
      Website
    </a>
  </h3>
</div>

<div align="center">
  <sub>RemoteConfigs, Inc. is a <a href="http://redrubyit.co.za">Red Ruby IT (Pty) Ltd.</a> company.</sub>
</div>

<br>

[![npm version](https://badge.fury.io/js/remoteconfigs-client.svg)](https://badge.fury.io/js/remoteconfigs-client)

[![Build status](https://redrubyit.visualstudio.com/RemoteConfigs/_apis/build/status/RemoteConfigs%20-%20NPM%20-%20CI)](https://redrubyit.visualstudio.com/RemoteConfigs/_build/latest?definitionId=15)


# Installation

```bash
$ npm i remoteconfigs-client
```

## Usage

```js
const rcRepo = require('remoteconfigs-client');
```
or
```js
import { RemoteConfigsRepository } from 'remoteconfigs-client';
```

## Example

```js
import { RemoteConfigsRepository } from 'remoteconfigs-client';

fetchRemoteConfigs = async () => {
    const rcRepo = new RemoteConfigsRepository('API_TOKEN');
    const configs = await rcRepo.GetAllConfigurations();
    console.log(configs);
}
```

or if you dont like async/await 

```js
import { RemoteConfigsRepository } from 'remoteconfigs-client';

fetchRemoteConfigs = () => {
    const rcRepo = new RemoteConfigsRepository('API_TOKEN');
    rcRepo.GetAllConfigurations().then((configs) => {
        console.log(configs);
    });
}
```

---
