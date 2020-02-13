var is_prod = function(){
    var host = window.location.host;
    console.log(host)
    if(!host){
        return 'public/';
    }else{
        return './';
    }
}
export default is_prod;