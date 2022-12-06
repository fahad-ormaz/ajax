/* 
    All Rights Reserved athershahid.com
    https://www.athershahid.com/cdn/ajax/ajax-1.0.0.js 
*/
class Ajax{
    post(dataVal={}){
        let data, xhttp = new XMLHttpRequest();
        xhttp.open('POST', dataVal.url, true);
        xhttp.setRequestHeader("Content-Type", "application/json")
        if(!(dataVal.data===null||dataVal.data===''||dataVal.data=={})){
            data = dataVal.data;
            xhttp.send(JSON.stringify(data));
        }else{
            xhttp.send();
        }
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                dataVal.success(this.responseText);
            }
        }
    }
    get(dataVal={}){
        let data, xhttp = new XMLHttpRequest();
        xhttp.open('GET', dataVal.url, true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        if(!(dataVal.data===null||dataVal.data===''||dataVal.data=={})){
            data = dataVal.data;
            xhttp.send(JSON.stringify(data));
        }else{
            xhttp.send();
        }
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                dataVal.success(this.responseText);
            }
        }
    }
}
const ajax = new Ajax();

// export default ajax;