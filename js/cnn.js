//let request = require('request');   //npm install --save request
const axios = require("axios");
let cheerio = require('cheerio');   //npm install --save cheerio


//import request from 'request';
//import { load } from 'cheerio';

let url = "http://codenamu.org/blog/";

request(url, function (err, res, html) {
    if (!err) {
        let $ = cheerio.load(html);
        
        // 블로그 title 정보 가져오기
        $(".entry-title > a").each(function () {
            let post = {"title": "", "link": "", "summary": "", "category": []};
            let data = $(this);
            
            post["title"] = data.text();
            post["link"] = data.attr("href");
            console.log(post);
        });
        
        // 블로그 요약 정보 가져오기
        $(".entry-summary > p").each(function (i) {
            // do something
        })
 
        // 블로그 카테고리 가져오기
        $(".entry-categories").each(function (i) {
            $(this).children('a').each(function () {
                // do something
            });
        })
    }
})
