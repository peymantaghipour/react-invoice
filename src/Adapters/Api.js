import axios from "axios";



const baseURL = "https://localhost:7230/";

class ServerHandlerError extends Error {

    constructor(err) {

        super(err.message);

        switch (err.response.status) {
            case 404:
                this.message = "not found"
                break;
            case 400:
                this.message = "The submitted information is incomplete"
                break;
            case 403:
                this.message = "You do not have the required access"
                break;
            case 409:
                this.message = "Duplicated Error"
                break;
            case 500:
                this.message = "Error In Server"
                break;
            default:
                break;
        }
    }
}


export const Get = async (action,data=null) => {
    let params="";
    if(data)
    {
        params="?";
        for(let key in data)
        {
            if(!!data[key])
            params+=key+"="+data[key]+"&";
        }
    }
    
    let response = await axios.get(baseURL + action.url+params).catch(err => {
       
        throw new ServerHandlerError(err);
    });

     if (response)
        return response.data

     return null;
}

export const Post = async (action, data) => {

    // let formData = new FormData();

    // for (let key in data) {
    //     formData.append(key, data[key]);
    // }


    let response = await axios.post(baseURL + action.url, data,{
            headers: { "Content-Type": "application/json" }
        }
    ).catch(err => {
        throw new ServerHandlerError(err);
    });

    if (response)
        return response.data

    return null;
}

export const Put = async (action, data) => {

    let formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }


    let response = await axios.put(baseURL + action.url, data, {
        headers: { "Content-Type": "application/json" }
    }).catch(err=>{
        throw new ServerHandlerError(err);
    });

    if (response)
        return response.data

    return null;
}

export const Remove = async (action, ids) => {

    return await axios.delete(baseURL + action.url + "/" + Object.values(ids).join("/")).catch(err=>{
        throw new ServerHandlerError(err);
    });
}
