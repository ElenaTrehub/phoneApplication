"use strict"


export default class CartViewController{

    constructor($scope, CartService, phones){

        let phonesSimple = CartService.getCart();
        let phonesApp = phones;

        $scope.phonesInCart = (function () {

            let phonesIbCart = [];

            for ( let i = 0 ; i < phonesApp.length ;  i++ ){

                let p = phonesApp[i];

                for(let j = 0 ; j < phonesSimple.length ;  j++ ){

                    let ps = phonesSimple[j];

                    if(p.id === ps.id){

                        phonesIbCart.push({'phone': phonesApp[i],
                            'amount' : phonesSimple[j].amount});

                    }//if

                }//for j


            }//for i

            return phonesIbCart;
        })();

        $scope.AddPhone = function(phone){
            phone.amount +=1;
            CartService.addPhone(phone.phone);
        }//$scope.AddPhone


        $scope.RemovePhone = function(phone, index){

            if(phone.amount>1){
                phone.amount -=1;
                CartService.removeOnePhone(phone.phone);
            }
            else{
                CartService.removePhone(index);
                $scope.phonesInCart.splice( index , 1 );
            }


        }//$scope.AddPhone
    }



}