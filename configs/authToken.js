const express = require("express");
const axios = require("axios");
const dotenv = require('dotenv');

const Tokens = require('../collections/tokens');

dotenv.config();

const authToken = async ()=>{
    return new Promise( async function (resolve, reject){
        let lastToken = await Tokens.findOne({}).sort({'created_at': -1});
        if (lastToken){
            let tokenAccess = lastToken.access_token;
            let tokenDate = lastToken.created_at;  
            if (tokenDate && tokenAccess){
                let now = new Date();
                let difference = now.getTime() - tokenDate.getTime();
                let timeThreshold = 75;
                difference = difference / ( 1000 * 60 );
                if (difference < timeThreshold){ if (tokenAccess){ return resolve(tokenAccess); } }
            }
        } 
        let url = 'http://hml-admin.heroseguros.com.br/oauth/token';
        let formData = new URLSearchParams();
        formData.append('grant_type', process.env.grant_type);
        formData.append('client_id', process.env.client_id);
        formData.append('client_secret', process.env.client_secret);
        formData.append('username', process.env.username);
        formData.append('password', process.env.password);
        formData.append('scope', '');
        
        let newToken = await axios.post( url, formData);
        let token = {
            access_token: newToken.data.access_token,
            token_type: newToken.data.token_type,
            refresh_token: newToken.data.refresh_token,
            expires_in: newToken.data.expires_in,
            created_at: new Date()
        };
        token = new Tokens(token);
        token = await token.save();
        setTimeout(() => { resolve( token.access_token ); }, 200);
    });
}

module.exports = authToken;