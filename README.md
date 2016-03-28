**angular-dailymotion-api-factory** is an angularjs module with a dailymotion api factory.

[![npm version](https://badge.fury.io/js/angular-dailymotion-api-factory.svg)](https://badge.fury.io/js/angular-dailymotion-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-dailymotion-api-factory.svg)](https://badge.fury.io/bo/angular-dailymotion-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-dailymotion-api-factory`
    2. `npm install --save angular-dailymotion-api-factory`
    3. download [angular-dailymotion-api-factory.zip](https://github.com/JohnnyTheTank/angular-dailymotion-api-factory/zipball/master)
2. Add `jtt_dailymotion` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-dailymotion-api-factory/src/angular-dailymotion-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-dailymotion-api-factory/src/angular-dailymotion-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-dailymotion-api-factory.min.js"></script>
    ```
4. Use the factory `dailymotionFactory`


### factory methods

#### getVideos

##### getVideosFromUserById
Get all parameters [here](https://developer.dailymotion.com/tools/apiexplorer#/user/videos/list)
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/user/videos/list
dailymotionFactory.getVideosFromUserById({
    id:"<USER_ID>",
    search:"<SEARCH_TERM>", // (optional)
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

##### getVideosFromChannelById
Get all parameters [here](https://developer.dailymotion.com/tools/apiexplorer#/channel/videos/list)
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/channel/videos/list
dailymotionFactory.getVideosFromChannelById({
    id:"<CHANNEL_ID>",
    search:"<SEARCH_TERM>", // (optional)
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

##### getVideosFromPlaylistById
Get all parameters [here](https://developer.dailymotion.com/tools/apiexplorer#/playlist/videos/list)
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/playlist/videos/list
dailymotionFactory.getVideosFromPlaylistById({
    id:"<PLAYLIST_ID>",
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

##### getVideosByParams
Get all parameters [here](https://developer.dailymotion.com/tools/apiexplorer#/video/list)
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/video/list
dailymotionFactory.getVideosByParams({
    search:"<SEARCH_TERM>", // (optional)
    tags:"<TAGS>", // (optinal)
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```


## Dailymotion JSON API

* docs: https://developer.dailymotion.com/api
* api explorer: https://developer.dailymotion.com/tools/apiexplorer


## License

MIT