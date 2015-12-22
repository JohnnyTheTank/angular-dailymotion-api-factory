**angular-dailymotion-api-factory** is an angularjs module with a dailymotion api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-dailymotion-api-factory`
2. Add `jtt_dailymotion` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-dailymotion-api-factory/src/angular-dailymotion-api-factory.js"></script>
    ```

4. Use the factory `dailymotionFactory`


### factory methods

#### getVideos

##### getVideosFromUserById
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/user/videos/list
dailymotionFactory.getVideosFromUserById({
    id:"<USER_ID>",
    search:"<SEARCH_TERM>", // (optional)
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

##### getVideosFromChannelById
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/channel/videos/list
dailymotionFactory.getVideosFromChannelById({
    id:"<CHANNEL_ID>",
    search:"<SEARCH_TERM>", // (optional)
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

##### getVideosFromPlaylistById
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/playlist/videos/list
dailymotionFactory.getVideosFromPlaylistById({
    id:"<PLAYLIST_ID>",
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

##### getVideosByParams
```js
// all parameters: https://developer.dailymotion.com/tools/apiexplorer#/video/list
dailymotionFactory.getVideosByParams({
    search:"<SEARCH_TERM>", // (optional)
    tags:"<TAGS>", // (optinal)
    limit:"<LIMIT>", // (optional) valid values: 1-100 | default: 10
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```


## Dailymotion JSON API

* docs: https://developer.dailymotion.com/api
* api explorer: https://developer.dailymotion.com/tools/apiexplorer


## License

MIT