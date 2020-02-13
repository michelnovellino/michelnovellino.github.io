var is_prod = function(){
    var host = window.location.hostname;
    if(host != "localhost"){
        return 'public/';
    }else{
        return './';
    }
}
export default is_prod;