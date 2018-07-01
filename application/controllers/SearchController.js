"use strict"

export  default class SearchController{

    constructor($scope, PhoneService){

        $scope.searchChange = function ( ){
            var text = document.getElementById("searchText").value;
            //alert(text);
            PhoneService.seachPhones(text);
        };
        $scope.searchBack = function ( ){

            PhoneService.seachPhones("");
        };
    }



}