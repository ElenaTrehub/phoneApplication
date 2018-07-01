"use strict";

export default class PhoneService{

    constructor( $http ){

        this.$http = $http;
        this.allPhones=[];
        this.phonesInApp=[];

        $http.get(`phones/phones.json`)
            .then( response => {
                this.allPhones = response.data;

                for ( let i = 0 ; i <this.allPhones.length ;  i++ ){


                    this.phonesInApp.push(this.allPhones[i]);

                }//for i
            } )
            .catch( error => {
                console.log("EXCEPTION: " , error)
            } )


    }

    getPhonesInApp(){

        return this.phonesInApp;
    }
    seachPhones( seachString ){


        let searchPhones = [];
        if(seachString===""){

            this.phonesInApp = this.allPhones;
        }//if
        else{
            for ( let i = 0 ; i < this.phonesInApp.length ;  i++ ){

                let p = this.phonesInApp[i];

                if(p.name.indexOf(seachString)>-1 ) {

                    searchPhones.push(p);
                }//if

            }//for i

            this.phonesInApp = searchPhones;
            //alert(this.phonesInApp.length);
            }//else

    }

    async getSinglePhone( url ){


        try{
            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPhones" , ex);
            return null;

        }//catch

    }



}
