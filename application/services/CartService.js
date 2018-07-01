"use strict";


export default class CartService{

    constructor($cookies){

        this.cart = [];

    }

    getCart(){
        return this.cart;
    }

    addPhone( phone ){

        let exists = this.cart.some( p => {
            return p.id === phone.id;
        } );

        if(!exists){
            this.cart.push( this._getSimplePhone( phone ) );
            $cookies.phones.push(this._getSimplePhone( phone ));
        }//if
        else{

            for ( let i = 0 ; i < this.cart.length ;  i++ ){

                let p = this.cart[i];

                if(p.id === phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else
        console.log('phones' , $cookies.phones);
    }

    _getSimplePhone( phone ){

        return {
            'id' : phone.id,
            'amount' : phone.amount || 1,
            'name' : phone.name,
        };

    }

    removePhone( index ){

        this.cart.splice( index , 1 );
    }

    
}
