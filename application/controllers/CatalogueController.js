"use strict";

export default class CatalogueController{

    constructor( $scope , PhoneService, phones){

        $scope.searchObject = PhoneService.getSearchObject();

        $scope.phones = phones;

      // PhoneService.getPhones(`phones/phones.json`, "")
            //.then( phones => {
                //console.log('phones' , phones);
                //$scope.phones = phones;
                //$scope.$apply();

           // } )
            //.catch( error => {
                //console.log("EXCEPTION: " , error)
            //} )


    }//constructor

}