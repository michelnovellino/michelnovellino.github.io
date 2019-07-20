var is_prod = function(){
    var host = window.location.host;
    if(host == "michelnovellino.com.ve" || host == "michelnovellino.github.io"){
        return 'public/';
    }else{
        return './';
    }
}
export default is_prod;