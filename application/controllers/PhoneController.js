"use strict";

export  default class PhoneController{

    constructor($scope, $routeParams , CartService , PhoneService){

        let id = $routeParams.phoneID;
        $scope.isLoaded = false;

        $scope.addPhoneToCart = function ( phone ){

            CartService.addPhone( phone );
        };

        $scope.isContent = function(){

            return $scope.isLoaded ? 'templates/script.html' : '';

        };

        PhoneService.getSinglePhone(`phones/${id}.json`)
            .then(
                phone => {
                    $scope.phone = phone;
                    $scope.thumbnail = phone.images[0];
                    $scope.isLoaded = true;
                    $scope.$apply();
                }
            )
            .catch( error => {
                console.log('error' , error);
            } );



        $scope.setThumbnail = this._setThumbnail.bind( this, $scope );

    }

    _setThumbnail($scope , photo ){

        $scope.thumbnail = photo;

    }//_setThumbnail

}