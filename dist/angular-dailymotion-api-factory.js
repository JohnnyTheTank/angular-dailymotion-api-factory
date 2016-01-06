/**
    @name: angular-dailymotion-api-factory 
    @version: 0.5.0 (06-01-2016) 
    @author: Jonathan Hornung <jonathan.hornung@gmail.com> 
    @url: https://github.com/JohnnyTheTank/angular-dailymotion-api-factory#readme 
    @license: MIT
*/
"use strict";

angular.module("jtt_dailymotion", [])
    .factory('dailymotionFactory', ['$http', 'dailymotionSearchDataService', function ($http, dailymotionSearchDataService) {

        var dailymotionFactory = {};

        dailymotionFactory.getVideosFromUserById = function (_params) {

            if(!_params.id) {
                return false;
            }

            var searchData = dailymotionSearchDataService.getNew("videosFromUserById", _params);
            //https://developer.dailymotion.com/tools/apiexplorer#/reverse/user/videos/list
            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        dailymotionFactory.getVideosFromChannelById = function (_params) {

            if(!_params.id) {
                return false;
            }

            var searchData = dailymotionSearchDataService.getNew("videosFromChannelById", _params);
            //https://developer.dailymotion.com/tools/apiexplorer#/channel/videos/list
                return $http({
                        method: 'GET',
                        url: searchData.url,
                        params: searchData.object,
                    }
                );
        };

        dailymotionFactory.getVideosFromPlaylistById = function (_params) {

            if(!_params.id) {
                return false;
            }

            var searchData = dailymotionSearchDataService.getNew("videosFromPlaylistById", _params);
            //https://developer.dailymotion.com/tools/apiexplorer#/playlist/videos/list
            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        dailymotionFactory.getVideosByParams = function (_params) {
            //https://developer.dailymotion.com/tools/apiexplorer#/video/list
            var searchData = dailymotionSearchDataService.getNew("videosByParams", _params);

            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        return dailymotionFactory;
    }])
    .service('dailymotionSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "https://api.dailymotion.com/";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if (typeof _params[value] !== "undefined") {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var dailymotionSearchData = {
                object: {},
                url: "",
            };

            switch (_type) {

                case "videosFromUserById":
                    dailymotionSearchData.object.fields = 'bookmarks_total,comments_total,created_time,description,duration,embed_html,id,item_type,media_type,owner.id,owner.screenname,owner.url,thumbnail_url,title,updated_time,url,';

                    dailymotionSearchData = this.fillDataInObjectByList(dailymotionSearchData, _params, [
                        'fields', 'channel', 'created_after', 'created_before', 'genre', 'nogenre', 'page', 'limit', 'search', 'tags'
                    ]);

                    dailymotionSearchData.url = this.getApiBaseUrl() + "user/" + _params.id + "/videos";
                    break;

                case "videosFromChannelById":
                    dailymotionSearchData.object.fields = 'bookmarks_total,comments_total,created_time,description,duration,embed_html,id,item_type,media_type,owner.id,owner.screenname,owner.url,thumbnail_url,title,updated_time,url,';

                    dailymotionSearchData = this.fillDataInObjectByList(dailymotionSearchData, _params, [
                        'fields', 'channel', 'created_after', 'created_before', 'search', 'sort', 'tags', 'page', 'limit',
                    ]);

                    dailymotionSearchData.url = this.getApiBaseUrl() + "channel/" + _params.id + "/videos";
                    break;

                case "videosFromPlaylistById":
                    dailymotionSearchData.object.fields = 'bookmarks_total,comments_total,created_time,description,duration,embed_html,id,item_type,media_type,owner.id,owner.screenname,owner.url,thumbnail_url,title,updated_time,url,';

                    dailymotionSearchData = this.fillDataInObjectByList(dailymotionSearchData, _params, [
                        'fields', 'search', 'sort', 'tags', 'page', 'limit',
                    ]);

                    dailymotionSearchData.url = this.getApiBaseUrl() + "playlist/" + _params.id + "/videos";
                    break;

                case "videosByParams":
                    dailymotionSearchData.object.fields = 'bookmarks_total,comments_total,created_time,description,duration,embed_html,id,item_type,media_type,owner.id,owner.screenname,owner.url,thumbnail_url,title,updated_time,url,';

                    dailymotionSearchData = this.fillDataInObjectByList(dailymotionSearchData, _params, [
                        'fields', 'channel', 'country', 'created_after', 'created_before', 'detected_language', 'exclude_ids', 'featured', 'genre', 'has_game', 'hd', 'ids', 'in_history', 'languages', 'list', 'live', 'live_offair', 'live_onair', 'live_upcoming', 'longer_than', 'no_live', 'no_premium', 'nogenre', 'owners', 'partner', 'poster', 'premium', 'private', 'search', 'shorter_than', 'sort', 'svod', 'tags', 'tvod', 'ugc', 'verified', 'page', 'limit'
                    ]);

                    dailymotionSearchData.url = this.getApiBaseUrl() + "videos";
                    break;
            }

            return dailymotionSearchData;
        };
    });