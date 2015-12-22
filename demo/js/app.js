var app = angular.module("app", ['jtt_dailymotion']);
app.controller('controller', ['$scope', 'dailymotionFactory', function($scope, dailymotionFactory) {

    dailymotionFactory.getVideosFromUserById({
        id:"Bishop-live",
        limit:15
    }).success(function(_data){
        console.info("videos from user by id", _data);
    });

    dailymotionFactory.getVideosFromChannelById({
        id:"PromosGuy",
        limit:15
    }).success(function(_data){
        console.info("videos from channel by id", _data);
    });

    dailymotionFactory.getVideosFromPlaylistById({
        id:"x48aek_BBWLA_pit-bulls-and-parolees",
        limit:15
    }).success(function(_data){
        console.info("videos from playlist by id", _data);
    });

    dailymotionFactory.getVideosByParams({
        search:"pink",
        limit:15
    }).success(function(_data){
        console.info("videos by params", _data);
    });


}]);
